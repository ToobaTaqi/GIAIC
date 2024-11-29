import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import FeaturedCard from "../mainComponents/FeaturedCard";

function Featured() {
  return (
    <section id="featured" >
      <SectionHeading heading="Featured" />

      <div>
        <FeaturedCard name="New Arrival" />
        <FeaturedCard name="Best Selling" />
        <FeaturedCard name="Trending" />
      </div>
    </section>
  );
}

export default Featured;
