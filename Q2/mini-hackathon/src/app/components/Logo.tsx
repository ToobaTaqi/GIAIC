import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";

export default function Logo() {
  let width = "32.58px";
  return (
    <div className="flex justify-center items-center">
      <Image
        src={logo}
        alt="Logo"
        width={25}
        height={25}
        id="logo"
        className="w-[25.76px] h-[26.6px] shadow-2xl"
      />
      <h1 className="font-bold text-3xl">Ddsgnr</h1>
    </div>
  );
}
