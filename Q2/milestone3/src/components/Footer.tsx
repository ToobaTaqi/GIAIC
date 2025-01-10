import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-sm text-gray-500 gap-2 py-2 pb-4 opacity-80 relative bottom-0 justify-center">
      <div className="w-[85vw] h-[2px] mx-auto bg-white rounded-full"></div>
      <p>All Rights Reserved</p>
      <p>
        Made With Love and frustration By{" "}
        <span className="font-semibold">Tooba Taqi</span>
      </p>
    </footer>
  );
}
