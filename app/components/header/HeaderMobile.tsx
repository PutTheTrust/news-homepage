import Image from "next/image";
import CustomLink from "../CustomLink";

import { Dispatch, FC, SetStateAction } from "react";

interface HeaderMobileProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderMobile: FC<HeaderMobileProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen ? "bg-black/50 w-full h-full top-0 left-0  absolute" : "hidden"
      }
    >
      <nav className="absolute top-0 right-0 w-[65%] h-full z-50 bg-background pt-7">
        <button className="block ml-auto mr-5" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/icon-menu-close.svg"
            width={32}
            height={32}
            alt="close"
          />
        </button>

        <ul className="mt-24 flex flex-col gap-[30px] ml-[25px]">
          <li>
            <CustomLink label="Home" color="text-black" />
          </li>
          <li>
            <CustomLink label="New" color="text-black" />
          </li>
          <li>
            <CustomLink label="Popular" color="text-black" />
          </li>
          <li>
            <CustomLink label="Trending" color="text-black" />
          </li>
          <li>
            <CustomLink label="Categories" color="text-black" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
