"use client";
import { useState } from "react";

export default function TailwindCss() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menu = () => {
    setMenuOpen(!menuOpen);
    // console.log(menuOpen);
  };

  return (
    <nav className="w-full flex flex-row sm:flex-col md:flex-col justify-between lg:items-center xl:items-center 2xl:items-center px-10 border bg-slate-100 py-5 ">
      <div className="flex gap-3 justify-between items-center">
        <h1 className="font-bold text-2xl px-2">Logo</h1>
        <button className="lg:hidden xl:hidden 2xl:hidden" onClick={menu}>
          <img
            className="w-[20px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt=""
          />
        </button>
      </div>

      {/* menu */}
      <ul
        className={` gap-2 justify-center ${
          menuOpen
            ? "bg-slate-400 absolute right-1 mt-10 flex-col w-[200px] rounded "
            : "hidden"
        } lg:flex lg:flex-row lg:bg-inherit lg:mt-0 lg:static xl:flex xl:flex-row xl:bg-inherit xl:mt-0 xl:static 2xl:flex 2xl:flex-row 2xl:bg-inherit 2xl:mt-0 2xl:static `}
      >
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
}
