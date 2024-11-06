"use client";
import Link from "next/link";
import { BsJournalCode } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa6";
import { SlUserFemale } from "react-icons/sl";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { PiHandshakeThin } from "react-icons/pi";

export default function Header() {
  return (
    <div className=" w-full flex flex-row justify-between p-3 fixed right-0 top-0">
      <Link href="/">
        <h1 className="logo">Tooba Taqi</h1>
      </Link>

      <nav className="flex gap-3 items-center ">
        <Link href="/"> <FaAngleUp className="nav-icon"/></Link>
        <Link href="/about">
          <SlUserFemale className="nav-icon"/>
        </Link>
        <Link href="/projects">
          <IoCodeWorkingOutline className="nav-icon"/>
        </Link>
        <Link href="/contact">
          <PiHandshakeThin className="nav-icon"/>
        </Link>
        <div className="h-[1px] w-[300px] sm:w-0 sm:h-0 bg-[#6763ac]"></div>
      </nav>
    </div>
  );
}
