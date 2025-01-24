// child of FeaturedProduct
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Featured({
  img,
  title,
  updateDate,
  price,
  discountPrice,
}: {
  img: any;
  title: string;
  updateDate: any;
  price: number;
  discountPrice: number;
}) {
  // *[_type=='product']{title, _updatedAt, productImage, _rev, price,dicountPercentage   }
  return (
    <Link href="/product" className="flex flex-col justify-center gap-8 ">
      <Image src={img} alt="" width={100} height={100} className="min-w-[348px] min-h-[427px] w-[80vw] h-[427px] mx-auto object-cover"/>
      <div className="flex flex-col justify-center items-center text-center gap-[10px]">
        <h3 className="font-bold leading-6">{title}</h3>
        <p className="text-[#737373] leading-6 font-bold">{updateDate}</p>
        <div className="flex gap-2">
          <p className="text-[#BDBDBD] font-bold leading-6">${price}</p>
          <p className="text-[#23856D] font-bold leading-6">${discountPrice}</p>
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
