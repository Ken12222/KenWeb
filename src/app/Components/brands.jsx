import Image from "next/image";
import duafe from "../../../public/duafe.png";
import mizrmo from "../../../public/mizrmo.png";
import oyeh from "../../../public/oyeh.png";
import pmc from "../../../public/pmc.png";
import sikatrim from "../../../public/sikatrim.png";

export default function BrandWorked() {
  return (
    <div className="w-5/6 mx-auto overflow-hidden my-16">
      <div className="animate-slide-lef items-center flex justify-between gap-8">
        <Image
          src={duafe}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={mizrmo}
          alt="laravel"
          width={100}
          height={100}
          className="object-contain"
        />
        <Image
          src={oyeh}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={pmc}
          alt="laravel"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src={sikatrim}
          alt="laravel"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <p className="font-extralight text-center py-6 text-gray-300">
        BRANDS I WORKED WITH
      </p>
    </div>
  );
}
