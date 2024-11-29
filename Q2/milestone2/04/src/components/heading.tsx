"use client";
export default function Heading({ name }: { name: string }) {
  return (
    <div className="heading">
      <h2>{name}</h2>
      <div className="line w-[300px] sm:w-full"></div>
    </div>
  );
}
