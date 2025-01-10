import React from "react";
import Image from "next/image";

export default function Card({ url, name }: { url: any; name: string }) {
  return (
    <div className="bg-green-300 w-full relative">
      <Image src={url} alt="" className="w-full" />
      <h4 className="absolute border bg-gray-50 font-bold bottom-7 left-8 z-10 px-14 py-3">
        {name}
      </h4>
    </div>
  );
}
