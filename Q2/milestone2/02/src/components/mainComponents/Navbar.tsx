import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/" id="logo" >
        Exclusive
      </Link>
      <div id="navLinks">
        <Link href="/">Home</Link>
        <Link href="">Contact</Link>
        <Link href="/home/about">About</Link>
        <Link href="">Signup</Link>
      </div>
      <div id="searchDiv">
        <label htmlFor="search" id="searchBar">
          <input type="search" placeholder="What are you looking for?" />
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            className="icon"
            alt=""
          />
        </label>
        <img
          src="https://w7.pngwing.com/pngs/799/396/png-transparent-heart-gold-heart-icon-thumbnail.png"
          className="icon"
          alt=""
        />
        <img
          src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sale-Stickers-PNG/Shopping_Cart_Icon_PNG_Clipart.png?m=1629814077"
          className="icon"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
