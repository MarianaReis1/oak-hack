import Image from "next/image";
import { Stack, Typography, Card, CardContent } from "@mui/material";
import { useConfetti } from "../../../../../hooks/useConfetti";

export const CompletedQuiz = () => {
  const { Confetti } = useConfetti({
    config: { autoplay: true },
    position: "absolute",
  });

  return (
    <Card component="main" sx={{ position: "relative" }}>
      <CardContent>
        {Confetti}
        <Stack my={8} display="flex" flexDirection="column" alignItems="center">
          <Image
            src={`/trophy.png`}
            alt="Congratulations"
            width={200}
            height={138}
          />
          <Typography variant="h3" mt={3}>
            Challenge complete!
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
