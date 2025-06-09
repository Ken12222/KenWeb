import Image from "next/image";
import duafe from "../../../public/duafe.png";
import mizrmo from "../../../public/mizrmo.png";
import oyeh from "../../../public/oyeh.png";
import pmc from "../../../public/pmc.png";
import sikatrim from "../../../public/sikatrim.png";
import Link from "next/link";

export default function BrandWorked() {
  return (
    <>
      <hr className="mb-4 border-gray-600" />
      <div className="w-5/6 mx-auto overflow-hidden my-4">
        {/* <p className="font-extralight text-center py-6 text-gray-300">
          BRANDS I WORKED WITH
        </p> */}
        <div className="animate-slide-left items-center flex justify-between gap-8">
          <Link href="/">
            <Image
              src={duafe}
              alt="brands_logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          <Link href="https://www.mizrmo.com/" target="blank">
            <Image
              src={mizrmo}
              alt="brands_logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <Image
              src={oyeh}
              alt="brands_logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          <Link href="/">
            <Image
              src={pmc}
              alt="brands_logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          <Link href="/">
            <Image
              src={sikatrim}
              alt="brands_logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <hr className="mt-4 border-gray-600" />
    </>
  );
}
