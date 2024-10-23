import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "my-database.db");
const db = new Database(dbPath);

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS data (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    keyStage TEXT NOT NULL,
    keywords TEXT NOT NULL,
    lessonSlug TEXT NOT NULL,
    lessonTitle TEXT NOT NULL
  )
`,
).run();

export function insertRecord(
  subject: string,
  keyStage: string,
  keywords: string,
  id: string,
  lessonSlug?: string,
  lessonTitle?: string,
) {
  const stmt = db.prepare(
    "INSERT INTO data (id, subject, keyStage, keywords, lessonSlug, lessonTitle) VALUES (?, ?, ?, ?, ?, ?)",
  );
  stmt.run(id, subject, keyStage, keywords, lessonSlug, lessonTitle);
}

export function getRecordById(id: string) {
  const stmt = db.prepare("SELECT * FROM data WHERE id = ?");
  return stmt.get(id);
}

export function getRecords() {
  return db.prepare("SELECT * FROM data").all();
}
