import * as React from "react";

export const SortingSection: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="self-stretch my-auto text-sm text-indigo-950">
        Sorting by:
      </div>
      <div className="flex overflow-hidden gap-2 items-center self-stretch px-6 py-3 my-auto text-base bg-white text-indigo-950 max-md:px-5">
        <div className="self-stretch my-auto">Date added</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfdb86bf9294902b61b0b837496b8f0dab8da94b2c91433e6905c5c1400cb7d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
        />
      </div>
    </div>
  );
};