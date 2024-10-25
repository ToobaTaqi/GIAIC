"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" w-full flex flex-row justify-between p-3 header">
      <Link href="/">
        <h1 className="logo">Tooba Taqi</h1>
      </Link>

      <nav className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
    </div>
  );
}
