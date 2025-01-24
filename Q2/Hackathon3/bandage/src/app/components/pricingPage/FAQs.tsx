// parent of QnA
import React from "react";
import QnA from "./QnA";

export default function FAQs() {
  return (
    <section className="bg-white text-[#252B42] flex flex-col gap-[80px]">


      <div className="w-[80vw] px-10 bg-red-200 mx-auto text-center flex flex-col gap-[15px]">
        <h2 className="font-bold text-[40px]">Pricing FAQs</h2>
        <p className="text-sm ">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div>
        <QnA/>
      </div>

    </section>
  );
}
