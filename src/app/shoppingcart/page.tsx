"use client";

import React, { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity = newQuantity;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your shopping cart</h1>
      <div className="overflow-x-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-gray-500 uppercase text-sm">
                <th className="py-2">Product</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <td className="flex gap-4 p-4">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                      <p className="font-bold text-gray-800 mt-1">£{item.price}</p>
                    </div>
                  </td>

                  <td className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center font-bold text-gray-800">£{item.price * item.quantity}</td>
                  <td className="text-center">
                    <button 
                      onClick={() => removeItem(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-8 flex flex-col items-end space-y-2">
          <div className="text-gray-500 text-sm">Taxes and shipping are calculated at checkout</div>
          <div className="text-xl font-bold text-gray-800">Subtotal: £{subtotal}</div>
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700">
            Go to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
