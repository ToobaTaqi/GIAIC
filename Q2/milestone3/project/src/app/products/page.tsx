import React from "react";
import Card from "../components/Product/Card";

export default function page() {
  return (
    <section className="w-[90vw] mx-auto py-5 flex flex-col gap-6">
      {/* yahan b map lgega products fetch krne k bd show krne k lye */}
      <h2 className="font-bold text-xl">All Products</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <Card />
        <Card />
      </div>
    </section>
  );
}
