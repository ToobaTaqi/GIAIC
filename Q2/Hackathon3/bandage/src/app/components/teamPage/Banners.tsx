import React from "react";
import { team } from "@/app/assets";
import Image from "next/image";

export default function Banners() {
  return (
    <section className="flex flex-wrap gap-y-[10px]">
      <Image
        src={team.teamBanner1}
        alt=""
        width={100}
        height={100}
        className="w-[99vw] mx-auto h-[530px] object-cover"
      />

      <Image
        src={team.teamBanner2}
        alt=""
        width={100}
        height={100}
        className="w-[204px] mx-auto h-[260px] object-cover "
      />
      <Image
        src={team.teamBanner3}
        alt=""
        width={100}
        height={100}
        className="w-[204px] mx-auto h-[260px] object-cover "
      />
      <Image
        src={team.teamBanner4}
        alt=""
        width={100}
        height={100}
        className="w-[204px] mx-auto h-[260px] object-cover "
      />
      <Image
        src={team.teamBanner5}
        alt=""
        width={100}
        height={100}
        className="w-[204px] mx-auto h-[260px] object-cover "
      />
    </section>
  );
}
