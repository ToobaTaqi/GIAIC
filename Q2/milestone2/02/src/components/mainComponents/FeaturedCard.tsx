import React from "react";

function FeaturedCard({ name }: { name: string }) {
  return (
    <div
      className="featuredCard"
    >
      <h3>{name}</h3>
    </div>
  );
}

export default FeaturedCard;
