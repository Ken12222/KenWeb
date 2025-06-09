"use server";

import { createSession } from "@/app/Session/session";
import { FormValidation } from "./AuthDataValidation/page";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export default async function SignInAction(prev, formData) {
  const validatedFormData = FormValidation.safeParse({
    username: formData.get("Username"),
    password: formData.get("Password"),
  });

  if (!validatedFormData.success) {
    return { errors: validatedFormData.error.flatten().fieldErrors };
  }

  const prisma = new PrismaClient();

  const User = await prisma.admin.findFirst({
    where: {
      username: validatedFormData.data.username,
    },
  });

  if (!User) {
    return { errors: { password: "No user Found" } };
  }

  // const passwordSalt = await bcrypt.genSalt(10);
  // const hashPwd = await bcrypt.hash(
  //   validatedFormData.data.password,
  //   passwordSalt
  // );
  // console.log(hashPwd);

  const pwdCheck = await bcrypt.compare(
    validatedFormData.data.password,
    User.password
  );

  if (!pwdCheck) {
    return { errors: { password: "No user with the provided credentials" } };
  }

  const session = await createSession(User.id);

  return { success: "success" };
}
