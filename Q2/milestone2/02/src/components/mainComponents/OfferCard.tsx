import React from "react";

function OfferCard({
  logo,
  heading,
  paragraph,
}: {
  logo: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <div className="offerCard ">
      <img src={logo} alt="" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

export default OfferCard;
