import ShopHeader from "../components/shopPage/ShopHeader";
import ShopCategories from "../components/shopPage/ShopCategories";
import ProductList from "../components/shopPage/ProductList";
import Clients from "../components/shopPage/Clients";

export default function () {
  return (
    <div>
      <ShopHeader />
      <ShopCategories />
      <ProductList />
      <Clients />
    </div>
  );
}
