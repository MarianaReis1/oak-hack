import { NextRequest, NextResponse } from "next/server";
import { getRecordById } from "../../sqlite/route";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Invalid lesson ID" }, { status: 400 });
  }

  try {
    const lesson = getRecordById(id);
    if (!lesson) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(lesson, { status: 200 });
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
