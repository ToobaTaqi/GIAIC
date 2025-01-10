"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex flex-col gap-3">
      <nav className="px-5 py-3 ">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">Bloggers</h1>
        </Link>
      </nav>
      <div className="w-[85vw] h-[2px] mx-auto bg-white rounded-full"></div>
    </header>
  );
}
