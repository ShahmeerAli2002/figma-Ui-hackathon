"use client";

import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Fetch cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

      setCartCount(cartItems.length);
    };

    updateCartCount();

    // Listen to storage events for changes in localStorage
    window.addEventListener("storage", updateCartCount);
    
    // Add custom event listener for cart updates
    window.addEventListener("cartUpdated", updateCartCount);


    // Check cart count every second
    const interval = setInterval(updateCartCount, 1000);

    // Cleanup event listeners and interval on unmount
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b border-gray-300 bg-white">
        {/* Left Section - Search Icon */}
        <div className="flex items-center">
          <FiSearch className="text-gray-600 text-xl cursor-pointer" />
        </div>

        {/* Center Section - Logo */}
        <div className="text-xl md:text-2xl font-semibold text-gray-800">Avion</div>

        {/* Right Section - Icons and Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <FiShoppingCart
              className="text-gray-600 text-lg md:text-xl cursor-pointer"
              onClick={() => window.location.href = "/shoppingcart"}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <FiUser
            className="text-gray-600 text-lg md:text-xl cursor-pointer"
            onClick={() => window.location.href = "/account"}
          />
          <div className="md:hidden">
            {isMenuOpen ? (
              <FiX
                className="text-gray-600 text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-gray-600 text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed top-[60px] left-0 w-full h-screen z-50">
          <div className="flex flex-col gap-4 p-4">
            <a href="/plant-pots" className="text-gray-600 hover:text-gray-800 text-lg">Plant pots</a>
            <a href="/ceramics" className="text-gray-600 hover:text-gray-800 text-lg">Ceramics</a>
            <a href="/tables" className="text-gray-600 hover:text-gray-800 text-lg">Tables</a>
            <a href="/chairs" className="text-gray-600 hover:text-gray-800 text-lg">Chairs</a>
            <a href="/crockery" className="text-gray-600 hover:text-gray-800 text-lg">Crockery</a>
            <a href="/tableware" className="text-gray-600 hover:text-gray-800 text-lg">Tableware</a>
            <a href="/cutlery" className="text-gray-600 hover:text-gray-800 text-lg">Cutlery</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
