"use client";

import React, { useState } from "react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email); // Replace this with your API call or logic
  };

  return (
    <div className="flex flex-col justify-center items-start px-20 py-14 w-full bg-stone-50 max-md:px-5">
      <div className="flex flex-col justify-center items-center px-20 py-16 bg-white max-md:px-5">
        <div className="flex flex-col max-w-full w-[571px] text-center">
          {/* Heading */}
          <h2 className="text-4xl leading-snug text-indigo-950">
            Join the club and get the benefits
          </h2>
          <p className="mt-4 text-base leading-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex mt-10 w-full max-w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-2 border rounded-l-md"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-r-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
