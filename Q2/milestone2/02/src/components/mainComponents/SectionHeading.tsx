import React from "react";

function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className="sectionHeading">
      <div className="box "></div>
      <h2>{heading}</h2>
    </div>
  );
}

export default SectionHeading;
