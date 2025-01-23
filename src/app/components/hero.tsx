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

    ctaLink: "/productlist",
  };

  const heroImage = {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aad864f99f7b44815ca59ada9cbd68dc2d0167b178d4aaa17a8297a76c14454?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    alt: "Modern furniture collection showcase",
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-4 sm:px-16 py-8 sm:py-16 w-full bg-white">
      <div className="overflow-hidden pl-4 sm:pl-16 bg-indigo-950">
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Text Section */}
          <div className="flex flex-col w-full sm:w-6/12">
            <div className="flex flex-col self-stretch text-white py-8 sm:py-0 mt-12 sm:mt-24">
              <div className="flex flex-col max-w-full">
                <h1 className="text-xl sm:text-3xl leading-8 sm:leading-10 font-semibold">
                  {heroContent.title}
                </h1>
                <a
                  href={heroContent.ctaLink}
                  className="inline-block gap-2.5 self-start px-6 sm:px-8 py-3 sm:py-4 mt-6 sm:mt-10 text-sm sm:text-base bg-stone-50 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 rounded-lg"
                >
                  {heroContent.ctaText}
                </a>
              </div>

              <div className="mt-6 sm:mt-10 text-sm sm:text-lg leading-6 sm:leading-7 space-y-2">
                {heroContent.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden sm:flex flex-col w-6/12">
            <img
              loading="lazy"
              src={heroImage.src}
              alt={heroImage.alt}
              className="object-contain w-full aspect-[0.89] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
