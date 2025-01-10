"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import search from "../../assets/mobile/search.png";
import cart from "../../assets/mobile/cart.png";
import ham from "../../assets/mobile/ham.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu=()=>{
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-3 py-5 ">
        {/* logo */}
        <h1 className="font-bold text-lg w-[50vw]">Bandage</h1>
        <div className="flex gap-3">
          {/* icons */}
          <button>
            <Image src={search} className="w-[20px] m-2" alt="" />
          </button>
          <button>
            <Image src={cart} className="w-[20px] m-2" alt="" />
          </button>
          <button onClick={menu}>
            <Image src={ham} className="w-[20px] m-2" alt="" />
          </button>
        </div>
      </div>
      {/* navigation links */}

      <nav className={menuOpen?`flex flex-col text-xl text-gray-500 font-semibold justify-center items-center py-14 gap-5`:"hidden"}>
        <Link href="/">Home</Link>
        <Link href="/">Product</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}
