import * as React from "react";
import { HeroContent } from "./herocontent";
import { HeroImage } from "./heroimage";

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
    className: "w-6/12",
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden pl-16 bg-indigo-950 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            {/* Passing content to HeroContent */}
            <HeroContent {...heroContent} />
          </div>
          <HeroImage {...heroImage} />
        </div>
      </div>
    </div>
  );
};
