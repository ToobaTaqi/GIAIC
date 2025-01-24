import React from "react";
import Card from "../Product/Card";
import Link from "next/link";

export default function Featured() {
  return (
    <section className=" flex flex-col gap-6 items-center">
      <h2 className="text-xl font-bold">Featured Products</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {/* yaham map lgega */}
        <Card />
        <Card />
      </div>
      <Link href="/products" className="self-end text-gray-600 text-sm bg-gray-100 hover:bg-gray-300 px-3 py-2 rounded">View All Products</Link>
    </section>
  );
}
