import Category from "@/components/homePageComponents/Category";
import Todays from "@/components/homePageComponents/Todays";
import Categories from "@/components/homePageComponents/Categories";
import React from "react";
import Featured from "@/components/homePageComponents/Featured";
import Offers from "@/components/homePageComponents/Offers";

function HomePage() {
  return (
    <div id="home" >
      <section id="heroSection" >

        <div id="allCategories" >
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
        <div id="crousel" >
          {/* replace img tag with crousel component later */}
          <img
            src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg"
            alt="" 
            // className="w-[60vw] sm:w-[75vw]"
          />
        </div>
      </section>

      <Todays />
      <div className="line "></div>
      <Categories />
      <div className="line"></div>
      <Featured />
      <Offers />
    </div>
  );
}

export default HomePage;
