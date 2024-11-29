import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category({ name }: { name: string }) {
  return (
    <div className="categoryName     group ">
      <Link href="">{name}</Link>
      <span className="group-hover:inline-block">
        <img
          src="https://static.thenounproject.com/png/517805-200.png"
          // className="w-[12px]"
          alt=""
        />
      </span>
    </div>
  );
}

export default Category;
