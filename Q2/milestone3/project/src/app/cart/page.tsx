

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function page() {
  const [cart, setCart] = useState<
    {
      // img: any;
      title: string;
      // category: string;
      originalprice: number;
      saleprice: number;
      href: string;
      quantity: number;
    }[]
  >([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    // setIsLoading(false);
  }, []);

  const handleRemoveItem = (href: string) => {
    const updatedCart = cart.filter((item) => item.href !== href);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (href: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.href === href ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };




  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // const subtotal = cart.reduce((total, item) => total + parseFloat(item.saleprice) * item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.originalprice * item.quantity,
    0
  );
  const shipping = 10.0; // Example shipping cost
  const tax = subtotal * 0.08; // Example tax rate (8%)
  const totalPrice = subtotal + shipping + tax;

console.log(cart[0])
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] py-[10px]">
      <h2 className="text-3xl font-bold">Your Cart has ({totalItems}) items</h2>

      <div className="lg:w-[70vw] w-[85vw] mx-auto gap-[20px] flex flex-col">
        {/* <CartItem />
        <CartItem /> */}
        {cart.map((item) => (
        
  
          <div  key={item.href} className="flex border border-gray-600 justify-between py-2 px-4 rounded-lg shadow-md">
          <h3>{item.href}</h3>
          <div className="flex gap-3 ">
            <div className="flex border gap-0">
              <button onClick={()=>handleUpdateQuantity(item.href, item.quantity - 1)} className="border border-gray-600 border-r-0 rounded-l w-[15px] hover:bg-white">
                -
              </button>
              {/* placeholder dynamic hoga */}
              <input
                type="number"
                placeholder={`${item.quantity}`}
                // placeholder="1"
                className="text-sm text-center w-[30px] border border-gray-600 bg-white "
                disabled
              />
              <button onClick={()=>handleUpdateQuantity(item.href, item.quantity + 1)} className="border border-gray-600 border-l-0 rounded-r w-[15px] hover:bg-white">
                +
              </button>
            </div>
            {/* <button className="bg-blue-400 text-sm rounded text-white px-3 py-1">
              Add
            </button> */}
            <button  onClick={() => handleRemoveItem(item.href)} className="bg-red-400 text-sm rounded text-white px-3 py-1">
              Delete
            </button>
          </div>
        </div>
        ))}

      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-[15px] justify-end items-end lg:w-[70vw] w-[85vw] mx-auto">
        {/* <Link href="/productlist"> */}
          <button onClick={()=>alert("Thanks for Shopping")} className="text-[#B2E3FF] font-bold text-sm bg-[#23A6F0] py-[10px] px-[20px] rounded-full hover:bg-[#B2E3FF] hover:text-[#23A6F0]">
            Continue Shopping
          </button>
        {/* </Link> */}
        {/* <Link href="/checkout">
          <button className="bg-white font-bold text-sm border border-[#23A6F0] text-[#23A6F0] py-[10px] px-[20px] rounded-full hover:text-white hover:bg-[#23A6F0]">
            Checkout
          </button>
        </Link> */}
      </div>
      {/* <CheckoutForm/> */}

      <div className="lg:col-span-1 gap-[10px]">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={()=>alert("Thanks for shopping")}
                className="text-[#B2E3FF] font-bold text-sm bg-[#23A6F0] py-[10px] px-[20px] rounded-full hover:bg-[#B2E3FF] hover:text-[#23A6F0] my-2"
              >
                Proceed to Checkout
                </button>
              {/* <button
                onClick={handleContinueShopping}
                className="w-full mt-3 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </button> */}
            </div>
          </div>
    </div>
  );
}
