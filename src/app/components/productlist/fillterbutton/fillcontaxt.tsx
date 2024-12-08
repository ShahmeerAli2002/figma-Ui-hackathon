import * as React from "react";
import { FilterSection } from "./fillter";
import { SortingSection } from "./scrollsection";

export const FilterContainer: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center px-6 py-2 w-full bg-white max-md:px-5 max-md:max-w-full">
      <FilterSection />
      <SortingSection />
    </div>
  );
};