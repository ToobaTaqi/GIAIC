import React from "react";
import Card from "./Card";
import card1 from "../../assets/mobile/card1.png";
import car2 from "../../assets/mobile/card2.png";
import car3 from "../../assets/mobile/card3.png";
import car4 from "../../assets/mobile/card4.png";

export default function Categories() {
  return (
    <section className="w-[80vw] mx-auto py-16">
      {/* header of section */}
      <div className="flex flex-col items-center py-6 gap-2">
        <h2 className="text-2xl font-bold">EDITOR'S PICK</h2>
        <div className="text-center text-gray-500">
          <p>Problems trying to resolve</p>
          <p>the conflict between</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <Card url={card1} name="MEN" />
        <Card url={car2} name="WOMEN" />
        <Card url={car3} name="ACCESSORIES" />
        <Card url={car4} name="KIDS" />
      </div>
    </section>
  );
}
