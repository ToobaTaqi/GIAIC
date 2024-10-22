"use client";

import { useState } from "react";

interface CartItem {
  pizza: string;
  size: string;
  quantity: number;
  price: number;
}

interface CheckoutProps {
  cartItems?: CartItem[];
}

const Checkout = ({ cartItems = [] }: { cartItems: CartItem[] }) => {
  const [address, setAddress] = useState<string>("");
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (address.trim() === "") {
      alert("Please enter your address.");
      return;
    }

    setOrderConfirmed(true);
  };

  return (
    <div className="mt-4">
      <h3 className="font-bold">Cart Items:</h3>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <p key={index}>
              {item.quantity} x {item.size} {item.pizza} - {item.price} PKR each
            </p>
          ))}

          <p className="mt-4 font-bold">Total Price: {totalPrice} PKR</p>

          <div className="mt-4">
            <label htmlFor="address" className="block font-semibold mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="border p-2 rounded w-full"
            />
          </div>

          <button
            onClick={handleConfirmOrder}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Confirm Order
          </button>

          {orderConfirmed && (
            <div className="mt-4 text-green-500 font-bold">
              Your order is confirmed!
            </div>
          )}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Checkout;
