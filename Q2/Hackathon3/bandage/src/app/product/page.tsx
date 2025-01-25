import Image from "next/image";
import heart from "@/images/Vector (15).png";
import cart from "@/images/icn favorite.png";
import eye from "@/images/icn favorite (1).png";
import arrow from "@/images/Vector (13).png";
import home from "@/images/unsplash_QANOF9iJlFs.png";

import mainImage from "@/images/single-product-1-cover-2.jpg"; // Replace with your main image
import image1 from "@/images/single-product-1-thumb-1.jpg"; // Replace with your thumbnail images
import image2 from "@/images/single-product-1-thumb-2.jpg";
import p1 from "@/images/product-cover-5 (20).png";
import p2 from "@/images/product-cover-5 (21).png";
import p3 from "@/images/product-cover-5 (22).png";
import p4 from "@/images/product-cover-5 (23).png";
import p5 from "@/images/product-cover-5 (24).png";
import p6 from "@/images/product-cover-5 (26).png";
// import Bestseller from "../components/bestseller";
import Header from "../components/productPage/Header";
import TheProduct from "../components/productPage/TheProduct";

export default function Pages() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-[84vw] mx-auto ">
        <Header />
        <TheProduct />
      </div>
    </section>
  );
}
