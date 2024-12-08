import React from "react";

export default function FooterGridContent({
  heading,
  p1,
  p2,
  p3,
  p4,
}: {
  heading: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold">{heading}</h2>
      <div className="flex flex-col text-gray-500 font-semibold gap-3">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
      </div>
    </div>
  );
}
