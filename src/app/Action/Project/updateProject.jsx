"use server";

import { updateProject } from "@/app/Data Access/Project/projectDataAccess";
import { ProjectformValidation } from "./ProjectFormValidation/ProjectformValidation";

export default async function UpdateProjectAction(id) {
  const formData = new FormData();
  const validatedForm = ProjectformValidation.safeParse({
    title: formData.get("title"),
    overview: formData.get("overview"),
    role: formData.get("role"),
    challenge: formData.get("challenge"),
  });

  if (!validatedForm.success) {
    return { errors: validatedForm.error.flatten().fieldErrors };
  }

  await updateProject(id, validatedForm);
}
