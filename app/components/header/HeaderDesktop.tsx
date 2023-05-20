"use client";

import Image from "next/image";
import Link from "next/link";
import CustomLink from "../CustomLink";
import { useState } from "react";
import HeaderMobile from "./HeaderMobile";

function HeaderDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full pt-7 md:pt-[89px] ">
      <Image
        src="/images/logo.svg"
        width={60}
        height={40}
        alt="Logo"
        priority={true}
        className="md:w-auto sm:w-45 sm:h-28"
      />

      <ul className="md:inline-flex gap-10 hidden">
        <li>
          <CustomLink label="Home" color="text-grayish-blue-dark" />
        </li>
        <li>
          <CustomLink label="New" color="text-grayish-blue-dark" />
        </li>
        <li>
          <CustomLink label="Popular" color="text-grayish-blue-dark" />
        </li>
        <li>
          <CustomLink label="Trending" color="text-grayish-blue-dark" />
        </li>
        <li>
          <CustomLink label="Categories" color="text-grayish-blue-dark" />
        </li>
      </ul>

      <button className="w-auto md:hidden " onClick={() => setIsOpen(!isOpen)}>
        <Image src="/images/icon-menu.svg" alt="menu" width={40} height={19} />
      </button>

      <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default HeaderDesktop;
