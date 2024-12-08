import * as React from "react";
import { HeroImageProps } from "./types";

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
};