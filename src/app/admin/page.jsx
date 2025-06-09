"use client";

import { useActionState, useEffect } from "react";
import InputField from "../Components/input";
import SignInAction from "../Action/AuthAction/loginAction";
import { redirect } from "next/navigation";

export default function Admin() {
  const [state, formAction] = useActionState(SignInAction, { errors: {} });

  useEffect(() => {
    if (state.success) {
      redirect("/admin/dashboard");
    }
  }, [state.success]);
  return (
    <main className="w-5/6 md:w-3/6 mx-auto my-16">
      <form action={formAction}>
        <InputField
          fieldName={"Username"}
          placetext={"username"}
          fieldType={"text"}
        />
        {state.errors && (
          <p className="text-red-300 text-sm">{state.errors.username}</p>
        )}
        <InputField
          fieldName={"Password"}
          placetext={"Password"}
          fieldType={"password"}
        />
        {state.errors && (
          <p className="text-red-300 text-sm mb-2">{state.errors.password}</p>
        )}
        <button type="submit" className="w-fit bg-white text-black py-2 px-4">
          Sign In
        </button>
      </form>
    </main>
  );
}
