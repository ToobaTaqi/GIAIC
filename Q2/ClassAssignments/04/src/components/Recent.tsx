import React from "react";

function Recent({
  heading,
  date,
  category,
  subcategory,
  description,
}: {
  heading: string;
  date: string;
  category: string;
  subcategory: string;
  description: string;
}) {
  return (
    <div className="w-[450px] bg-white p-10 flex flex-col gap-6">
      <h2>{heading}</h2>
      <div className="flex gap-5 text-gray-600">
        <p>{date}</p>
        <p>|</p>
        <div className="flex gap-1">
          <p>{category}</p>
          <p>,</p>
          <p>{subcategory}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Recent;
