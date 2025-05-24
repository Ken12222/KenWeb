import Image from "next/image";
import picture from "../../../../public/Frame.png";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="w-5/6 mx-auto contain">
      <Link href="/">
        <Image src={picture} alt="project_image" className="rounded-xl" />
        <h3 className="text-[20px] font-medium md:text-[50px] hover:text-gray-400 transition ease-in-out duration-700 pt-2">
          Mizrmo
        </h3>
      </Link>
    </div>
  );
}
