"use client";
import { useState } from "react";

export default function CustomCss() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar">
      <div id="navHeader">
        <h1>Logo</h1>
        <button id="menuButton" onClick={menu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="Menu"
          />
        </button>
      </div>

      <ul id="menu" className={menuOpen ? "active" : ""}>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
}
