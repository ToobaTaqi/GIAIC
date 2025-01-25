import Image from "next/image";
import React from "react";
import { globalImages } from "@/app/assets";
import { team } from "@/app/assets";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src={globalImages.videoCard}
        alt=""
        width={100}
        height={100}
        className="w-[307px] h-[316px]"
      />
      <div className="flex flex-col w-[60vw] text-center pt-[75px] py-[45px] gap-[10px]">
        <h3 className=" text-[#252B42] text-4xl font-bold">Meet Our Team</h3>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="pb-[30px] flex flex-col gap-[30px]">
        <TeamMember img={team.team1} />
        <TeamMember img={team.team2} />
        <TeamMember img={team.team3} />
      </div>
    </section>
  );
}
