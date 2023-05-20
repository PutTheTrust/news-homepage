import Link from "next/link";
import { FC } from "react";

interface CustomLinkProps {
  label: string;
}

const CustomLink: FC<CustomLinkProps> = ({ label }) => {
  return (
    <Link
      href="#"
      className="text-grayish-blue-dark hover:text-soft-orange transition"
    >
      {label}
    </Link>
  );
};

export default CustomLink;
