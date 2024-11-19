"use client";
import Image from "next/image";
import React from "react";
import home from "../../public/home.png";

function Home() {
  return (
    <section className="flex w-[1440px] justify-center items-center gap-8 p-5 pb-28 relative top-10">
      <div className="w-[50%] flex flex-col gap-6">
        <div className="font-inter font-bold text-5xl text-[#21243D]">
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
        <Image src={home} alt="" className="rounded-full home" width={250}/>
      </div>
    </section>
  );
}

export default Home;
