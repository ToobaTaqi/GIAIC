import React from "react";

function CategoruIcon() {
  return (
    <div className="flex flex-col justify-center items-center border-2 w-[200px] h-[200px]">
      <img
        src="https://images.vexels.com/content/157345/preview/flat-laptop-icon-laptop-c24f96.png"
        className="w-[150px] "
        alt=""
      />
      <p className="m-4">{"{CategoryName}"}</p>
    </div>
  );
}

export default CategoruIcon;
