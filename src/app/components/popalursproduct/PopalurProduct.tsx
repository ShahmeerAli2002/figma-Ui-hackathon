import React from "react";
import Link from "next/link";
import { ProductCard } from "./PopalurCard";
import { ProductCardProps } from "./types";

interface PopularProductsProps {
  products: ProductCardProps[];
}

export const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <div className="flex flex-col px-20 py-14 w-full bg-white max-md:px-5">
      {/* Section Title */}
      <h2 className="self-start text-3xl font-semibold leading-snug text-indigo-950">
        Our popular products
      </h2>

      {/* Product Grid */}
      <div className="mt-8 flex gap-6 w-full overflow-x-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: index === 0 ? '40%' : '30%' }}
          >
            <Link href={`/product/${index}`}>
              <span>
                <ProductCard
                  {...product}
                  aspectRatio={index === 0 ? "1.5" : "1"}
                  width="100%"
                />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
