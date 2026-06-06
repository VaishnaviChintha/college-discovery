import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE() {
  await prisma.college.deleteMany();

  return NextResponse.json({
    message: "All colleges deleted",
  });
}