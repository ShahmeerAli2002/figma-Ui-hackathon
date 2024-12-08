import * as React from "react";
import { EmailInputProps } from "./types";

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5">
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full bg-transparent outline-none opacity-20"
      />
    </div>
  );
};