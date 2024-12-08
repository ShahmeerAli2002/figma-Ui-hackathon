import * as React from "react";

interface BrandMessageProps {
  message: string;
}

const BrandMessage: React.FC<BrandMessageProps> = ({ message }) => {
  return (
    <div className="px-16 py-20 text-4xl text-center bg-white leading-[50px] text-indigo-950 max-md:px-5 max-md:max-w-full">
      {message.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < message.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BrandMessage;