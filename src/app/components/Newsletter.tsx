"use client";

import React, { useState } from "react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className="flex flex-col justify-center items-start w-full bg-stone-50 px-4 py-6 md:px-8 lg:px-20 lg:py-14">
      <div className="flex flex-col justify-center items-center w-full bg-white px-4 py-6 md:px-8 lg:px-20 lg:py-16 rounded-lg shadow-sm">
        <div className="flex flex-col w-full text-center max-w-[95%] md:max-w-[571px]">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold leading-tight text-indigo-950">
            Join the club and get the benefits
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-gray-600">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6 w-full md:flex-row md:gap-2 md:mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-3 border border-gray-300 rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
