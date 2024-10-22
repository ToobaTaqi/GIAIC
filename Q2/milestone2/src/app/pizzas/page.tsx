"use client";

import { useState } from "react";
import Checkout from "../checkout/page";

interface CartItem {
  pizza: string;
  size: string;
  quantity: number;
  price: number;
}

const Pizzas = () => {
  const [selectedPizza, setSelectedPizza] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handlePizzaSelect = (pizza: string) => {
    setSelectedPizza(pizza);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleAddToCart = () => {
    if (selectedPizza && selectedSize && count > 0) {
      // Set price based on size
      let price = 0;
      if (selectedSize === "Small") price = 450;
      else if (selectedSize === "Medium") price = 700;
      else if (selectedSize === "Large") price = 1200;

      const newItem: CartItem = {
        pizza: selectedPizza,
        size: selectedSize,
        quantity: count,
        price: price,
      };

      setCartItems((prevItems) => [...prevItems, newItem]);

      // Reset selections
      setSelectedPizza("");
      setSelectedSize("");
      setCount(0);
    }
  };

  return (
    <div className="flex justify-between m-3">
      <div>
        <img
          src="https://arteflame.com/cdn/shop/articles/The_10_Best_Pizza_Toppings_and_Why_They_Reign_Supreme.webp?v=1717620006"
          alt="pizza"
          className="object-cover w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => handlePizzaSelect("Classic")}>Classic</button>
          <button onClick={() => handlePizzaSelect("Pepperoni")}>
            Pepperoni
          </button>
          <button onClick={() => handlePizzaSelect("BBQ Chicken")}>
            BBQ Chicken
          </button>
          <button onClick={() => handlePizzaSelect("Vegetarian")}>
            Vegetarian
          </button>
          <button onClick={() => handlePizzaSelect("Meat Lovers")}>
            Meat Lovers
          </button>
          <button onClick={() => handlePizzaSelect("Hawaiian")}>
            Hawaiian
          </button>
        </div>

        <div className="line"></div>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => handleSizeSelect("Small")}>Small</button>
          <button onClick={() => handleSizeSelect("Medium")}>Medium</button>
          <button onClick={() => handleSizeSelect("Large")}>Large</button>
        </div>

        <div className="line"></div>

        <div className="flex flex-wrap gap-2">
          <button onClick={incrementCount}>+</button>
          <p className="flex items-center">{count}</p>
          <button onClick={decrementCount}>-</button>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>

        <Checkout cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Pizzas;
