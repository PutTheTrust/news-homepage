import Image from "next/image";
import HeaderDesktop from "./components/header/HeaderDesktop";
import HeaderMobile from "./components/header/HeaderMobile";

export default function Home() {
  return (
    <main>
      <HeaderDesktop />

      <p>News Site</p>
    </main>
  );
}
