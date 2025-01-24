// child of Editors
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({ p, text }: { p: any; text: string }) {
  return (
    <Link href='/product-list' className="relative w-[80vw] mx-auto">
      <Image src={p} alt="" className="w-[324px] h-[500px] object-cover " />
      <button className="absolute bottom-7 left-10 text-black font-bold bg-white py-3 px-16">
        {text}
      </button>
    </Link>
  );
}
