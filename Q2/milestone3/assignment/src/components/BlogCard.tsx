import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default async function BlogCard({
  image,
  title,
  summary,
  date,
}: {
  image: any;
  title: string;
  summary: string;
  date: string;
}) {


  return (
    // make this div  Link and apply map(while passing the props in parent div)
    <div className="border-black w-[250px] rounded px-3 py-1 shadow-md flex flex-col justify-center items-center bg-white">
      <div className="w-[240px] h-[150px] relative overflow-hidden ">
        <Image
          src={image}
          alt=""
          //   width={100}
          //   height={100}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
          id="bloCardImage"
        />
      </div>

      <div className="flex flex-col justify-start w-full">
        <h2 className="text-2xl font-bold text-start">{title}</h2>
        <p className="text-sm text-justify">{summary}</p>
        <small className="text-end">{date}</small>
      </div>
    </div>
  );
}
