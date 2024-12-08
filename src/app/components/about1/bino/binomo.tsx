import * as React from "react";
import { BenefitItemProps } from "./types";
import Image from "next/image";

export const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => (
  <div className="flex gap-2 items-center">

    <Image
      loading="lazy"
      src={`/images/${icon}`}
      alt="benefit icon"
      width={16}
      height={16}
      className="w-4 h-4 object-contain"
    />
    <div className="self-stretch my-auto">{text}</div>
  </div>
);