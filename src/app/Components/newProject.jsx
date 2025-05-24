import Link from "next/link";

export default function NewProject() {
  return (
    <div className="w-5/6 mx-auto flex flex-col gap-4 md:flex-row  md:justify-between my-16 bg-gray-600 border border-gray-300 p-8 items-center rounded-3xl">
      <div>
        <p className="text-white text-2xl">Start your next project</p>
        <p>Get in touch with me let's start your next project</p>
      </div>
      <Link
        href="/contact"
        className="font-light bg-white text-black py-2 px-4 rounded-full border-2 border-transparent hover:text-white hover:bg-black hover:border-white transition ease-in-out duration-700"
      >
        Get In Touch
      </Link>
    </div>
  );
}
