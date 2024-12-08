import * as React from "react";
import { AboutContent } from "./aboutcontianer";
import { AboutImage } from "./aboutimage";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function AboutSection() {
  const aboutData: AboutSectionProps = {
    title: "From a studio in London to a global brand with over 400 outlets",
    description: "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e801ac0ac16b29abf7ba009259555059e3d54bce9a7b36eed4d87fdf855106a?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    imageAlt: "Avion furniture showroom"
  };

  return (
    <div>
      <div className="flex gap-5 max-md:flex-col">
        <AboutContent 
          title={aboutData.title}
          description={aboutData.description}
        />
        <AboutImage 
          src={aboutData.imageSrc}
          alt={aboutData.imageAlt}
        />
      </div>
    </div>
  );
}