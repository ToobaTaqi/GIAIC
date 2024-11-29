"use client";
import React, { useState } from "react";

export default function CustomCss() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="main">
      <h1>Logo</h1>

      <div className="ham">Hamlogo</div>
      <div className="navLinks">
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p>Signup</p>
      </div>

      <div className="searchdiv">
        <input type="search" placeholder="What are you looking for?" />
        <button>
          <img
            src="https://img.icons8.com/ios7/512/search.png"
            className="searchIcon"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}
