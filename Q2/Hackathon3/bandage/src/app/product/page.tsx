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
import Bestseller from "../components/bestseller";
import Header from "../components/productPage/Header";
import TheProduct from "../components/productPage/TheProduct";

export default function Pages() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-[84vw] mx-auto ">
        <Header />
        <TheProduct />
      </div>

      {/* Product Section */}
     

      {/* ProductsCrads */}
      <div className="w-[1051px] h-[72px] flex absolute justify-around top-[900px] left-[193px] bottom-[70px]">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Description
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Additional Information
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Reviews
          <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
        </span>
        <span className="w-[1049px] absolute top-[980px] border border-[#ECECEC]"></span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 md:py-12 items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={home}
            alt="Interior Design"
            width={323}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[65%] space-y-8 lg:space-y-0 gap-8">
          {/* Text Block */}
          <div className="w-full md:w-[332px] space-y-4 flex flex-col">
            <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* List Section */}
          <div className="space-y-6 flex flex-col gap-6">
            {/* First List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>

            {/* Second List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-800">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src={arrow} alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <Bestseller />
    </section>
  );
}
