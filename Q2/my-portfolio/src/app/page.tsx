"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-6 mt-10 gap-4 home">
      <p>Hi, I'm</p>
      <h2>Tooba Taqi</h2>
      <h3>Full Stack Developer</h3>
      <p>
        I deliver innovative and scalable solutions that meet diverse user needs
        and significantly enhance digital experiences
      </p>
      <Link href='/projects'><button className="text-left">See My Work</button></Link>
    </div>
  );
}
