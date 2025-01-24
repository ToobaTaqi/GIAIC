import React from "react";

export default function Card({
  title,
  date,
  originalPrice,
  salePrice,
}: {
  title: string;
  date: string;
  originalPrice: number;
  salePrice: number;
}) {
  return (
    <div className="bg-white w-[250px] h-[300px] rounded shadow hover:shadow-lg flex flex-col px-5 py-3 justify-between">
      <div className="flex justify-between">
        <h1 className="font-semibold text-center">{title}</h1>
        <p className="bg-green-400 w-fit text-xs text-white rounded px-2 py-1 self-end">
          {/* - 40% */}
          {(salePrice/originalPrice)*100}
        </p>
      </div>
      <img
        src="https://i.pinimg.com/originals/49/7b/97/497b97264121a74b035736cf23158e4f.png"
        alt=""
        className="w-[170px] h-[130px] object-contain  mx-auto p-2 border rounded border-gray-200 bg-gray-100"
      />

      <p className="text-gray-400 text-sm">{date}</p>
      <div className="flex gap-3 text-sm font-bold text-gray-600">
        <p>{originalPrice }</p>
        <p>{salePrice}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex border gap-0">
          <button className="border border-gray-600 border-r-0 rounded-l w-[15px]">
            -
          </button>
          {/* placeholder dynamic hoga */}
          <input
            type="number"
            placeholder="1"
            disabled
            className="text-sm text-center w-[30px] border border-gray-600"
          />
          <button className="border border-gray-600 border-l-0 rounded-r w-[15px]">
            +
          </button>
        </div>

        <button className="w-fit bg-blue-400 text-white text-xs rounded px-3 py-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
