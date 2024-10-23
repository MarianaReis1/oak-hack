"use client";

import { Typography } from "@mui/material";
import LearnerQuiz from "./components/LearnerQuiz";
import { useFetchQuiz } from "./hooks/useFetchQuiz";

type LearnerPageProps = {
  params: {
    id: string;
  };
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function LearnerPage({ params }: LearnerPageProps) {
  const { id } = params;
  const { quizData, report, loading, error } = useFetchQuiz(id);

  if (loading) {
    return <Typography>Loading quiz...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <main>
      <Typography variant="h2" mb={2}>
        Hi {capitalizeFirstLetter(id)}
      </Typography>

      {quizData && <LearnerQuiz quizData={quizData} report={report} />}
    </main>
  );
}
