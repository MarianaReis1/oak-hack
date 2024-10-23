import { Typography } from "@mui/material";
import ReportForm from "@/component/ReportForm";

export default function Home() {
  return (
    <main>
      <Typography variant="h3" mb={2}>
        Tutor Lesson Report
      </Typography>

      <ReportForm />
    </main>
  );
}
