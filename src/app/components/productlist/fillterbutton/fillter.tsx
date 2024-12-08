import * as React from "react";
import { FilterButton } from "./fillterbutoon";

interface FilterOption {
  label: string;
  iconSrc: string;
}

const filterOptions: FilterOption[] = [
  { label: "Category", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cfdb86bf9294902b61b0b837496b8f0dab8da94b2c91433e6905c5c1400cb7d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" },
  { label: "Product type", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cfdb86bf9294902b61b0b837496b8f0dab8da94b2c91433e6905c5c1400cb7d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" },
  { label: "Price", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cfdb86bf9294902b61b0b837496b8f0dab8da94b2c91433e6905c5c1400cb7d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" },
  { label: "Brand", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cfdb86bf9294902b61b0b837496b8f0dab8da94b2c91433e6905c5c1400cb7d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" }
];

export const FilterSection: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-start text-base min-h-[48px] text-indigo-950 max-md:max-w-full">
      {filterOptions.map((option, index) => (
        <FilterButton
          key={index}
          label={option.label}
          iconSrc={option.iconSrc}
        />
      ))}
    </div>
  );
};