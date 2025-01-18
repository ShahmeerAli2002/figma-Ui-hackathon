import React from "react";
import Link from "next/link";
import { productsData } from "./tsproduct"; // Importing products data

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: number;
  aspectRatio?: string;
  width?: string;
}

interface PopularProductsProps {
  products: ProductCardProps[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
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
            style={{ width: index === 0 ? "40%" : "30%" }}
          >
            <Link href={`/product/${index}`}>
              <span>
                <div className="flex flex-col grow">

                  <div className="w-full h-[300px]">
                    <img
                      loading="lazy"
                      src={product.imageSrc}
                      alt={product.imageAlt}

                      className="object-cover w-full h-full"
                      style={{ aspectRatio: product.aspectRatio || "1.2" }}
                    />
                  </div>
                  <div className="flex flex-col self-start mt-4 text-indigo-950">
                    <div className="text-xl font-medium leading-snug">
                      {product.title}
                    </div>
                    <div className="mt-2 text-lg">£{product.price}</div>
                  </div>
                </div>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularProductsSection: React.FC = () => {
  return <PopularProducts products={productsData} />;
};


export default PopularProductsSection;