import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 sm:px-0 md:px-0 my-10 sm:my-2 md:my-3 border-b-2 max-w-full w-[85%] md:w-full sm:w-full mx-20 sm:mx-0 md:mx-0 sm:flex-col sm:gap-3 md:flex-col md:gap-5 ">
      <Link href="/" className="text-black font-semibold text-2xl">
        Exclusive
      </Link>
      <div className="flex font-semibold w-[30%] justify-between sm:w-full md:w-full md:justify-around">
        <Link href="/">Home</Link>
        <Link href="">Contact</Link>
        <Link href="/home/about">About</Link>
        <Link href="">Signup</Link>
      </div>
      <div className="flex">
        <label htmlFor="search" className="flex bg-slate-200 w-fit mx-3">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="bg-slate-200 w-[185px] text-sm pl-2"
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            className="w-[20px] m-2"
            alt=""
          />
        </label>
        <img
          src="https://w7.pngwing.com/pngs/799/396/png-transparent-heart-gold-heart-icon-thumbnail.png"
          className="w-[20px] m-2"
          alt=""
        />
        <img
          src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sale-Stickers-PNG/Shopping_Cart_Icon_PNG_Clipart.png?m=1629814077"
          className="w-[20px] m-2"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
