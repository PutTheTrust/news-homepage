import Image from "next/image";
import Link from "next/link";
import CustomLink from "../CustomLink";

function HeaderDesktop() {
  return (
    <nav className="md:inline-flex justify-between items-center w-full pt-[89px] hidden  ">
      <Image
        src="/images/logo.svg"
        width={60}
        height={40}
        alt="Logo"
        priority={true}
        className="w-auto"
      />

      <ul className="inline-flex gap-10">
        <li>
          <CustomLink label="Home" />
        </li>
        <li>
          <CustomLink label="New" />
        </li>
        <li>
          <CustomLink label="Popular" />
        </li>
        <li>
          <CustomLink label="Trending" />
        </li>
        <li>
          <CustomLink label="Categories" />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderDesktop;
