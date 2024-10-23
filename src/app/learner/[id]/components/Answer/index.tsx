"use client";

import { Check, Close } from "@mui/icons-material";
import { Stack, Typography, Button, Chip } from "@mui/material";

type Props = {
  correct: boolean | null;
  answer?: string;
  correctAnswer?: string;
  lastQuestion: boolean;
  onNextQuestion: () => void;
};

export default function Answer({
  correct,
  correctAnswer,
  lastQuestion,
  onNextQuestion,
}: Props) {
  return (
    <Stack direction="column" gap={2} alignItems="start">
      <Stack direction="row" alignItems="center" sx={{ my: 1 }}>
        {correct ? (
          <>
            <Stack direction="row" gap={2} alignItems="center">
              <Chip color="success" icon={<Check />} />
              <Typography variant="h4">Correct!</Typography>
            </Stack>
          </>
        ) : (
          <Stack direction="row" gap={2} alignItems="center">
            <Chip color="warning" icon={<Close />} />
            <Typography variant="h4">Good try!</Typography>
            <Typography variant="text2">
              Todo: Have AI generate an explanation of where the learner went
              wrong and link to portion of the video in the Oak lesson that
              deals with the specific issue.
            </Typography>
          </Stack>
        )}
      </Stack>

      <Typography variant="text1Bold" sx={{ my: 1 }}>
        The answer was: {correctAnswer}
      </Typography>

      <Button sx={{ mt: 2 }} onClick={onNextQuestion}>
        {lastQuestion ? "Show Results" : "Next Question"}
      </Button>
    </Stack>
  );
}
