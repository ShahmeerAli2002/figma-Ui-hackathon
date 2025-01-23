"use client";
import React, { useState } from "react";
import Image from "next/image";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // Add your email submission logic here
  };

  return (
    <div className="px-5 md:pr-20 py-10 bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full md:w-[60%] flex justify-center">
          <Image
            src="/image/Ema.png"
            alt="Newsletter promotion"
            width={500}
            height={362}
            className="object-contain w-full max-w-md"
            priority
          />
        </div>

        {/* Newsletter Form Section */}
        <div className="w-full md:w-[40%]">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-indigo-950">
              Join the club and get the benefits
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Email Input */}
            <div className="flex flex-1 px-4 py-3 bg-stone-50 rounded-md text-indigo-950">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full bg-transparent outline-none text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-950 text-white text-sm font-medium rounded-md hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-600 transition duration-200"
              aria-label="Sign up for the newsletter"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
