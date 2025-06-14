import Image from "next/image";
import picture from "../../../../public/Frame.png";
import Link from "next/link";
import Button from "@/app/Components/button";
import axios from "axios";
import { ShowProjects } from "@/app/Data Access/Project/projectDataAccess";

export default async function projectDetails({ params }) {
  const projectID = params.id;
  //fetch directly from prisma
  const projectDetails = await ShowProjects(projectID);
  console.log(projectDetails);

  return (
    <main className="w-5/6 mx-auto my-16">
      <h1 className="uppercase text-3xl mb-4">{projectDetails.projectTitle}</h1>
      <Image
        src={projectDetails.ProjectImage.title_image}
        width={100}
        height={100}
        alt="project_image"
        className="object-contain rounded-xl"
      />

      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">Overview</p>
        <div className="flex flex-col">
          <p>{projectDetails.overview}</p>
          <Button hrefName={"/link-to-project"} buttonName={"Live"} />
        </div>
      </div>
      <Image
        src={projectDetails.ProjectImage.overview_img}
        width={100}
        height={100}
        alt="project_image"
        className="object-contain rounded-xl"
      />
      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">My Role</p>
        <p>{projectDetails.myrole}</p>
      </div>
      <Image
        src={projectDetails.ProjectImage.role_img}
        width={100}
        height={100}
        alt="project_image"
        className="object-contain rounded-xl"
      />
      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">Challenge</p>
        <p>{projectDetails.challenge}</p>
      </div>
    </main>
  );
}
