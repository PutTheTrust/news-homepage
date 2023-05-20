import footerNews from "@/app/data/footerNews";
import FooterIcon from "./FooterIcon";

function Footer() {
  return (
    <div className="flex flex-col gap-8 mb-4 mt-10 md:flex-row">
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
