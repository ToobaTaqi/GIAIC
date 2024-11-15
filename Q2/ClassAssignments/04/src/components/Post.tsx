import React from "react";
import Recent from "./Recent";

function Post() {
  return (
    <div className="w-full bg-[#f4e1e2] flex flex-col gap-6 p-8 pb-16 ">
      <div className="text-xl flex justify-around gap-96">
        <p className="font-semibold">Recent Post</p>
        <p className="text-[#f48585] font-semibold">View all</p>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        <Recent
          heading="Making a design system from scratch"
          date="12 Feb 2020"
          category="Design"
          subcategory="Pattern"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus nihil eius? Fugit eaque fuga ipsum adipisci, quos, quae, cum impedit magni quibusdam esse rem."
        />
        <Recent
          heading="Making a design system from scratch"
          date="12 Feb 2020"
          category="Design"
          subcategory="Pattern"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus nihil eius? Fugit eaque fuga ipsum adipisci, quos, quae, cum impedit magni quibusdam esse rem."
        />
      </div>
    </div>
  );
}

export default Post;
