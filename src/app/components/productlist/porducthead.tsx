import * as React from "react";

interface ProductsHeaderProps {
  title: string;
}

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({ title }) => {
  return (
    <div className="overflow-hidden px-16 pt-32 pb-9 w-full text-4xl leading-snug text-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      {title}
    </div>
  );
}