"use client";

import InputField from "@/app/Components/input";
import TextField from "@/app/Components/textbox";
import { useActionState } from "react";
import UpdateProjectAction from "@/app/Action/Project/updateProject";
import { useParams } from "next/navigation";

export default function EditProject() {
  const id = useParams();
  const [state, formAction] = useActionState(() => UpdateProjectAction(id), {
    errors: {},
  });
  return (
    <main className="w-5/6 mx-auto my-16">
      <form action={formAction}>
        <TextField
          fieldType={"text"}
          fieldName={"title"}
          placetext={"Enter project title"}
        />
        {state && <p className="text-red-400">{state.errors.title}</p>}
        <TextField
          fieldType={"text"}
          fieldName={"overview"}
          placetext={"Enter project Overview"}
        />
        {state && <p className="text-red-400">{state.errors.overview}</p>}
        <TextField
          fieldType={"text"}
          fieldName={"role"}
          placetext={"Enter project Role"}
        />
        {state && <p className="text-red-400">{state.errors.role}</p>}
        <TextField
          fieldType={"text"}
          fieldName={"challenge"}
          placetext={"Enter project Challenge"}
        />
        {state && <p className="text-red-400">{state.errors.challenge}</p>}
        <button className="border py-2 px-4">Submit</button>
      </form>
    </main>
  );
}
