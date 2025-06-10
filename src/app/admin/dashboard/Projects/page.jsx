import Image from "next/image";
import img from "../../../../../public/Frame.png";
import Button from "@/app/Components/button";

export default function AllProjects() {
  const id = 1;
  return (
    <main className="w-5/6 mx-auto my-16">
      <div>
        <Image src={img} alt="project_img" className="rounded-lg" />
        <div className="flex justify-between items-center">
          <p className="text-xl">Project Title</p>
          <Button
            hrefName={`/admin/dashboard/projects/${id}/edit`}
            buttonName={"Update"}
          />
        </div>
      </div>
    </main>
  );
}
