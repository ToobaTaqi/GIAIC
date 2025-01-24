import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white relative px-5 py-3 bottom-0 mx-auto mt-5 flex flex-col gap-5">
      <Link href="/">
        <h1 className="font-bold text-2xl text-gray-600">Logo</h1>
      </Link>
      <div className="flex flex-wrap justify-between px-5 text-sm text-gray-600 ">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Support</li>
          <li>Karachi, Pakistan</li>
        </ul>
        <div className="border border-gray-200 rounded w-[150px] h-[30px] flex bg-gray-100 justify-center items-center py-1">
          <input type="text" placeholder="Type here..." className="w-[100px] bg-gray-100" />
          <button>Search</button>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center opacity-80">
        <div className="bg-gray-600 rounded w-[90vw] h-[2px]"></div>
        <p className="text-xs text-gray-600">
          Made with Frustration By <span>Tooba Taqi</span>
        </p>
      </div>
    </footer>
  );
}
