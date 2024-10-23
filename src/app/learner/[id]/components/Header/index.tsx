import { Stack, LinearProgress, Chip, Typography } from "@mui/material";

type Props = {
  totalQuestions: number;
  answeredQuestions: number;
  topic: string;
  subtopic: string;
};

export const Header = ({
  totalQuestions,
  answeredQuestions,
  topic,
  subtopic,
}: Props) => {
  return (
    <Stack direction="column" justifyContent="space-between">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {Array.from({ length: totalQuestions }).map((_, index) => {
          return (
            <LinearProgress
              key={index}
              value={index < answeredQuestions ? 100 : 0}
              variant="determinate"
              sx={{
                height: "4px",
                borderRadius: 1,
                backgroundColor: "secondary.main",
                flexGrow: 1,
              }}
            />
          );
        })}
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        justifyContent="space-between"
        sx={{ my: 2 }}
        gap={2}
      >
        <Stack direction="row" gap={2}>
          <Chip label={"Most recent lesson"} color="secondary" />
          <Chip label={topic} color="secondary" />
        </Stack>
        <Typography variant="text2">{subtopic}</Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
