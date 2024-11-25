import Category from "@/components/homePageComponents/Category";
import Todays from "@/components/homePageComponents/Todays";
import Categories from "@/components/homePageComponents/Categories";
import React from "react";
import Featured from "@/components/homePageComponents/Featured";
import Offers from "@/components/homePageComponents/Offers";

function HomePage() {
  return (
    <div className="px-5 flex flex-col gap-16 max-w-full w-[85%] mx-20" >
      <section className="flex justify-evenly">
        <div className="w-[20%] ">
          <Category name="Women's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
          <Category name="Men's Fashion" />
        </div>
        <div className="w-[80%] pl-6">
          {/* replace img tag with crousel component later */}
          <img
            src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg"
            alt=""
          />
        </div>
      </section>

      <Todays />
      <div className="border w-full "></div>
      <Categories />
      <div className="border w-full"></div>
      <Featured />
      <Offers />
    </div>
  );
}

export default HomePage;
