"use server";

import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { InsertImages } from "@/app/Data Access/Images/ProjectImages";

export async function saveImages(formData) {
  try {
    if (
      formData.titleImg.name == "undefined" &&
      formData.overviewImg.name != "undefined" &&
      formData.roleImg.name == "undefined"
    ) {
      return {
        errors: {
          titleImage: "Title image is required",
          roleImage: "Role image is required",
        },
      };
    }
    if (
      formData.titleImg.name != "undefined" &&
      formData.overviewImg.name == "undefined" &&
      formData.roleImg.name == "undefined"
    ) {
      return {
        errors: {
          overviewImage: "Overview image is required",
          roleImage: "Role image is required",
        },
      };
    }
    if (
      formData.titleImg.name == "undefined" &&
      formData.overviewImg.name == "undefined" &&
      formData.roleImg.name != "undefined"
    ) {
      return {
        errors: {
          overviewImage: "Overview image is required",
          titleImage: "Title image is required",
        },
      };
    }
    if (
      formData.titleImg.name == "undefined" &&
      formData.overviewImg.name == "undefined" &&
      formData.roleImg.name == "undefined"
    ) {
      return {
        errors: {
          titleImage: "Title image is required",
          overviewImage: "Overview image is required",
          roleImage: "Role image is required",
        },
      };
    }
    if (formData.titleImg.name == "undefined") {
      return { errors: { titleImage: "Title image is required" } };
    }
    if (formData.overviewImg.name == "undefined") {
      return { errors: { overviewImage: "Overview image is required" } };
    }
    if (formData.roleImg.name == "undefined") {
      return { errors: { roleImage: "Role image is required" } };
    }

    if (
      formData.titleImg.size > 2 * 1024 * 1024 ||
      formData.overviewImg.size > 2 * 1024 * 1024 ||
      formData.roleImg.size > 2 * 1024 * 1024
    ) {
      return {
        errors: {
          titleImage: "Image cannot be greater than 2MB",
          overviewImage: "Image cannot be greater than 2MB",
          roleImage: "Image cannot be greater than 2MB",
        },
      };
    }
    const buffer = [
      Buffer.from(await formData.titleImg.arrayBuffer()),
      Buffer.from(await formData.overviewImg.arrayBuffer()),
      Buffer.from(await formData.roleImg.arrayBuffer()),
    ];

    const uploadPath = [
      path.join(process.cwd(), "public/uploads", formData.titleImg.name),
      path.join(process.cwd(), "public/uploads", formData.overviewImg.name),
      path.join(process.cwd(), "public/uploads", formData.roleImg.name),
    ];

    await writeFile(uploadPath[0], buffer[0]);
    await writeFile(uploadPath[1], buffer[1]);
    await writeFile(uploadPath[2], buffer[2]);

    //import prisma and save image path in db
    await InsertImages(uploadPath);

    return { success: true };
  } catch (err) {
    console.error("Upload failed:", err);
    return { error: "Upload failed. Please try again." };
  }
}
