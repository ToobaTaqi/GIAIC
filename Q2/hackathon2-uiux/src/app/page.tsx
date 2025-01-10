import Image from "next/image";
import herosm from "../app/assets/mobile/carousel-item.png";
import Categories from "./components/homePage/Categories";
import Featured from "./components/homePage/Featured";
import SummerClassic from "./components/homePage/SummerClassic";
import BuyNow from "./components/homePage/BuyNow";
import FeaturedProducts from "./components/homePage/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Image src={herosm} alt="" className="w-full" />

      <Categories />
      <Featured />
      <SummerClassic />
      <BuyNow />
      <FeaturedProducts />
    </div>
  );
}
