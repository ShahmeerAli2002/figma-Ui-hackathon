"use client";

import React, { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col justify-center items-start px-20 py-14 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[571px]">
          <div className="flex flex-col items-center text-center text-indigo-950 max-md:max-w-full">
            <h2 className="text-4xl leading-snug max-md:max-w-full">
              Join the club and get the benefits
            </h2>
            <p className="mt-4 text-base leading-6 max-md:max-w-full">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submitted email:", email); // Replace this with your API call or logic
            }}
            className="flex self-center mt-20 max-w-full text-base w-[472px] max-md:mt-10"
          >
            <label htmlFor="newsletterEmail" className="sr-only">
              Email address for newsletter
            </label>
            <input
              id="newsletterEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-2 border rounded-l-md"
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
