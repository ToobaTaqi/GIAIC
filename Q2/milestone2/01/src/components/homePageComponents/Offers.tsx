import React from "react";
import OfferCard from "../mainComponents/OfferCard";

function Offers() {
  return (
    <section className="flex w-full justify-around">
      <OfferCard
        logo="https://cdn-icons-png.flaticon.com/512/7615/7615749.png"
        heading="FREE AND FAST DELIVERY"
        paragraph="Free Delivery for all orders over $140"
      />
      <OfferCard
        logo="https://cdn-icons-png.flaticon.com/512/7615/7615749.png"
        heading="FREE AND FAST DELIVERY"
        paragraph="Free Delivery for all orders over $140"
      />
      <OfferCard
        logo="https://cdn-icons-png.flaticon.com/512/7615/7615749.png"
        heading="FREE AND FAST DELIVERY"
        paragraph="Free Delivery for all orders over $140"
      />
    </section>
  );
}

export default Offers;
