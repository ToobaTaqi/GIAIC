import Category from "@/components/homePageComponents/Category";
import Todays from "@/components/homePageComponents/Todays";
import Categories from "@/components/homePageComponents/Categories";
import React from "react";
import Featured from "@/components/homePageComponents/Featured";
import Offers from "@/components/homePageComponents/Offers";

function HomePage() {
  return (
    <div className="px-5 sm:px-0 flex flex-col gap-16 max-w-full w-[85%] mx-20 sm:mx-0 sm:w-full sm:justify-center md:justify-center" >
      <section className="flex justify-evenly md:flex-col-reverse sm:flex-col-reverse">

        <div className="w-[20%] sm:w-[90vw] md:w-full">
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
        <div className="w-full flex justify-self-center justify-center items-center ">
          {/* replace img tag with crousel component later */}
          <img
            src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg"
            alt="" className="w-[60vw] sm:w-[75vw]"
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
