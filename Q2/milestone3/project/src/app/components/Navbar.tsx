import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 py-3 bg-gray-600 text-white">
      <Link href="/">
        <h1 className="font-bold text-2xl ">Logo</h1>
      </Link>
      <nav>
        <ul className="flex gap-3 text-sm items-center">
          <Link href="/">
            <li className="hover:text-black ">Home</li>
          </Link>
          <Link href="/products">
            <li className="hover:text-black">Products</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-black">About</li>
          </Link>
          <Link href="/cart">
            <li className="hover:text-black  flex items-center gap-1 ">
              Cart <span className="text-green-400 text-xs">2</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
