"use client";

import React, { useEffect, useState } from "react";
import sanityClient from '../../sanity';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedItems = cartItems.map((item) => ({
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      image: {
        _type: 'image',
        asset: { _ref: item.imageRef },
      },
    }));

    const completeOrder = {
      _type: 'order',
      name: orderDetails.name,
      email: orderDetails.email,
      address: orderDetails.address,
      city: orderDetails.city,
      phone: orderDetails.phone,
      items: formattedItems,
      total: subtotal + 10,
    };

    try {
      const result = await sanityClient.create(completeOrder);
      console.log('Order placed:', result);
      setOrderSubmitted(true);
      setCartItems([]);
      localStorage.setItem("cart", JSON.stringify([]));
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your shopping cart</h1>
      {orderSubmitted ? (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Your order has been successfully submitted!</h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase.</p>
            <button
              onClick={() => {
                setOrderSubmitted(false);
                setShowCheckout(false);
              }}
              className="px-6 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : !showCheckout ? (
        <>
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
                          src={item.image.asset.url}
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
              <button 
                onClick={() => setShowCheckout(true)}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
              >
                Go to checkout
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Checkout Details</h2>
          <form onSubmit={handleSubmitOrder} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={orderDetails.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={orderDetails.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="text-xl font-bold">Order Summary</div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>£{subtotal}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Shipping:</span>
                  <span>£10.00</span>
                </div>
                <div className="flex justify-between mt-2 font-bold">
                  <span>Total:</span>
                  <span>£{subtotal + 10}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
