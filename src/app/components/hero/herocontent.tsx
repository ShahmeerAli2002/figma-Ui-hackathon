"use client";
import * as React from "react";
import { HeroContentProps } from "./types";

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
  ctaText,
  ctaLink, // Matches the updated interface
}) => {
  return (
    <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[513px]">
        <div className="text-3xl leading-10 max-md:max-w-full">{title}</div>
        <a
          href={ctaLink}
          className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-10 text-base bg-stone-50 bg-opacity-10 max-md:px-5 max-md:mt-10 cursor-pointer hover:bg-opacity-20"
        >
          {ctaText}
        </a>
      </div>
      <div className="mt-10 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
