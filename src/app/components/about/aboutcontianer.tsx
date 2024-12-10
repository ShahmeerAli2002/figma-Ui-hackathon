import * as React from "react";

interface AboutContentProps {
  title: string;
  description: string;
}

export function AboutContent({ title, description }: AboutContentProps) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col items-start px-20 py-16 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[536px]">
          <div className="text-2xl leading-9 text-indigo-950 max-md:max-w-full">
            {title}
          </div>
          <div className="mt-6 text-base text-slate-600 max-md:max-w-full">
            {description}
          </div>
        </div>
        <a href="/about" 
          className="overflow-hidden gap-2.5 px-8 py-4 mt-48 text-base bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-10"
          tabIndex={0}
          aria-label="Get in touch"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}