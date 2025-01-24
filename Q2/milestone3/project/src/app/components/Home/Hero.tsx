import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-red-300 w-[90vw] mx-auto h-[250px] my-3">
      <img
        src="https://5.imimg.com/data5/XL/RM/DB/SELLER-16425730/home-appliances-500x500.jpg"
        alt=""
        className="object-cover w-[90vw] mx-auto h-[250px]"
      />
    </section>
  );
}
