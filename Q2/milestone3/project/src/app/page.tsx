import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Card from "./components/Product/Card";
import Featured from "./components/Home/Featured";

export default function Home() {
  return (
    <main className="w-[90vw] mx-auto flex flex-col gap-5 py-5">
      <Hero />
      <Featured />
    </main>
  );
}
