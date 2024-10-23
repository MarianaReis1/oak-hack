"use client";

import { useState } from "react";
import { Card, CardContent, Stack } from "@mui/material";
import Header from "../Header";
import Question from "../Question";
import Answer from "../Answer";
import Results from "../Results";
import { CompletedQuiz } from "../CompletedQuiz";
import { AnswerType, QuizItemType } from "@/types/quiz";
import { ReportSummaryType } from "@/types/report";

type Props = {
  quizData: QuizItemType[];
  report: ReportSummaryType | null;
};

export default function LearnerQuiz({ quizData, report }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  // console.log("lesson slug", report?.lessonSlug);
  console.log(currentQuestion);
  const handleSelectAnswer = (answerContent: string) => {
    setSelectedAnswer(answerContent);

    const correctAnswer = currentQuestion.answers.find(
      (answer: AnswerType) => !answer.distractor,
    )?.content;
    const isAnswerCorrect = answerContent === correctAnswer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setAnsweredQuestions((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const handleFinish = () => {
    setShowResults(false);
    setQuizFinished(true);
  };

  if (quizFinished) {
    return <CompletedQuiz />;
  }

  return (
    <Card>
      <CardContent>
        <Stack direction="column">
          <Header
            totalQuestions={quizData.length}
            answeredQuestions={answeredQuestions}
            topic={report?.subject ?? ""}
            subtopic={report?.lessonTitle ?? ""}
          />

          {showResults ? (
            <Results
              correctAnswers={correctAnswers}
              totalQuestions={quizData.length}
              onFinish={handleFinish}
              lessonSlug={report?.lessonSlug ?? ""}
            />
          ) : !selectedAnswer ? (
            <Question
              question={currentQuestion}
              selectedOption={selectedAnswer}
              handleSelect={handleSelectAnswer}
            />
          ) : (
            <Answer
              correct={isCorrect}
              correctAnswer={
                currentQuestion.answers.find((answer) => !answer.distractor)
                  ?.content
              }
              lastQuestion={currentQuestionIndex === quizData.length - 1}
              onNextQuestion={handleNextQuestion}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
