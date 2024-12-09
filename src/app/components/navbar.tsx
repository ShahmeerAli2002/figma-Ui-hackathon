"use client";
import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"; // Feather Icons

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
        {/* Left Section - Search Icon */}
        <div className="flex items-center">
          <FiSearch className="text-gray-600 text-xl cursor-pointer" />
        </div>

        {/* Center Section - Logo */}
        <div className="text-2xl font-semibold text-gray-800">Avion</div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-4">
          <FiShoppingCart
            className="text-gray-600 text-xl cursor-pointer"
            onClick={() => window.location.href = "/shoppinglist"} // Link to cart page
          />
          <FiUser
            className="text-gray-600 text-xl cursor-pointer"
            onClick={() => window.location.href = "/account"} // Link to user account
          />
        </div>
      </nav>

      {/* Bottom Section - Categories */}
      <div className="flex justify-center gap-6 py-2 text-gray-600 text-sm border-b border-gray-300">
        <a href="/plant-pots" className="hover:text-gray-800">Plant pots</a>
        <a href="/ceramics" className="hover:text-gray-800">Ceramics</a>
        <a href="/tables" className="hover:text-gray-800">Tables</a>
        <a href="/chairs" className="hover:text-gray-800">Chairs</a>
        <a href="/crockery" className="hover:text-gray-800">Crockery</a>
        <a href="/tableware" className="hover:text-gray-800">Tableware</a>
        <a href="/cutlery" className="hover:text-gray-800">Cutlery</a>
      </div>
    </div>
  );
};

export default Navbar;