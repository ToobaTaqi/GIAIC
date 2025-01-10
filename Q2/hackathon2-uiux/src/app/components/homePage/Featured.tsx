import React from "react";
import FeaturedCard from "./FeaturedCard";
import productCard1 from "../../assets/mobile/productCard1.png";
import productCard2 from "../../assets/mobile/productCard2.png";
import productCard3 from "../../assets/mobile/productCard3.png"
import productCard4 from "../../assets/mobile/productCard4.png"
import productCard5 from "../../assets/mobile/productCard5.png"
import productCard67 from "../../assets/mobile/productCard67.png"
import card1 from "../../assets/mobile/card1.png";



export default function Featured() {
  return (
    <section className="w-[80vw] mx-auto py-16 flex flex-col justify-center items-center gap-10">
        {/* section header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-gray-500 text-lg font-semibold">
          Featured Products
        </h1>
        <h2 className="w-[50%] mx-auto text-2xl text-center font-bold">
          BESTSELLER PRODUCTS
        </h2>
        <p className="w-[70%] mx-auto text-center text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Featured posts/cards */}
      <div className="w-full flex flex-col gap-16">
        <FeaturedCard url={productCard1}/>
        <FeaturedCard url={productCard2}/>
        <FeaturedCard url={productCard3}/>
        <FeaturedCard url={productCard4}/>
        <FeaturedCard url={productCard5}/>
        <FeaturedCard url={productCard67}/>
        <FeaturedCard url={productCard67}/>
        <FeaturedCard url={card1}/>
      </div>
    </section>
  );
}
