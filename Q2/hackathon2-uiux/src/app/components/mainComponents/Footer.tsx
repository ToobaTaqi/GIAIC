import Image from "next/image";
import React from "react";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import twitter from "../../assets/footer/twitter.png";
import FooterGridContent from "../FooterGridContent";

export default function Footer() {
  return (
    <footer>
      {/* footer header */}
      <div className="bg-gray-100 flex flex-col gap-3 px-10 py-14">
        <h1 className="font-bold text-lg w-[50vw]">Bandage</h1>
        <div className="flex">
          <Image src={facebook} className="w-[15px] m-1" alt="" />
          <Image className="w-[15px] m-1" src={instagram} alt="" />
          <Image className="w-[15px] m-1" src={twitter} alt="" />
        </div>
      </div>

      {/* footer body */}
      <div className="grid grid-cols-1 px-10 py-14 gap-4">
        <FooterGridContent
          heading="Company Info"
          p1="About Us"
          p2="Carrier"
          p3="We are hiring"
          p4="Blog"
        />
        <FooterGridContent
          heading="Legal"
          p1="About Us"
          p2="Carrier"
          p3="We are hiring"
          p4="Blog"
        />
        <FooterGridContent
          heading="Features"
          p1="Business Marketing"
          p2="User Analytic"
          p3="Live Chat"
          p4="Unlimited Support"
        />
        <FooterGridContent
          heading="Resources"
          p1="IOS & Android"
          p2="Watch a Demo"
          p3="Customers"
          p4="Api"
        />
        {/* <FooterGridContent
          heading="Company Info"
          p1="About Us"
          p2="Carrier"
          p3="We are hiring"
          p4="Blog"
        /> */}
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">Get In Touch</h2>
          <div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className=" p-5 border border-gray-300 bg-gray-200"
              />
              <button className="bg-blue-400 border rounded-r-md p-5 text-white">
                Subscribe
              </button>
            </div>
            <small className="text-gray-500">Lore imp sum dolor Amit</small>
          </div>
        </div>
      </div>
      
      {/* footer bottom */}
      <div className="flex flex-col justify-center items-center font-semibold text-gray-500 p-5">
        <h3>Made With Love By</h3>
        <h3>Finland All Right Reserved</h3>
      </div>
    </footer>
  );
}
