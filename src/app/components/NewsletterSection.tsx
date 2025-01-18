"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // Add your email submission logic here
  };

  return (
    <div className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Image Section */}
        <div className="flex flex-col w-[59%] max-md:w-full">
          <Image
            src="/image/Ema.png"
            alt="Newsletter promotion"
            width={500}
            height={362}
            className="object-contain grow w-full aspect-[1.38] max-md:mt-10 max-md:max-w-full"
            priority
          />
        </div>

        {/* Newsletter Form Section */}
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch w-full text-base max-md:mt-10">
            <h2 className="text-3xl text-center text-indigo-950">
              Join the club and get the benefits
            </h2>
            <p className="mt-5 leading-6 text-indigo-950">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
            <form onSubmit={handleSubmit} className="flex mt-8 w-full max-md:mt-5">
              {/* Email Input */}
              <div className="flex flex-col flex-1 px-8 py-4 bg-stone-50 min-w-[240px] text-indigo-950">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-4 text-white bg-indigo-950 max-md:px-5"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
