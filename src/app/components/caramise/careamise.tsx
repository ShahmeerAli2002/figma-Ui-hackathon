import React from "react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { CollectionButton } from "./callectionbutton";

const products = [
  {
    id: 1,
    image: "/image/images1.jpeg",
    title: "The Dandy Chair",
    price: 250,
  },
  {
    id: 2,
    image: "/image/images2.jpeg",
    title: "Rustic Vase Set",
    price: 155,
  },
  {
    id: 3,
    image: "/image/images3.jpeg",
    title: "The Silky Vase",
    price: 125,
  },
  {
    id: 4,
    image: "/image/image4.png",
    title: "The Lucy Lamp",
    price: 399,
  },
];

export const CeramicsCollection: React.FC = () => {
  // Button click handler
  const handleViewCollection = React.useCallback(() => {
    window.location.href = "/collection";
  }, []);

  return (
    <section className="flex flex-col px-20 py-16 w-full bg-gray-50 max-md:px-5">
      {/* Section Header */}
      <h1 className="text-3xl font-semibold text-gray-800">New Ceramics</h1>

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <span className="group">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </span>
          </Link>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="mt-10">
        <CollectionButton onClick={handleViewCollection}>
          View Collection
        </CollectionButton>
      </div>
    </section>
  );
};
