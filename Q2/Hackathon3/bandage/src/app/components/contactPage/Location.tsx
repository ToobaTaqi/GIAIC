import React from "react";
import { icons } from "@/app/assets";
import Image from "next/image";
import LocationCard from "./LocationCard";

export default function Location() {
  return (
    <section className="flex flex-col gap-[60px] py-[75px] bg-[#FAFAFA]">
      <div className="text-[#252B42] text-center flex flex-col gap-[10px]">
        <h2 className="font-bold text-sm">VISIT OUR OFFICE </h2>
        <h3 className="font-bold text-[40px] w-[70vw] mx-auto leading-[50px]">
          We help small businesses with big ideas
        </h3>
      </div>

      <div>
        <LocationCard bg="white" icon={icons.contactIcon1} text="[#252B42]"/>
        <LocationCard bg="[#252B42]" icon={icons.contactIcon2} text="white"/>
        <LocationCard bg="white" icon={icons.contactIcon3} text="[#252B42]"/>
      </div>

     
    </section>
  );
}
