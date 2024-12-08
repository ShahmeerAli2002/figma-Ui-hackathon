import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600">
          {title}
        </h3>
        <p className="mt-2 text-indigo-700 font-semibold">£{price}</p>
      </div>
    </div>
  );
};