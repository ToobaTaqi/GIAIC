import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import ProductCard from "../mainComponents/ProductCard";

function Todays() {
  return (
    <section className="w-full flex flex-col gap-10  ">
      <SectionHeading heading="Today's" />

      <div className="flex items-center justify-between sm:flex-col md:flex-col md:gap-3">
        <div className="flex w-[55%] justify-between items-center sm:flex-col md:flex-col md:gap-3">
          <h3 className="font-bold text-4xl">Flash Sales</h3>
          <div className="flex gap-4 items-center">
            <div>
              <small>Days</small>
              <p className="font-bold text-4xl ">03</p>
            </div>
            <p className="font-bold text-2xl text-orange-600 ">:</p>
            <div>
              <small>Hours</small>
              <p className="font-bold text-4xl ">23</p>
            </div>
            <p className="font-bold text-2xl text-orange-600">:</p>
            <div>
              <small>Minutes</small>
              <p className="font-bold text-4xl ">19</p>
            </div>
            <p className="font-bold text-2xl text-orange-600">:</p>
            <div>
              <small>Seconds</small>
              <p className="font-bold text-4xl ">56</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
            className="w-[35px] rounded-full bg-slate-100 p-2 m-4"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109617.png"
            className="w-[35px] rounded-full bg-slate-100 p-2 m-4"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-7 mb-10 sm:justify-center sm:gap-20 md:justify-center md:gap-24">
        {/* products */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="flex justify-center">
        <button className="text-white bg-red-600 rounded px-8 py-3">
          View All Products
        </button>
      </div>
    </section>
  );
}

export default Todays;
