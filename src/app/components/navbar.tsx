"use client";

import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b border-gray-300">
        {/* Left Section - Search Icon */}
        <div className="flex items-center">
          <FiSearch className="text-gray-600 text-xl cursor-pointer" />
        </div>

        {/* Center Section - Logo */}
        <div className="text-xl md:text-2xl font-semibold text-gray-800">Avion</div>

        {/* Right Section - Icons and Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <FiShoppingCart
            className="text-gray-600 text-lg md:text-xl cursor-pointer"
            onClick={() => window.location.href = "/shoppingcart"}
          />
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

      {/* Bottom Section - Categories (Desktop) */}
      <div className="hidden md:flex overflow-x-auto whitespace-nowrap md:justify-center gap-4 md:gap-6 py-2 text-gray-600 text-xs md:text-sm border-b border-gray-300">
        <a href="/plant-pots" className="hover:text-gray-800 px-2">Plant pots</a>
        <a href="/ceramics" className="hover:text-gray-800 px-2">Ceramics</a>
        <a href="/tables" className="hover:text-gray-800 px-2">Tables</a>
        <a href="/chairs" className="hover:text-gray-800 px-2">Chairs</a>
        <a href="/crockery" className="hover:text-gray-800 px-2">Crockery</a>
        <a href="/tableware" className="hover:text-gray-800 px-2">Tableware</a>
        <a href="/cutlery" className="hover:text-gray-800 px-2">Cutlery</a>
      </div>
    </div>
  );
};

export default Navbar;