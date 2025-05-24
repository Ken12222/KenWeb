"use client";

import Link from "next/link";
import { useState } from "react";
import { LuAlignRight } from "react-icons/lu";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <>
      {isMenuOpen ? (
        <div>
          <nav className="flex flex-col gap-2  my-4">
            <ul>
              <li className="flex items-center justify-between my-0">
                <Link
                  href="/projects"
                  className="my-4 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Projects
                </Link>
                <RiCloseLargeLine
                  size={20}
                  className="text-white"
                  onClick={openMenu}
                />
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/Resume"
                  download=""
                  className=" mb-4 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Resume
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/contact"
                  className="py-2 my-8 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <nav className="flex justify-between my-8">
          <div className="block md:hidden">
            <ul>
              <li>
                <Link href="/">KA.</Link>
              </li>
            </ul>
          </div>
          <LuAlignRight
            size={25}
            className="md:hidden text-white"
            onClick={openMenu}
          />
        </nav>
      )}

      {/* Larger screen Menu */}
      <div className="hidden md:block">
        <nav className=" flex justify-between my-8">
          <div>
            <ul>
              <li>
                <Link href="/">KA.</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-8">
            <ul>
              <li>
                <Link
                  href="/projects"
                  className="p-4 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Projects
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/Resume"
                  download=""
                  className="p-4 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Resume
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/contact"
                  className="p-4 items-center border-b border-transparent hover:border-white transition ease-in-out duration-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
