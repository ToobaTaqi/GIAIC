import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category({ name }: { name: string }) {
  return (
    <div className="group flex justify-between sm:justify-center md:justify-center items-center gap-4 py-2 border-r-2 pr-5 md:border-r-0 sm:border-r-0 md:pr-0">
      <Link href="">{name}</Link>
      <span className="hidden group-hover:inline-block">
        <img
          src="https://static.thenounproject.com/png/517805-200.png"
          className="w-[12px]"
          alt=""
        />
      </span>
    </div>
  );
}

export default Category;
