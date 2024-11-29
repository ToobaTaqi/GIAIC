import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import ProductCard from "../mainComponents/ProductCard";

function Todays() {
  return (
    <section id="todays">
      <SectionHeading heading="Today's" />

      <div id="todaysHeader">
        <div id="todaysheaderPart1">
          <h3>Flash Sales</h3>

          <div id="time">
            <div>
              <small>Days</small>
              <p className="nmbr">03</p>
            </div>
            <p className="colon ">:</p>
            <div>
              <small>Hours</small>
              <p className="nmbr ">23</p>
            </div>
            <p className="colon">:</p>
            <div>
              <small>Minutes</small>
              <p className="nmbr">19</p>
            </div>
            <p className="colon">:</p>
            <div>
              <small>Seconds</small>
              <p className="nmbr  ">56</p>
            </div>
          </div>
        </div>

        <div id="todaysheaderPart2">
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

      <div id="todaysProductDiv">
        {/* products */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div id="ViewAllProducts">
        <button>View All Products</button>
      </div>
    </section>
  );
}

export default Todays;
