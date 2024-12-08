
import * as React from "react";
import { EmailInput } from "./emailinput";
import { NewsletterFormProps } from "./types";

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-56 max-w-full w-[472px] max-md:mt-10">
      <EmailInput value={email} onChange={setEmail} />
      <button
        type="submit"
        className="overflow-hidden gap-2.5 self-start px-8 py-4 text-white bg-indigo-950 max-md:px-5"
      >
        Sign up
      </button>
    </form>
  );
};