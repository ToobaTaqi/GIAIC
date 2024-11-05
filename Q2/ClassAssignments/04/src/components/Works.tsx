import Image, { StaticImageData } from "next/image";
import React from "react";

function Works({
  image,
  heading,
  year,
  category,
  description,
}: {
  image: StaticImageData;
  heading: string;
  year: number;
  category: string;
  description: string;
}) {
  return (
    <div className=" flex justify-center items-center gap-5">
      <Image src={image} alt="" width={300} />
      <div className="flex flex-col gap-4">
        <h2>{heading}</h2>
        <div className="flex gap-5 items-center">
          <p className="bg-[#f48585] w-fit rounded-2xl py-1 px-3 text-sm text-white">
            {year}
          </p>
          <p className="text-gray-500">{category}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Works;
