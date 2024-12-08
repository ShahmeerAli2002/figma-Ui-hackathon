import * as React from "react";
import { CollectionButtonProps } from "./types";

export const CollectionButton: React.FC<CollectionButtonProps> = ({ children }) => {
  return (
    <button 
      className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-9 text-base bg-stone-50 hover:bg-stone-100 transition-colors text-indigo-950 max-md:px-5 focus:outline-none focus:ring-2 focus:ring-indigo-950"
      aria-label="View ceramics collection"
    >
      {children}
    </button>
  );
};