import * as React from "react";

interface FilterButtonProps {
  label: string;
  iconSrc: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, iconSrc }) => {
  return (
    <div className="flex overflow-hidden gap-2 items-center px-6 py-3 whitespace-nowrap bg-white max-md:px-5">
      <div className="self-stretch my-auto">{label}</div>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
      />
    </div>
  );
};