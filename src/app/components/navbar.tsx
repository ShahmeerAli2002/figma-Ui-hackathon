"use client";
import React, { useState, useEffect } from "react";
import {  FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import SearchComponent from "../components/Search"; // Import the search component
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
        {/* Left Section - Search Component */}
        <div className="flex items-center">
          <SearchComponent /> {/* Add Search Component here */}
        </div>

        {/* Center Section - Logo */}
        <div className="text-xl md:text-2xl font-semibold text-gray-800">
          <Link href="/">Avion</Link>
          </div>

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



          <div className="relative">
            <FiUser
              className="text-gray-600 text-lg md:text-xl cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="/shoppingcart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>

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
            <a href="/plantpots" className="text-gray-600 hover:text-gray-800 text-lg">Plant pots</a>
            <a href="/ceramics" className="text-gray-600 hover:text-gray-800 text-lg">Ceramics</a>
            <a href="/Table" className="text-gray-600 hover:text-gray-800 text-lg">Tables</a>
            <a href="/chair" className="text-gray-600 hover:text-gray-800 text-lg">Chairs</a>
            <a href="/Crockery" className="text-gray-600 hover:text-gray-800 text-lg">Crockery</a>
            <a href="/Crockery" className="text-gray-600 hover:text-gray-800 text-lg">Tableware</a>
            <a href="/Cutlery" className="text-gray-600 hover:text-gray-800 text-lg">Cutlery</a>
          </div>
        </div>
      )}

      {/* Bottom Section - Categories (Desktop) */}
      <div className="hidden md:flex overflow-x-auto whitespace-nowrap md:justify-center gap-4 md:gap-6 py-2 text-gray-600 text-xs md:text-sm border-b border-gray-300 bg-white">
        <a href="/plantpots" className="hover:text-gray-800 px-2">Plant pots</a>
        <a href="/ceramics" className="hover:text-gray-800 px-2">Ceramics</a>
        <a href="/Table" className="hover:text-gray-800 px-2">Tables</a>
        <a href="/chair" className="hover:text-gray-800 px-2">Chairs</a>
        <a href="/Crockery" className="hover:text-gray-800 px-2">Crockery</a>
        <a href="/Crockery" className="hover:text-gray-800 px-2">Tableware</a>
        <a href="/Cutlery" className="hover:text-gray-800 px-2">Cutlery</a>
      </div>
    </div>
  );
};

export default Navbar;
