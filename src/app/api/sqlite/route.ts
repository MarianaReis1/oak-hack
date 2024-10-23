import { NextRequest, NextResponse } from "next/server";
import { insertRecord, getRecordById } from "@/utils/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const record = getRecordById(id);
    if (!record) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    return NextResponse.json(record, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { subject, keyStage, keywords, id, lessonSlug, lessonTitle } =
      await req.json();

    if (
      !subject ||
      !keyStage ||
      !keywords ||
      !id ||
      !lessonSlug ||
      !lessonTitle
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    insertRecord(subject, keyStage, keywords, id, lessonSlug, lessonTitle);
    return NextResponse.json(
      { message: "Record inserted successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to insert record" },
      { status: 500 },
    );
  }
}
