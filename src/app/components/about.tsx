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
    description:
      "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e801ac0ac16b29abf7ba009259555059e3d54bce9a7b36eed4d87fdf855106a?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    imageAlt: "Avion furniture showroom",
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-5 px-4 md:px-10 lg:px-20 py-10 md:py-16">
      {/* About Content */}
      <div className="flex flex-col w-full md:w-6/12">
        <div className="flex flex-col items-start bg-white p-8 md:p-12 lg:p-16 shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 text-indigo-950">
            {aboutData.title}
          </h2>
          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            {aboutData.description}
          </p>
          <a
            href="/about"
            className="mt-10 md:mt-12 px-6 py-3 bg-stone-50 text-indigo-950 font-medium text-base rounded-md hover:bg-stone-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-200"
            tabIndex={0}
            aria-label="Get in touch"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* About Image */}
      <div className="flex w-full md:w-6/12">
        <img
          loading="lazy"
          src={aboutData.imageSrc}
          alt={aboutData.imageAlt}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}
