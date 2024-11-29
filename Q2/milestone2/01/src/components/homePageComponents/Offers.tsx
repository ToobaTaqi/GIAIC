import React from "react";
import OfferCard from "../mainComponents/OfferCard";

function Offers() {
  return (
    <section className="flex w-full md:flex-wrap sm:flex-col sm:justify-center sm:items-center justify-around">
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
