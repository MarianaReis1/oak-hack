import { AnswerType, QuizItemType } from "@/types/quiz";
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import Latex from "react-latex-next";

type Props = {
  question: QuizItemType;
  selectedOption: string | null;
  handleSelect: (answerContent: string) => void;
};

export default function Question({
  question,
  selectedOption,
  handleSelect,
}: Props) {
  return (
    <Stack direction="column" sx={{ my: 1 }}>
      <Typography variant="text1Bold" sx={{ mb: 3 }}>
        <Latex>{question.question}</Latex>
      </Typography>

      {question.questionImage && (
        <Box sx={{ mb: 2 }}>
          <Image
            src={question.questionImage.url}
            alt="Question image"
            width={question.questionImage.width}
            height={question.questionImage.height}
            style={{ maxWidth: "100%" }}
          />
        </Box>
      )}

      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        value={selectedOption}
      >
        {question.answers.map((answer: AnswerType, index: number) => (
          <ToggleButton
            key={index}
            value={answer.content}
            onClick={() => handleSelect(answer.content)}
            color="secondary"
            sx={{ width: "fit-content" }}
          >
            <Typography component="span" variant="text1Bold" mr={1}>
              {String.fromCharCode(65 + index)}&#41;{" "}
            </Typography>
            {answer.content}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
