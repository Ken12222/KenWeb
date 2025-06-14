"use client";

import Image from "next/image";
import picture from "../../../../public/Frame.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button";
import axios from "axios";

export default function ProjectCard() {
  const [projects, setProjects] = useState("");

  // async function getProjects() {
  //   const response = await axios.get("http://localhost:3000/api/project");
  //   // if (!response.ok) {
  //   //   throw new Error("failed to fetch data");
  //   // }
  //   const project = response.data;
  //   setProjects(project);
  // }

  // getProjects();

  useEffect(() => {
    async function FetchProjects() {
      try {
        const response = await axios.get("/api/project");
        const project = response.data;
        setProjects(project);
      } catch (error) {
        console.log(error);
      }
    }
    FetchProjects();
  }, []);
  console.log(projects);
  return (
    <div className="w-5/6 mx-auto h-full contain mb-8">
      {Array.isArray(projects) &&
        projects &&
        projects.map((project) => (
          <Link href={`projects/${project.id}`} key={project.id}>
            <Image
              src={project.ProjectImage.title_image}
              width={100}
              height={100}
              alt="project_image"
              className="rounded-xl"
            />
            <h3 className="text-[20px] font-medium md:text-[50px] hover:text-gray-400 transition ease-in-out duration-700 pt-2">
              Name
            </h3>
          </Link>
          // <Button hrefName={"/link"} buttonName={"Live"} />
        ))}
    </div>
  );
}
