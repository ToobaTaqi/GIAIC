import Image from "next/image";
import React from "react";
import { Products } from "../../assets";

export default function Partof() {
  return (
    <section className="pt-40 min-w-[333px] w-[60vw] mx-auto flex flex-col gap-[28px] text-center">
      <h1 className="text-[#BDBDBD] font-bold">SUMMER 2020</h1>
      <h2 className="text-[#252B42] font-bold text-4xl">
        Part of the Neural Universe
      </h2>
      <p className="text-[#737373] text-xl w-[255px] mx-auto">
        We know how large objects wil act, but things on a small scale.
      </p>
      <div className="flex flex-col items-center gap-[25px]">
        <button className="rounded text-white text-sm font-bold px-8 py-3 bg-[#23A6F0] w-fit">
          BUY NOW
        </button>
        <button className=" text-[#23A6F0] border px-8 py-3 w-fit rounded border-[#23A6F0] text-sm font-bold">
          Learn More
        </button>
      </div>

      <Image src={Products.p12} alt="" />
    </section>
  );
}
