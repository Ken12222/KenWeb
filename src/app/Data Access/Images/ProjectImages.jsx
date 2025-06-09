// import { saveImages } from "@/app/Action/Project/saveImages";
import { Cookyes } from "@/app/Session/cookies";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function InsertImages(uploadPath) {
  await Cookyes();
  const SaveImage = await prisma.projectImages.create({
    data: {
      title_image: uploadPath[0],
      overview_img: uploadPath[1],
      role_img: uploadPath[2],
    },
  });
  !SaveImage ? { errors: { role_img: "Failed to upload Images" } } : "";
}
