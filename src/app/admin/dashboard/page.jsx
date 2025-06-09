"use client";

import Button from "@/app/Components/button";
import InputField from "@/app/Components/input";
import TextField from "@/app/Components/textbox";
import { useActionState, useState } from "react";
import createProjectAction from "@/app/Action/Project/createProject";
import { saveImages } from "@/app/Action/Project/saveImages";

export default function AdminDashboard() {
  const [state, formAction] = useActionState(createProjectAction, {
    errors: {},
    success: {},
  });
  const [status, setStatus] = useState("");
  async function handleSaveImage(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const formData = {
      titleImg: form.get("title_img"),
      overviewImg: form.get("overview_img"),
      roleImg: form.get("role_img"),
    };
    const result = await saveImages(formData);

    if (result.errors) {
      setStatus(result.errors);
    } else {
      setStatus(result);
    }
  }
  return (
    <main className="w-5/6 mx-auto my-16">
      <Button
        hrefName={"admin/dashboard/projects"}
        buttonName={"All Projects"}
      />
      <h1 className="mt-4">Add New Project</h1>
      <form className="mb-8" action={formAction}>
        <TextField
          fieldType={"text"}
          fieldName={"title"}
          placetext={"Please enter project title"}
        />
        {state && <p className="text-red-400">{state.errors.title}</p>}

        <TextField
          fieldType={"text"}
          fieldName={"overview"}
          placetext={"Please enter project overview"}
        />
        {state && <p className="text-red-400">{state.errors.title}</p>}

        <TextField
          fieldType={"text"}
          fieldName={"role"}
          placetext={"Please enter role"}
        />
        {state && <p className="text-red-400">{state.errors.title}</p>}

        <TextField
          fieldType={"text"}
          fieldName={"challenge"}
          placetext={"Please enter challenge"}
        />
        {state && <p className="text-red-400">{state.errors.title}</p>}
        <button className="border py-2 px-4">Submit</button>
      </form>

      <form onSubmit={handleSaveImage} encType="multipart/form-data">
        <InputField
          fieldType={"file"}
          fieldName={"title_img"}
          placetext={"Please select image"}
          required
        />
        {status && <p className="text-red-400">{status.titleImage}</p>}

        <InputField
          fieldType={"file"}
          fieldName={"overview_img"}
          placetext={"Please select image"}
          required
        />
        {status && <p className="text-red-400">{status.overviewImage}</p>}
        <InputField
          fieldType={"file"}
          fieldName={"role_img"}
          placetext={"Please select image"}
          required
        />
        {status && <p className="text-red-400">{status.roleImage}</p>}
        {status.success && (
          <p className="text-green-600 bg-green-300 p-4 rounded mb-4">
            Images Uploaded Successfully
          </p>
        )}
        <button className="border py-2 px-4">Save Images</button>
      </form>
    </main>
  );
}
