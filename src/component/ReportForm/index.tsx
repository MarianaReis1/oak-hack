"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState, FormEvent } from "react";
import { LoadingButton } from "@mui/lab";
import { ReportSummaryType } from "@/types/report";

export default function Home() {
  const [reportInput, setReportInput] = useState<string>("");
  const [subject, setSubject] = useState<string>("Maths");
  const [keyStage, setKeyStage] = useState<string>("KS4");
  const [studentName, setStudentName] = useState<string>("");
  const [response, setResponse] = useState<ReportSummaryType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const report = await axios.post("/api/tutorReportOrchestration", {
        subject,
        keyStage,
        report: reportInput,
        studentName,
      });

      setResponse(report.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack gap={3} alignItems="start">
          <TextField
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student name"
            label="Student name"
            fullWidth
            required
          />
          <TextField
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            label="Subject"
            fullWidth
            required
          />
          <TextField
            value={keyStage}
            onChange={(e) => setKeyStage(e.target.value)}
            placeholder="Key Stage"
            label="Key Stage"
            fullWidth
            required
          />
          <TextField
            value={reportInput}
            onChange={(e) => setReportInput(e.target.value)}
            placeholder="Write your lesson report here"
            label="Description"
            maxRows={8}
            fullWidth
            multiline
            required
          />
          <LoadingButton
            type="submit"
            disabled={loading}
            loading={loading}
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Stack>
      </form>

      {formSubmitted && (
        <>
          <Box
            component="section"
            sx={{ marginBottom: "40px", marginTop: "16px" }}
          >
            {response && response.keywords.length > 0 && (
              <div>
                <Typography variant="text1Bold" marginTop={2}>
                  Keywords generated:
                </Typography>
                {response.keywords?.map((item: string) => (
                  <Typography
                    variant="text2"
                    display="inline"
                    key={item}
                    marginRight={1}
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            )}
          </Box>
          <Typography variant="h3" mb={2}>
            After some engineering &ldquo;magic&rdquo; we have a daily challenge
            for our student...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`/learner/${response?.id.toLowerCase()}`}
          >
            View Learner Experience
          </Button>
        </>
      )}
    </>
  );
}
