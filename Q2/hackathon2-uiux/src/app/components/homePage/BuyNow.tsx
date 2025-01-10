import Image from "next/image";
import React from "react";
import asianWomen from "../../assets/mobile/asian-woman-man-with-winter-clothes 1.png";

export default function BuyNow() {
  return (
    <section className="mt-24 w-full flex flex-col gap-6 text-center">
      <h1 className="text-gray-400">SUMMER 2020</h1>
      <h2 className="text-3xl font-bold w-[60vw] mx-auto">
        Part of the Neural Universe
      </h2>
      <p className="text-gray-500 w-[45vw] mx-auto font-semibold">
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="text-xs font-semibold text-white w-[156px] mx-auto bg-[#23a6f0] rounded px-6 py-3">
        BUY NOW
      </button>
      <button className="text-sm font-semibold w-[156px] mx-auto border border-[#23a6f0] text-[#23a6f0] px-6 py-3 rounded">
        Learn More
      </button>
      <Image src={asianWomen} alt="" />
    </section>
  );
}
