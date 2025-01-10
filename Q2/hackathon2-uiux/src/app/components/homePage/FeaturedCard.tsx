import Image from "next/image";
import React from "react";

export default function FeaturedCard({ url }: { url: any }) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <Image src={url} alt="" className="w-full" />
      <h2 className="font-bold text-lg">Graphic Design</h2>
      <p className="text-gray-500">English Department</p>
      <ul className="flex gap-2 font-bold justify-center">
        <li className="text-gray-400">$16.48</li>
        <li className="text-green-950">$16.48</li>
      </ul>
      <div className="flex gap-2 justify-center">
        <div className="w-[18px] h-[18px] rounded-full bg-blue-400"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-green-800"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-orange-600"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-gray-900"></div>
      </div>
    </div>
  );
}
