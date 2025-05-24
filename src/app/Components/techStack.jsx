import Image from "next/image";
import Laravel from "../../../public/laravel.png";
import figma from "../../../public/figma.png";
import next from "../../../public/next.png";
import php from "../../../public/php.png";
import react from "../../../public/react.png";

export default function TechStack() {
  return (
    <>
      <hr className="mb-8 border-gray-600" />
      <div className="w-5/6 mx-auto overflow-hidden">
        {/* <p className="font-extralight text-center py-6 text-gray-300">
        TECH I USE
        </p> */}
        <div className="w-full animate-slide-lef items-center flex justify-between gap-8">
          <Image
            src={Laravel}
            alt="tech_logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <Image
            src={figma}
            alt="tech_logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src={next}
            alt="tech_logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <Image
            src={react}
            alt="tech_logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <Image
            src={php}
            alt="tech_logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
