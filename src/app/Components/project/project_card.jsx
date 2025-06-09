"use client";

import Image from "next/image";
import picture from "../../../../public/Frame.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button";

export default function ProjectCard() {
  //const project = axios.get("http://localhost:3000/");

  const [project, setProject] = useState("");

  useEffect(() => {
    async function pro() {
      await fetch("http://localhost:3000/api/project")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProject(data);
        });
    }
    pro();
  }, []);

  const id = 1;
  return (
    <div className="w-5/6 mx-auto h-full contain mb-8">
      <Link href={`projects/${id}`}>
        <Image src={picture} alt="project_image" className="rounded-xl" />
        <h3 className="text-[20px] font-medium md:text-[50px] hover:text-gray-400 transition ease-in-out duration-700 pt-2">
          {project.projectTitle}
        </h3>
      </Link>
      <Button hrefName={"/link"} buttonName={"Live"} />
    </div>
  );
}
