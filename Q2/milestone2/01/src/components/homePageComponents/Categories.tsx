import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import CategoruIcon from "../mainComponents/CategoryIcon";

function Categories() {
  return (
    <section className="w-full flex flex-col gap-10">
      <SectionHeading heading="Categories" />

      <div className="flex items-center justify-between">
        <h3 className="font-bold text-4xl ">Browse By Category</h3>

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

      <div className="flex flex-wrap gap-7 mb-10">
        <CategoruIcon />
        <CategoruIcon />
        <CategoruIcon />
        <CategoruIcon />
      </div>
    </section>
  );
}

export default Categories;
