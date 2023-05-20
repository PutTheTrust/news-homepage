import footerNews from "@/app/data/footerNews";
import FooterIcon from "./FooterIcon";

function Footer() {
  return (
    <div className="flex flex-col gap-8 my-4">
      {footerNews.map((item) => (
        <FooterIcon
          key={item.id}
          itemNo={item.itemNo}
          title={item.title}
          content={item.content}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default Footer;
