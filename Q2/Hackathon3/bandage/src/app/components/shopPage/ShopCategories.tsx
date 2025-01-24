import Image from "next/image";
import React from "react";
import { Products, icons } from "../../assets";

export default function ShopCategories() {
  return (
    <section className="bg-[#FAFAFA] ">
      <div className="w-[80vw] mx-auto flex flex-col gap-[18px] py-7">
        <Image src={Products.productList1} alt="" />
        <Image src={Products.productList2} alt="" />
        <Image src={Products.productList3} alt="" />
        <Image src={Products.productList4} alt="" />
        <Image src={Products.productList5} alt="" />
      </div>

      <div className="bg-white flex flex-col gap-[24px] py-7 items-center">
        <p className="text-sm font-bold text-[#737373]">Showing all results</p>

        <div className="flex gap-[15px] justify-center items-center">
          <p className="text-sm font-bold text-[#737373]">Views</p>
          <div className="border rounded p-3">
            <Image src={icons.block} alt="" className="w-[16px] h-[16px] " />
          </div>
          <div className="border rounded p-3">
            <Image src={icons.todos} alt="" className="w-[16px] h-[16px] " />
          </div>
        </div>

        <div className="flex gap-[15px]">
          <select
            id=""
            name="Popularity"
            className="text-sm text-[#737373] bg-gray-100 border-[#DDDDDD] border rounded py-3 px-5"
          >
            <option value="popularity">Popularity</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </select>
          <button className="bg-[#23A6F0] text-white py-3 px-5 rounded">
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}
