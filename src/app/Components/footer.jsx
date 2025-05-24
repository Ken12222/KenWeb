import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="w-5/6 mx-auto mb-8 border-gray-600" />
      <footer className="w-5/6 mx-auto my-8 flex justify-between">
        <Link
          href="/"
          target="blank"
          className="border p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          Instagram
        </Link>
        <Link
          href="/"
          target="blank"
          className="border p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          Twitter
        </Link>
        <Link
          href="/"
          target="blank"
          className="border p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          GitHub
        </Link>
        <Link
          href="/"
          target="blank"
          className="border p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          LinkedIn
        </Link>
      </footer>
    </>
  );
}
