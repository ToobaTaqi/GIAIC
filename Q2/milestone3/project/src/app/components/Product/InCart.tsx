import React from "react";

export default function InCart() {
  return (
    <div className="flex border border-gray-600 justify-between py-2 px-4 rounded-lg shadow-md">
      <h3>Product Title</h3>
      <div className="flex gap-3 ">
        <div className="flex border gap-0">
          <button className="border border-gray-600 border-r-0 rounded-l w-[15px] hover:bg-white">
            -
          </button>
          {/* placeholder dynamic hoga */}
          <input
            type="number"
            placeholder="1"
            className="text-sm text-center w-[30px] border border-gray-600 bg-white "
            disabled
          />
          <button className="border border-gray-600 border-l-0 rounded-r w-[15px] hover:bg-white">
            +
          </button>
        </div>
        <button className="bg-blue-400 text-sm rounded text-white px-3 py-1">
          Add
        </button>
      </div>
    </div>
  );
}
