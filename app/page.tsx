import Image from "next/image";
import HeaderDesktop from "./components/header/HeaderDesktop";
import HeaderMobile from "./components/header/HeaderMobile";
import Hero from "./components/Hero";
import Footer from "./components/header/Footer";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <HeaderDesktop />
      <Hero />
      <Footer />
    </main>
  );
}
