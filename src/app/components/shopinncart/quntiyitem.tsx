import * as React from "react";
import { QuantityControlProps } from "./types";

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  price
}) => {
  return (
    <div className="flex gap-5 justify-between items-start w-full max-md:mr-0.5">
      <div className="flex overflow-hidden gap-8 justify-between items-center px-4 py-3 text-base bg-stone-50 text-slate-200">
        <button
          className="self-stretch my-auto"
          aria-label="Decrease quantity"
          tabIndex={0}
        >
          -
        </button>
        <div className="self-stretch my-auto text-indigo-950">{quantity}</div>
        <button
          className="self-stretch my-auto"
          aria-label="Increase quantity"
          tabIndex={0}
        >
          +
        </button>
      </div>
      <div className="text-lg text-indigo-950">£{price}</div>
    </div>
  );
};