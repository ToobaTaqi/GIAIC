"use client";
export default function Heading({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-7">
      <h2>{name}</h2>
      <div className="line"></div>
    </div>
  );
}
