import Image from "next/image";
import React from "react";
import banner from "../../assets/mobile/banner.png";

export default function SummerClassic() {
  return (
    <section className="bg-[#23856d] w-full text-white text-center flex flex-col gap-7 pt-44">
      <h1 className="font-semibold text-xl">SUMMER 2020</h1>
      <h2 className="text-4xl font-bold w-[80vw] mx-auto">
        Vita Classic Product
      </h2>
      <p className="text-xl w-[60vw] mx-auto">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold">$16.48</h3>
        <button className="text-sm font-semibold bg-green-500 rounded px-7 py-3 w-fit mx-auto">
          ADD TO CART
        </button>
      </div>
      <Image src={banner} alt="" />
    </section>
  );
}
