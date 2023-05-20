import Image from "next/image";
import HeaderDesktop from "./components/header/HeaderDesktop";
import HeaderMobile from "./components/header/HeaderMobile";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <HeaderDesktop />
      <Hero />
    </main>
  );
}
