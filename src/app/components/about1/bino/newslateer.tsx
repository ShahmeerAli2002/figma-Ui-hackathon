"use client";

import * as React from "react";
import { BenefitItem } from "./binomo";
import { NewsletterForm } from "./newsfileser";

const benefits = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f3e59c992725f7386da572fe58ea7e8c4e3585cb5a87fdbd6b7bcf5164742db?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    text: "Exclusive offers",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f3e59c992725f7386da572fe58ea7e8c4e3585cb5a87fdbd6b7bcf5164742db?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    text: "Free events",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f3e59c992725f7386da572fe58ea7e8c4e3585cb5a87fdbd6b7bcf5164742db?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    text: "Large discounts",
  },
];

export const NewsletterSection1: React.FC = () => {
  const handleSubmit = (email: string) => {
    console.log("Form submitted with email:", email);
  };

  return (
    <div className="flex flex-col bg-stone-50">
      <div 
        className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 w-full max-md:px-5 max-md:max-w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/image.png')",
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="flex flex-col max-w-full w-[494px]">
          <div className="flex flex-col items-center text-center text-white max-md:max-w-full">
            <div className="flex flex-col items-center max-md:max-w-full">
              <h2 className="text-3xl leading-snug max-md:max-w-full">
                Join the club and get the benefits
              </h2>
              <p className="mt-3 text-lg leading-7 max-md:max-w-full">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>
            <div className="flex gap-9 items-start mt-8 text-base max-md:max-w-full">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} {...benefit} />
              ))}
            </div>
          </div>
          {/* Render NewsletterForm */}
          <NewsletterForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
