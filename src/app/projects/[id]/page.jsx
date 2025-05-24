import Image from "next/image";
import picture from "../../../../public/Frame.png";
import Link from "next/link";
import Button from "@/app/Components/button";

export default function projectDetails() {
  return (
    <main className="w-5/6 mx-auto my-16">
      <h1 className="uppercase text-3xl mb-4">Project Title</h1>
      <Image
        src={picture}
        alt="project_image"
        className="object-contain rounded-xl"
      />

      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">Overview</p>
        <div className="flex flex-col">
          <p>
            I'm a User Interface and Experience Designer based in Ghana and also
            a Computer Science student. I enjoy creating things that live on the
            internet, whether that be web Designs, applications UI Designs, or
            anything in between. I have been freelancing for a year now while
            studying at the Koforidua Technical University and I've manage to
            gain a decent amount of experience and valuable knowledge from all
            different kinds of fields throughout my projects/work.
          </p>
          <Button hrefName={"/link-to-project"} buttonName={"Live"} />
        </div>
      </div>
      <Image
        src={picture}
        alt="project_image"
        className="object-contain rounded-xl"
      />
      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">My Role</p>
        <p>
          I'm a User Interface and Experience Designer based in Ghana and also a
          Computer Science student. I enjoy creating things that live on the
          internet, whether that be web Designs, applications UI Designs, or
          anything in between. I have been freelancing for a year now while
          studying at the Koforidua Technical University and I've manage to gain
          a decent amount of experience and valuable knowledge from all
          different kinds of fields throughout my projects/work.
        </p>
      </div>
      <Image
        src={picture}
        alt="project_image"
        className="object-contain rounded-xl"
      />
      <div className="grid grid-rows md:grid-cols-2 gap-2 my-16">
        <p className="mb-4 uppercase text-xl text-gray-500">Challenge</p>
        <p>
          I'm a User Interface and Experience Designer based in Ghana and also a
          Computer Science student. I enjoy creating things that live on the
          internet, whether that be web Designs, applications UI Designs, or
          anything in between. I have been freelancing for a year now while
          studying at the Koforidua Technical University and I've manage to gain
          a decent amount of experience and valuable knowledge from all
          different kinds of fields throughout my projects/work.
        </p>
      </div>
    </main>
  );
}
