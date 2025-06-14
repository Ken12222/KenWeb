import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Cookyes } from "@/app/Session/cookies";
import { saveImages } from "@/app/Action/Project/saveImages";

const prisma = new PrismaClient();

export async function FetchProjects() {
  return <>This are all the projects</>;
}

export async function ShowProjects(projectId) {
  const ID = parseInt(projectId);
  return await prisma.project.findFirst({
    where: {
      id: ID,
    },
    include: {
      ProjectImage: true,
    },
  });
}

export async function createProject(projectData, uploadPath) {
  await Cookyes();
  const [project, projectImages] = await prisma.$transaction(async (tx) => {
    const project = await tx.project.create({
      data: {
        projectTitle: projectData.data.title,
        overview: projectData.data.overview,
        myrole: projectData.data.role,
        challenge: projectData.data.challenge,
      },
    });

    const projectImages = await tx.projectImages.create({
      data: {
        title_image: uploadPath[0],
        overview_img: uploadPath[1],
        role_img: uploadPath[2],
        projectID: project.id,
      },
    });

    return [project, projectImages];
  });

  return { project, projectImages };
}

export async function updateProject(projectId, projectData) {
  await Cookyes();
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

  return updateProject;
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
