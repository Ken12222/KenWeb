import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Cookyes } from "@/app/Session/cookies";

const prisma = new PrismaClient();

export async function FetchProjects() {
  return <>This are all the projects</>;
}

export async function ShowProjects(projectId) {
  return <>This are all the projects</>;
}

export async function createProject(projectData) {
  await Cookyes();
  const addProject = await prisma.project.create({
    data: {
      projectTitle: projectData.data.title,
      overview: projectData.data.overview,
      myrole: projectData.data.role,
      challenge: projectData.data.challenge,
    },
  });

  if (addProject) return { success: true };
  if (!addProject) return { errors: "failed" };
}

export async function updateProject(projectId, projectData) {
  const updateProject = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      projectTitle: projectData.data.projectTitle,
      overview: projectData.data.overview,
      myrole: projectData.data.role,
      challenge: projectData.data.challenge,
    },
  });

  updateProject
    ? NextResponse.json({ success: "You have successfully updated Project" })
    : NextResponse.json({
        errors: "Failed to update project. Try again later",
      });
}

export async function deleteProject(projectId) {
  const deleteProject = await prisma.project.update({
    where: {
      id: projectId,
    },
  });

  deleteProject
    ? NextResponse.json({ success: "You have successfully deleted Project" })
    : NextResponse.json({
        errors: "Failed to delete project. Try again later",
      });
}
