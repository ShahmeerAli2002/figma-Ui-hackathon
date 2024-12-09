import * as React from "react";
import { CartItemProps } from "./types";


export const CartItem: React.FC<CartItemProps> = ({
  image,
  title,
  description,
  price,
 
}) => {
  return (
    <div className="flex gap-5 items-center">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[109px]"
      />
      <div className="flex flex-col self-stretch my-auto">
        <div className="text-xl leading-snug">{title}</div>
        <div className="mt-2 text-sm leading-5">{description}</div>
        <div className="mt-2 text-base">£{price}</div>
      </div>
    </div>
  );
};