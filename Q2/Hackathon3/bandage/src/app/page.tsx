import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/globalComponents/Footer";
import GreenDiv from "./components/green-div";
import FeaturedProducts from "./components/homepage/FeaturedProducts";
// import ProductsSection from "./components/homepage/ProductsSection";
import Lastdiv from "./components/lastdiv";
import Navbar from "./components/globalComponents/Navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";
import NotificationBar from "./components/globalComponents/NotificationBar";
import Hero from "./components/homepage/Hero";
import ClassicProduct from "./components/homepage/ClassicProduct";
import Partof from "./components/homepage/Partof";
import FeaturedSec from "./components/homepage/FeaturedSec";

export default function Home() {
  return (
    <main>
      {/* <Carausel /> */}
      <Hero />
      <Editors />
      {/* <ProductCard/> */}
      <FeaturedProducts />
      <ClassicProduct />
      <Partof />
      <FeaturedSec />

      {/* <GreenDiv />
        <Whitediv />
        <Lastdiv /> */}
    </main>
  );
}
