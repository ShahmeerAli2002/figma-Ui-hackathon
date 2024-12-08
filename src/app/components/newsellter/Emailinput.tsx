import * as React from 'react';
import { EmailInputProps } from './types';

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="email"
      id="newsletterEmail"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5"
      placeholder="your@email.com"
      aria-label="Email address for newsletter"
    />
  );
};