import Image from "next/image";
import { FC } from "react";

interface FooterIconProps {
  itemNo: string;
  title: string;
  content: string;
  url: string;
}

const FooterIcon: FC<FooterIconProps> = ({ itemNo, title, content, url }) => {
  return (
    <div className="flex justify-between gap-6">
      <Image src={url} alt={title} height={127} width={100} />

      <div className="flex flex-col justify-between">
        <h2 className="text-grayish-blue text-2xl font-bold">{itemNo}</h2>
        <h3 className="text-lgs font-bold">{title}</h3>
        <p className="text-grayish-blue-dark text-sm font-semibold ">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FooterIcon;
