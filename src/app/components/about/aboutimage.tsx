import * as React from "react";

interface AboutImageProps {
  src: string;
  alt: string;
}

export function AboutImage({ src, alt }: AboutImageProps) {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[1.19] max-md:max-w-full"
      />
    </div>
  );
}