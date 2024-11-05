import React from "react";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-20 pt-32">
      <div className="flex gap-10">
        <Image src={facebook} alt="" className="icon"/>
        <Image src={instagram} alt="" className="icon"/>
        <Image src={twitter} alt="" className="icon"/>
        <Image src={linkedin} alt="" className="icon"/>
      </div>
      <div>
        <p className="heading text-xl">Copyright c 2020 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
