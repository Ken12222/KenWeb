import { PrismaClient } from "@/generated/prisma";
import { Cookyes } from "../../Session/cookies";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const AllProject = await prisma.project.findMany({
    include: {
      ProjectImage: true,
    },
  });

  return NextResponse.json(AllProject);
}
