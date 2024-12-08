import * as React from "react";
import { FeatureCardProps } from "./types";

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-indigo-950 max-md:mt-10">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-6 bg-blend-multiply aspect-square fill-white"
        />
        <div className="flex flex-col mt-4 max-w-full w-[270px]">
          <div className="text-xl leading-snug">{title}</div>
          <div className="mt-2 text-base leading-6">{description}</div>
        </div>
      </div>
    </div>
  );
};