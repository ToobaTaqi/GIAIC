import React from "react";

function ProductCard() {
  return (
    <div className="bg-slate-100 w-[250px] h-[250px] flex flex-col justify-evenly">
      <div className="p-2">
        <div className="flex justify-between items-start w-full">
          <p className="bg-red-600 w-fit rounded text-xs px-2 py-1 text-white">
            -40%
          </p>
          <div className="flex flex-col gap-1">
            <img
              src="https://w7.pngwing.com/pngs/799/396/png-transparent-heart-gold-heart-icon-thumbnail.png"
              className="w-[20px] "
              alt=""
            />
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linetype-icon/eye-43.png"
              className="w-[20px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-led-tv-television-screen-vector-png-image_6673700.png"
            className="w-[150px]"
            alt=""
          />
        </div>
      </div>
      <button className="bg-black text-white w-full py-2 text-sm">
        Add To Cart
      </button>

      <div className="w-full bg-white py-2">
        <h3 className="text-lg font-semibold ">Product Name</h3>
        <div className="flex gap-2">
          <p className="text-red-600 font-semibold">${"{SalePrice}"}</p>
          <p className="text-slate-500 line-through font-semibold">
            ${"{ActualPrice}"}
          </p>
        </div>
        <p>Reviews</p>
      </div>
    </div>
  );
}

export default ProductCard;
