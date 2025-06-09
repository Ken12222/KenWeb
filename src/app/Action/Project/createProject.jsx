"use server";

import { createProject } from "@/app/Data Access/Project/projectDataAccess";
import { ProjectformValidation } from "./ProjectFormValidation/ProjectformValidation";
import { writeFile } from "fs/promises";
import path from "path";

export default async function createProjectAction(prevState, formData) {
  const validatedForm = ProjectformValidation.safeParse({
    title: formData.get("title"),
    overview: formData.get("overview"),
    role: formData.get("role"),
    challenge: formData.get("challenge"),
  });

  if (!validatedForm.success) {
    return { errors: validatedForm.error.flatten().fieldErrors };
  }

  //save new project in db
  await createProject(validatedForm);
}
