import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import CategoruIcon from "../mainComponents/CategoryIcon";

function Categories() {
  return (
    <section id="categories">
      <SectionHeading heading="Categories" />

      <div id="categoriesHeader" >
        <h3 >Browse By Category</h3>

        <div id="arrows">
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109617.png"
            alt=""
          />
        </div>
      </div>

      <div id="categoryicons" >
        <CategoruIcon />
        <CategoruIcon />
        <CategoruIcon />
        <CategoruIcon />
      </div>
    </section>
  );
}

export default Categories;
