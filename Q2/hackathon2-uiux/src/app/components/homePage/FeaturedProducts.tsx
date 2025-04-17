import React from "react";
import { Products } from "../../assets";
import Featured from "./Featured";

export default function FeaturedProducts() {

  return (
    <section className="min-w-[333px] w-[80vw] mx-auto py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3 text-center">
        <h2 className=" text-xl leading-[30px] text-[#737373]">
          Featured Products
        </h2>
        <h3 className="font-bold text-2xl ">
          BESTSELLER <br className="lg:hidden" /> PRODUCTS
        </h3>
        <p className="text-sm text-[#737373]">
          Pronlems trying to resolve <br className="lg:hidden" /> the conflict
          between
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] lg:justify-center lg:items-center mx-auto ">
      
        <Featured
          img={Products.p6}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p7}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p8}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p9}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p10}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p10}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
        <Featured
          img={Products.p1}
          title="Title"
          updateDate={'23 / 2 / 24'}
          price={23}
          discountPrice={3}
        />
      </div>
    </section>
  );
}
