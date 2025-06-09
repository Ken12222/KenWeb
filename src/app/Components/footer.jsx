import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="w-5/6 mx-auto mb-8 border-gray-600" />
      <footer className="w-5/6 mx-auto my-8 flex justify-between">
        <a
          href="/"
          target="blank"
          className="font-light p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          Instagram
        </a>
        <a
          href="/"
          target="blank"
          className="font-light p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          Twitter
        </a>
        <a
          href="https://github.com/Ken12222"
          target="blank"
          className="font-light p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="blank"
          className="font-light p-2 hover:bg-white hover:text-black transition ease-in-out duration-700"
        >
          LinkedIn
        </a>
      </footer>
    </>
  );
}
