import React from "react";

function FeaturedCard({ name }: { name: string }) {
  return (
    <div
      className={`bg-[url('https://t3.ftcdn.net/jpg/06/36/44/26/360_F_636442646_II8z4yhYbPoea8P6HoimUblo6ZQXzUXY.jpg')] bg-no-repeat  w-full h-[150px] flex justify-center items-center`}
    >
      <h3 className="font-bold bg-opacity-70 px-6 py-3 rounded bg-black text-white text-center text-4xl ">{name}</h3>
    </div>
  );
}

export default FeaturedCard;
