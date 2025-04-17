"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Card({
  title,
  date,
  originalPrice,
  salePrice,
  img,
  href,
}: {
  title: string;
  date: string;
  originalPrice: number;
  salePrice: number;
  img: string;
  href: string;
}) {
  let discountPercentage: number = originalPrice
    ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
    : 0;

  const [product, setProduct] = useState<{
    title: string;
    date: string;
    originalPrice: number;
    salePrice: number;
    img: string;
    href: string;
  }>();
  const [count, setCount] = useState(1);

  // cart count
  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    if (count >= 1) {
      setCount((count) => count - 1);
    } else {
      setCount(count);
    }
  };

  useEffect(() => {
    console.log(`value of ${title}=${count}`);
  }, [count]);

  useEffect(() => {
    setProduct({
      title,
      date,
      originalPrice,
      salePrice,
      img,
      href,
    });
  }, [title, date, originalPrice, salePrice, img, href]);

  const handleAddToCart = () => {
    if (!product) return;

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: {
        title: string;
        date: string;
        originalPrice: number;
        salePrice: number;
        img: string;
        href: string;
      }) => item.href === product.href
    );

    if (existingProductIndex !== -1) {
      // If product already exists, increase the quantity
      cart[existingProductIndex].quantity += 1;

      console.log(cart);
    } else {
      cart.push({ ...product, quantity: count });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);

    // Optional: Alert user or show confirmation message
    alert("Product added to cart");
  };

  return (
    <div className="bg-white w-[250px] h-[300px] rounded shadow hover:shadow-lg flex flex-col px-5 py-3 justify-between">
      <div className="flex justify-between">
        <h1 className="font-semibold text-center">{title}</h1>
        <p className="bg-green-400 w-fit text-xs text-white rounded px-2 py-1 self-end">
          {/* - 40% */}
          {`- ${discountPercentage}%`}
          {/* {Number((salePrice/originalPrice)*100)} */}
        </p>
      </div>
      <Link href={`/products/${href}`}>
        <img
          src={img}
          alt=""
          className="w-[170px] h-[130px] object-contain  mx-auto p-2 border rounded border-gray-200 bg-gray-100"
        />
      </Link>

      <p className="text-gray-400 text-sm">{date}</p>
      <div className="flex gap-3 text-sm font-bold text-gray-600">
        <p>{originalPrice}</p>
        <p>{salePrice}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex border gap-0">
          <button
            onClick={decrease}
            className="border border-gray-600 border-r-0 rounded-l w-[15px]"
          >
            -
          </button>
          {/* placeholder dynamic hoga */}
          <input
            type="number"
            // placeholder="1"
            placeholder={`${count}`}
            disabled
            className="text-sm text-center w-[30px] border border-gray-600"
          />
          <button
            onClick={increase}
            className="border border-gray-600 border-l-0 rounded-r w-[15px]"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-fit bg-blue-400 text-white text-xs rounded px-3 py-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
