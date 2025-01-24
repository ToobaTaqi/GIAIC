import React from "react";
import InCart from "../components/Product/InCart";

export default function page() {
  return (
    <section className="w-[90vw] mx-auto flex flex-col gap-5 py-5">
      <h3 className="font-bold text-xl text-gray-600 text-center">My Cart</h3>
      <div className="flex flex-col gap-5">
        <InCart />
        <InCart />
        <InCart />
        <InCart />
      </div>
    </section>
  );
}
