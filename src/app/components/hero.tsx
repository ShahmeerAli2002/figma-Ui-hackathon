"use client";

import * as React from "react";

export const FurnitureHero: React.FC = () => {
  const heroContent = {
    title: "The furniture brand for the future, with timeless designs",
    description: [
      "A new era in eco friendly furniture with Avelon, the French luxury retail brand",
      "with nice fonts, tasteful colors and a beautiful way to display things digitally",
      "using modern web technologies.",
    ],
    ctaText: "View collection",
    ctaLink: "/productlist", // Correct link for navigation
  };

  const heroImage = {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aad864f99f7b44815ca59ada9cbd68dc2d0167b178d4aaa17a8297a76c14454?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    alt: "Modern furniture collection showcase",
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden pl-16 bg-indigo-950 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            {/* Hero Content */}
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[513px]">
                <div className="text-3xl leading-10 max-md:max-w-full">
                  {heroContent.title}
                </div>
                <a
                  href={heroContent.ctaLink}
                  className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-10 text-base bg-stone-50 bg-opacity-10 max-md:px-5 max-md:mt-10 cursor-pointer hover:bg-opacity-20"
                >
                  {heroContent.ctaText}
                </a>
              </div>
              <div className="mt-10 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
                {heroContent.description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex flex-col ml-5 w-6/12 max-md:hidden">
            <img
              loading="lazy"
              src={heroImage.src}
              alt={heroImage.alt}
              className="object-contain grow w-full aspect-[0.89]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
