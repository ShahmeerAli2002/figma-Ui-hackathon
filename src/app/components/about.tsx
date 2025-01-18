"use client";

import * as React from "react";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function AboutSection() {
  const aboutData: AboutSectionProps = {
    title: "From a studio in London to a global brand with over 400 outlets",
    description: "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e801ac0ac16b29abf7ba009259555059e3d54bce9a7b36eed4d87fdf855106a?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    imageAlt: "Avion furniture showroom"
  };

  return (
    <div className="flex gap-5 max-md:flex-col">
      {/* About Content */}
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col items-start px-20 py-16 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[536px]">
            <div className="text-2xl leading-9 text-indigo-950 max-md:max-w-full">
              {aboutData.title}
            </div>
            <div className="mt-6 text-base text-slate-600 max-md:max-w-full">
              {aboutData.description}
            </div>
          </div>
          <a href="/about" 
            className="overflow-hidden gap-2.5 px-8 py-4 mt-48 text-base bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-10"
            tabIndex={0}
            aria-label="Get in touch"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* About Image */}
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={aboutData.imageSrc}
          alt={aboutData.imageAlt}
          className="object-contain grow w-full aspect-[1.19] max-md:max-w-full"
        />
      </div>
    </div>
  );
}
