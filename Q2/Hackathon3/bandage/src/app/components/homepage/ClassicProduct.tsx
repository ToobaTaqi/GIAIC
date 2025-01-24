import Image from "next/image";
import React from "react";
import { Products } from "../../assets";

export default function ClassicProduct() {
  return (
    <section className=" pt-48 text-center bg-[#23856D] flex flex-col gap-[30px]">
      <div className=" min-w-[333px] w-[60vw] mx-auto flex flex-col gap-[35px]">
        <h1 className="text-white">SUMMER 2020</h1>
        <h2 className="font-bold text-4xl text-white">Vita Classic Product</h2>
        <p className="text-white text-xl">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col gap-[20px] items-center">
          <p className="text-white font-bold text-2xl">$16.48</p>
          <button className="text-sm font-bold rounded text-white bg-[#2DC071] px-8 py-3 w-fit">
            ADD TO CART
          </button>
        </div>
      </div>
      <Image src={Products.p11} alt=""/>
    </section>
  );
}
