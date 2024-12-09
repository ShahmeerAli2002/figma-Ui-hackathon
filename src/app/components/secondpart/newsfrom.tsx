import * as React from "react";
import { NewsletterForm } from "./newssellter";
import Image from "next/image";

export const NewsletterSection: React.FC = () => {
  const handleSubmit = () => {
    
  };

  return (
    <div className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <Image
            src="/image/Ema.png"
            alt="Newsletter promotion"
            width={500}
            height={362}
            className="object-contain grow w-full aspect-[1.38] max-md:mt-10 max-md:max-w-full"
            priority
          />
        </div>
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-base max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl text-center text-indigo-950 max-md:max-w-full">
              Join the club and get the benefits
            </div>
            <div className="mt-5 mr-5 leading-6 text-indigo-950 max-md:mr-2.5 max-md:max-w-full">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </div>
            <NewsletterForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};