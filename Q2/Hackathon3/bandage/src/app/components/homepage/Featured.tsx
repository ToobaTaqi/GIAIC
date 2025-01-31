// child of FeaturedProduct
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Featured({
  img,
  title,
  category,
  price,
  dicountPrice,
  href,
}: {
  img: any;
  title: string;
  category: string;
  price: number;
  dicountPrice: number;
  href: string;
}) {
  //  useEffect(() => {
  //     const fetchBestSeller = async () => {
  //       try {
  //         const response: {
  //           _id: string;
  //           productImage: {
  //             asset: {
  //               url: string;
  //             };
  //           };
  //           title: string;
  //           bestseller: boolean;
  //           price: number;
  //           dicountPercentage: number;
  //           category?: { title: string } | null;
  //         }[] = await fetch("/api/product").then((response) => response.json());

  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //     };

  //     fetchBestSeller();
  //   }, []);
  return (
    <Link
      href={`/product/${href}`}
      className="flex flex-col justify-center gap-8 h-[615px] w-[328px] lg:w-[238px]"
    >
      <Image
        src={`${img}`}
        alt=""
        width={100}
        height={100}
        className=" min-h-[427px] w-[328px] lg:w-[238px] h-[427px] mx-auto object-cover"
      />
      <div className="flex flex-col justify-center items-center text-center gap-[10px]">
        <h3 className="font-bold leading-6">{title}</h3>
        <p className="text-[#737373] leading-6 font-bold">{category}</p>
        <div className="flex gap-2">
          <p className="text-[#BDBDBD] font-bold leading-6">${price}</p>
          <p className="text-[#23856D] font-bold leading-6">${dicountPrice}</p>
        </div>
        <div className="flex gap-[6px]">
          <div className="bg-[#23A6F0] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#23856D] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#E77C40] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#252B42] w-[16px] h-[16px] rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}
