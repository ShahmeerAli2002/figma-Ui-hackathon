import * as React from "react";
import { ProductCardProps } from "./types";

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col max-w-full w-[305px]">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-contain w-full aspect-[0.81]"
          />
        </div>
        <div className="flex flex-col self-start mt-6 text-indigo-950">
          <div className="text-xl leading-snug">{title}</div>
          <div className="mt-2 text-lg">£{price}</div>
        </div>
      </div>
    </div>
  );
};