"use client";

import * as React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing check circle icon

// BenefitItem Component
interface BenefitItemProps {
  icon: string;
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => (
  <div className="flex gap-2 items-center">
    {/* Using React Icon instead of image */}
    <FaCheckCircle className="w-4 h-4 text-indigo-950" /> 
    <div className="self-stretch my-auto">{text}</div>
  </div>
);

// NewsletterForm Component
interface NewsletterFormProps {
  onSubmit: (email: string) => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
  let email = "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email = e.target.value;
  };

  return (
    <form onSubmit={handleSubmit} className="flex mx-3 mt-10 text-base max-md:mr-2.5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5">
        <label htmlFor="emailInput" className="sr-only">Email address</label>
        <input
          type="email"
          id="emailInput"
          onChange={handleEmailChange}
          placeholder="your@email.com"
          className="w-full bg-transparent outline-none opacity-20"
          required
        />
      </div>
      <button type="submit" className="overflow-hidden gap-2.5 self-start px-8 py-4 text-white bg-indigo-950 max-md:px-5">
        Sign up
      </button>
    </form>
  );
};

// Main NewsletterSection1 Component
const benefits = [
  {
    icon: "check", // Using icon name directly instead of URL
    text: "Exclusive offers",
  },
  {
    icon: "check", // Using icon name directly instead of URL
    text: "Free events",
  },
  {
    icon: "check", // Using icon name directly instead of URL
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
                <BenefitItem key={index} icon={benefit.icon} text={benefit.text} />
              ))}
            </div>
          </div>
          <NewsletterForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
