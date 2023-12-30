import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import { getTechnologies } from "@/lib/data";

export const runtime = "edge";

export function GET(req: Request) {
  const technologies = getTechnologies();

  return NextResponse.json(technologies);
}
