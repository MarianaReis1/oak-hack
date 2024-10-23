import { useState, useEffect } from "react";
import axios from "axios";
import { QuizItemType, QuizResponseType } from "@/types/quiz";
import { ReportSummaryType } from "@/types/report";

export const useFetchQuiz = (lessonId: string) => {
  const [quizData, setQuizData] = useState<QuizItemType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ReportSummaryType | null>(null);

  useEffect(() => {
    const fetchLessonAndQuiz = async () => {
      let attempts = 0;
      const maxAttempts = 5;
      while (attempts < maxAttempts) {
        try {
          const lessonResponse = await axios.get(`/api/report/${lessonId}`);
          const lessonSlug = lessonResponse.data.lessonSlug;
          const endpoint = process.env.NEXT_PUBLIC_OAK_API_ENDPOINT;

          setReport(lessonResponse.data);

          if (!lessonSlug) {
            setError("Report not found!!");
            setLoading(false);
            return;
          }

          const { data } = await axios.get<QuizResponseType>(
            `${endpoint}/lessons/${lessonSlug}/quiz`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_OAK_API_KEY}`,
                "Cache-Control": "no-cache",
                Accept: "application/json",
              },
            },
          );

          const combinedQuizzes = [...data.starterQuiz, ...data.exitQuiz];
          const multipleChoiceQuestions = combinedQuizzes.filter(
            (quiz: QuizItemType) => quiz.questionType === "multiple-choice",
          );

          const filteredQuiz = multipleChoiceQuestions.slice(0, 4);

          setQuizData(filteredQuiz);
          setLoading(false);
          return null;
        } catch (error) {
          attempts++;
          console.error(`Attempt ${attempts} Error fetching quiz data:`, error);
          if (attempts >= maxAttempts) {
            setError("Error fetching quiz data");
            return null;
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchLessonAndQuiz();
  }, [lessonId]);

  return { quizData, loading, error, report };
};
