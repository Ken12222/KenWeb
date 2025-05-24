import Image from "next/image";
import Ken from "../../../public/Ken.jpg";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <hr className="mt-8 border-gray-600" />
      <article className="w-5/6 mx-auto my-4 flex flex-col md:flex-row items-center gap-8">
        <Image
          src={Ken}
          alt="Ken_image"
          width={250}
          height={250}
          className="object-contain rounded-full"
        />
        <div className="flex flex-col md:m-32">
          <p>
            I'm a User Interface and Experience Designer based in Ghana and also
            a Computer Science student. I enjoy creating things that live on the
            internet, whether that be web Designs, applications UI Designs, or
            anything in between. I have been freelancing for a year now while
            studying at the Koforidua Technical University and I've manage to
            gain a decent amount of experience and valuable knowledge from all
            different kinds of fields throughout my projects/work.
          </p>
          <Link
            href="/contact"
            className="border py-2 px-4 my-4 w-fit hover:bg-white hover:text-black font-light transition ease-in-out duration-700"
          >
            Connect
          </Link>
        </div>
      </article>
    </>
  );
}
