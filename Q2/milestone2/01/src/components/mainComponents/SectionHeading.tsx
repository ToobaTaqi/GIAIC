import React from "react";

function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className="flex items-center gap-4 sm:px-4 md:px-4">
      <div className="w-5 h-10 rounded bg-red-600"></div>
      <h2 className=" font-bold text-red-600">{heading}</h2>
    </div>
  );
}

export default SectionHeading;
