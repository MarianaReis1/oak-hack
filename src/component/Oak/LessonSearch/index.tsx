"use client";
import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import searchLessons from "../searchLessons";

export const LessonSearch = () => {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [keyStage, setKeyStage] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  interface Lesson {
    lessonSlug: string;
    lessonTitle: string;
    units: Unit[];
  }

  interface Unit {
    unitSlug: string;
    unitTitle: string;
    examBoardTitle: string | null;
    keyStageSlug: string;
    subjectSlug: string;
  }

  interface SearchParams {
    search: string;
    subject: string;
    keyStage: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const lessons: Lesson[] = await searchLessons({
        search,
        subject,
        keyStage,
      } as SearchParams);
      setLessons(lessons);
    } catch (error) {
      console.error("Error searching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack gap={3} alignItems="start">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms"
            label="Search"
            fullWidth
            required
          />

          <TextField
            type="text"
            placeholder="e.g. maths"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
          />

          <TextField
            type="text"
            placeholder="e.g. ks4"
            label="Key Stage"
            value={keyStage}
            onChange={(e) => setKeyStage(e.target.value)}
          />
          <LoadingButton
            type="submit"
            disabled={loading}
            loading={loading}
            variant="contained"
          >
            Search
          </LoadingButton>
        </Stack>
      </form>
      <ol>
        {lessons.length > 0 &&
          lessons.map((lesson) => (
            <li key={lesson.lessonSlug}>
              <strong>{lesson.lessonTitle}</strong>;<br />
              <span>{lesson.lessonSlug}</span>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default LessonSearch;
