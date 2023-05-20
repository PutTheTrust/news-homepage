import Image from "next/image";
import news from "../data/news";
import NewsCard from "./NewsCard";

interface newsType {
  id: number;
  title: string;
  content: string;
}

function Hero() {
  return (
    <div className="mt-5 md:flex md:justify-between gap-8 h-full">
      <div className="md:w-[65%] md:flex md:flex-col">
        <div>
          <Image
            src="/images/image-web-3-mobile.jpg"
            alt="Hero"
            width={343}
            height={300}
            className="md:hidden w-full"
          />

          <Image
            src="/images/image-web-3-desktop.jpg"
            alt="Hero"
            width={730}
            height={300}
            className="hidden md:block w-full"
          />
        </div>

        <div className="md:mt-auto md:flex md:justify-between md:gap-[52px] md:items-center">
          <h1 className="text-5xl font-extrabold mt-4 md:w-1/2">
            The Bright Future of Web 3.0?
          </h1>
          <div className="md:flex-1">
            <p className="text-grayish-blue-dark mt-4">
              We dive into the next evolution of the web that claims to put
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button className="uppercase bg-soft-red my-4 w-[184px] h-10 text-white font-bold tracking-widest text-sm hover:bg-dark-blue transition md:my-0 md:mt-6">
              Read more
            </button>
          </div>
        </div>
      </div>

      <aside className="bg-dark-blue px-5 py-4 flex-1">
        <h2 className="text-soft-orange font-bold text-2xl">New</h2>

        {news.map((item, idx) => (
          <>
            <NewsCard title={item.title} content={item.content} />
            {idx !== 2 && (
              <hr className="bg-grayish-blue h-[1px] border-none" />
            )}
          </>
        ))}
      </aside>
    </div>
  );
}

export default Hero;
