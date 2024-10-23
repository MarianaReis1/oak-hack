"use client";
import { Button, Typography, Box } from "@mui/material";
import ReportForm from "@/component/ReportForm";
import LessonSearch from "@/component/Oak/LessonSearch";
import QuizSearch from "@/component/Oak/QuizSearch";
import LessonVideo from "@/component/Oak/LessonVideo";
import { styled } from "@mui/material/styles";

const FunctionalSection = styled("div")({
  margin: "10px 0",
  border: "1px solid #000",
  padding: "10px",
});

export default function Home() {
  return (
    <main>
      <Typography variant="h2" mb={2}>
        A peek under the hood
      </Typography>
      <Typography variant="text2" mb={4}>
        How we are using <del>Teacher&apos;s</del> Tutor&apos;s lesson reports
        to generate daily challenges for students to complete between lessons
      </Typography>

      <FunctionalSection>
        <Typography variant="h3" mb={2}>
          Tutor Lesson Report
        </Typography>
        <Typography variant="text2" mb={4}>
          Simulating the <del>Teacher&apos;s</del> Tutor&apos;s summary/report
          at the end of a lesson. Using ChatGPT to extract keywords to use when
          searching Oak API.
        </Typography>

        <ReportForm />
      </FunctionalSection>
      <FunctionalSection>
        <Typography variant="h3" mb={2}>
          Oak Lesson Search
        </Typography>
        <Typography variant="text2" mb={4}>
          Using the subject, level and most important keywords extracted from
          the lesson report to find the most relevant lesson on Oak.
        </Typography>
        <LessonSearch />
      </FunctionalSection>

      <FunctionalSection>
        <Typography variant="h3" mb={2}>
          Find quiz by lesson slug
        </Typography>
        <Typography variant="text2" mb={4}>
          Find the quizzes for a the chosen lesson by its slug - to be used in
          the daily challenge.
        </Typography>
        <QuizSearch />
      </FunctionalSection>
      <FunctionalSection>
        <LessonVideo />
      </FunctionalSection>
    </main>
  );
}
