import { ChatGPTAPI } from "chatgpt";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import searchLessons from "../../../component/Oak/searchLessons";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY as string;

if (!apiKey) {
  throw new Error(
    "NEXT_PUBLIC_OPENAI_API_KEY is not defined in environment variables.",
  );
}

const chatGpt = new ChatGPTAPI({
  apiKey: apiKey,
  completionParams: {
    model: "gpt-4",
  },
});

export async function POST(req: NextRequest) {
  try {
    const { report, subject, keyStage, studentName } = await req.json();
    const id = studentName.toLowerCase();

    if (!report) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const prompt = await fs.readFile(
      process.cwd() + "/src/app/api/tutorReportOrchestration/prompt.txt",
      "utf8",
    );
    const completePrompt = prompt
      .replace("$LESSON_REPORT", report)
      .replace("$SUBJECT", subject)
      .replace("$KEY_STAGE", keyStage);

    const chatGptResponse = await chatGpt.sendMessage(completePrompt);

    const keywordsArray = Array(chatGptResponse.text);
    const searchQuery = keywordsArray.slice(0, 4).join(", ");

    const searchResults = await searchLessons({
      search: searchQuery,
      subject,
      keyStage,
    });

    const lessonSlug =
      searchResults.length > 0 ? searchResults[0]?.lessonSlug : null;
    const lessonTitle =
      searchResults.length > 0 ? searchResults[0]?.lessonTitle : null;

    await axios.post("/api/sqlite", {
      subject,
      keyStage,
      keywords: chatGptResponse.text,
      id,
      lessonSlug,
      lessonTitle,
    });

    return NextResponse.json({
      subject,
      keyStage,
      keywords: keywordsArray,
      id,
      lessonSlug,
      lessonTitle,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: `Failed: ${error}` }, { status: 500 });
  }
}
