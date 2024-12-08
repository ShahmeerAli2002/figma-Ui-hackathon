  "use client";
  import * as React from "react";
  import { NewsletterFormProps } from "./types";

  export const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
    let email = "";

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      email = e.target.value;
    };

    return (
      <form onSubmit={handleSubmit} className="flex mx-3 mt-10 text-base max-md:mr-2.5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5">
          <label htmlFor="emailInput" className="sr-only">Email address</label>
          <input
            type="email"
            id="emailInput"
            onChange={handleEmailChange}
            placeholder="your@email.com"
            className="w-full bg-transparent outline-none opacity-20"
            required
          />
        </div>
        <button type="submit" className="overflow-hidden gap-2.5 self-start px-8 py-4 text-white bg-indigo-950 max-md:px-5">
          Sign up
        </button>
      </form>
    );
  };