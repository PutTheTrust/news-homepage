import Link from "next/link";
import { FC } from "react";

interface CustomLinkProps {
  label: string;
  color: string;
}

const CustomLink: FC<CustomLinkProps> = ({ label, color }) => {
  return (
    <Link href="#" className={`${color} hover:text-soft-orange transition`}>
      {label}
    </Link>
  );
};

export default CustomLink;
