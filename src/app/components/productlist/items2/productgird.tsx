import * as React from "react";
import { ProductCard } from "./productcart";
import { ProductCardProps } from "./types";

export const ProductGrid2: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/37574d1671035096aa6ad46193bb89d6dd173bdff51acb0991e7869f573c94df?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "The Dandy chair",
      price: 250
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4a9a8c193bbe2eb26fffe084021839836de2c8082ca9f16fb949b970dc25ed?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "Rustic Vase Set",
      price: 155
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0587489fa8989c91ef7e60da08abda04ff8f2659565af5d188efaf40bb391c8c?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "The Silky Vase",
      price: 125
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/57d00fc332c504e46c76042e0ffae859d3b9199d08fe258fbea99e41c7e6c987?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "The Lucy Lamp",
      price: 399
    }
  ];

  return (
    <div className="justify-center px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};