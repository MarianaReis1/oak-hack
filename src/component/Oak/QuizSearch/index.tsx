"use client";

import React, { useState } from "react";
import {
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import findQuizByLessonSLug from "../findQuizByLessonSlug";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { AnswerType, QuizType, QuizItemType } from "@/types/quiz";

const ImageWrapper = styled("figure")({
  textAlign: "center",
  width: "auto",
  maxWidth: "100%",
  height: "300px",

  "& img": {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "300px",
  },
});

export const QuizSearch = () => {
  const [lessonSlug, setLessonSlug] = useState("");
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [quizType, setQuizType] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const quiz: QuizType = await findQuizByLessonSLug(lessonSlug);
      setQuiz(quiz);
    } catch (error) {
      console.error("Error searching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        <Stack gap={3} alignItems="start">
          <TextField
            type="text"
            placeholder="e.g. demonstrating-pythagoras-theorem"
            label="Lesson Slug"
            value={lessonSlug}
            onChange={(e) => setLessonSlug(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                value="exitQuiz"
                checked={quizType}
                onChange={() => setQuizType(!quizType)}
              />
            }
            label="Exit Quiz?"
          />

          <LoadingButton
            type="submit"
            disabled={loading}
            loading={loading}
            variant="contained"
          >
            Search
          </LoadingButton>
        </Stack>
      </form>
      {quiz && (
        <div>
          <h2>Quiz:</h2>
          <ul>
            {(quizType ? quiz.exitQuiz : quiz.starterQuiz).map(
              (LessonQuiz: QuizItemType, index: number) => (
                <li key={index}>
                  <Stack gap={3} alignItems="start">
                    {LessonQuiz.questionImage && (
                      <ImageWrapper>
                        <Image
                          src={LessonQuiz.questionImage.url}
                          alt={LessonQuiz.questionImage.alt}
                          width={LessonQuiz.questionImage.width}
                          height={LessonQuiz.questionImage.height}
                          unoptimized
                        />
                      </ImageWrapper>
                    )}
                    <Typography variant="h4">{LessonQuiz.question}</Typography>
                  </Stack>
                  <ul>
                    {LessonQuiz.answers.map(
                      (answer: AnswerType, index: number) => (
                        <li key={index}>
                          <p>{answer.content}</p>
                          <p>{answer.distractor ? "Incorrect" : "Correct"}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default QuizSearch;
