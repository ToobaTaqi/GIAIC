"use client";
import Image from "next/image";
import React from "react";
import home from "../../public/home.png";

function Home() {
  return (
    <div className="flex w-full justify-center items-center gap-5 p-5">
      <div className="w-[50%] flex flex-col gap-6">
        <div>
          <h1>Hi, I am John,</h1>
          <h1>Creative Technologist</h1>
        </div>
        <p className="w-[65%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero
          facilis, minus reprehenderit sapiente facere temporibus illo deserunt
          voluptate aut cum sed doloribus maiores adipisci illum.
        </p>
        <button>Download Resume</button>
      </div>
      <div>
        <Image src={home} alt="" className="rounded-full home" />
      </div>
    </div>
  );
}

export default Home;
