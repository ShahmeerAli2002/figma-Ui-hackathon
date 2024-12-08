"use client";  // Ensures the component runs on the client side

import * as React from "react";
import { BrandContentProps } from "./types";

export const Brand: React.FC<BrandContentProps> = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="flex overflow-hidden flex-col items-start py-16 pr-10 pl-20 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[536px]">
        <h1 className="text-2xl leading-9 text-indigo-950 max-md:max-w-full">
          {title}
        </h1>
        <p className="mt-6 text-base text-slate-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      <button
        onClick={onButtonClick}
        className="overflow-hidden gap-2.5 px-8 py-4 mt-48 text-base bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-10 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:ring-offset-2"
        aria-label={buttonText}
      >
        {buttonText}
      </button>
    </div>
  );
};
