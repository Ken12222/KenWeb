import Link from "next/link";

export default function Button({ buttonName, hrefName }) {
  return (
    <Link
      href={hrefName}
      className="border py-2 px-4 my-4 w-fit hover:bg-white hover:text-black font-light transition ease-in-out duration-700"
    >
      {buttonName}
    </Link>
  );
}
