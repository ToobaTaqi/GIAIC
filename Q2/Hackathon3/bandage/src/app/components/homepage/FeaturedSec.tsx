import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "../../assets";

export default function FeaturedSec() {
  return (
    <section className="pt-32 flex flex-col gap-[80px] min-w-[333px] w-[60vw] mx-auto ">
      <div className="text-center flex flex-col gap-[10px]">
        <h1 className="text-[#23A6F0] font-bold text-sm">Practice Advice</h1>
        <h2 className="text-[#252B42] font-bold text-4xl leading-[50px]">
          Featured Products
        </h2>
        <p className="text-[#737373] text-sm leading-5">
          Problems trying to resolve the <br className="lg:hidden" /> conflict
          between the two major
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        <ProductCard image={Products.productcard1} />
        <ProductCard image={Products.productcard2} />
        <ProductCard image={Products.productcard3} />
      </div>
    </section>
  );
}
