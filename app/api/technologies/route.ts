import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET(req: Request) {
  const jsonDir = path.join(process.cwd(), "data", "technologies.json");

  const json = fs.readFileSync(jsonDir, "utf8");

  return NextResponse.json(JSON.parse(json));
}
