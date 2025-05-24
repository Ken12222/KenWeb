import Image from "next/image";
import Laravel from "../../../public/laravel.png";
import figma from "../../../public/figma.png";
import next from "../../../public/next.png";
import php from "../../../public/php.png";
import react from "../../../public/react.png";

export default function TechStack() {
  return (
    <div className="w-5/6 mx-auto overflow-hidden">
      <div className="animate-slide-lef items-center flex justify-between gap-8">
        <Image
          src={Laravel}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={figma}
          alt="laravel"
          width={40}
          height={40}
          className="object-contain"
        />
        <Image
          src={next}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={react}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={php}
          alt="laravel"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <p className="font-extralight text-center py-6 text-gray-300">
        TECH I USE
      </p>
    </div>
  );
}
