import { Stack, Typography, Button, Box } from "@mui/material";
import LessonVideoPlayer from "@/component/Oak/LessonVideoPlayer";

type Props = {
  correctAnswers: number;
  totalQuestions: number;
  onFinish: () => void;
  lessonSlug: string;
};

export default function Results({
  correctAnswers,
  totalQuestions,
  onFinish,
  lessonSlug,
}: Props) {
  return (
    <Stack direction="column" gap={3} alignItems="start">
      <Typography variant="h4">
        {correctAnswers} / {totalQuestions} correct
      </Typography>

      <Typography variant="text1" textAlign="center">
        Great effort! Here’s a short explanation of the topic to help you
        improve.
      </Typography>

      <Box sx={{ width: "100%" }}>
        <LessonVideoPlayer lessonSlug={lessonSlug} />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={onFinish}
        sx={{ mt: 2 }}
      >
        Finish
      </Button>
    </Stack>
  );
}
