import React from "react";
import { ProductCardProps } from "./types";

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  price,
  aspectRatio = "1.2",
}) => {
  return (
    <div className="flex flex-col grow">
      <div className="w-full">
        <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-cover w-full" style={{ aspectRatio }} />
      </div>
      <div className="flex flex-col self-start mt-4 text-indigo-950">
        <div className="text-xl font-medium leading-snug">{title}</div>
        <div className="mt-2 text-lg">£{price}</div>
      </div>
    </div>
  );
};