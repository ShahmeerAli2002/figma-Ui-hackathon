import * as React from "react";
import { ProductCard } from "./productcart";
import { ProductCardProps } from "./types";

export const ProductGrid1: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/54571849fa84aeca0264d1ff0761201db60cdbb618011d6a58fec3b1670308f9?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "The Dandy chair",
      price: 250
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/571038df7f8d5850287442c4121a4dd0a6d320a89298b9e066b06c2b25def464?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "Rustic Vase Set",
      price: 155
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dfa11466abc328273af65ef80f4906d3f8530940705d7c00f423219005337a5?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
      title: "The Silky Vase",
      price: 125
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ff04ac971a0b270ce7883908bd810a424cf408b6202c429a510f7c1d485e8ab?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
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