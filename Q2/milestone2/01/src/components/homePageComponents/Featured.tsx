import React from "react";
import SectionHeading from "../mainComponents/SectionHeading";
import FeaturedCard from "../mainComponents/FeaturedCard";

function Featured() {
  return (
    <section className="w-full flex flex-col gap-10">
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
