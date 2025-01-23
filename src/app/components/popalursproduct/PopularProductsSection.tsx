"use client";
import React from "react";
import Link from "next/link";
import client from "../../../sanity";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: number;
  _id: string;
  aspectRatio?: string;
}

interface PopularProductsProps {
  products: ProductCardProps[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <div className="flex flex-col px-6 sm:px-12 py-10 sm:py-16 w-full bg-white">
      {/* Section Title */}
      <h2 className="self-start text-2xl sm:text-3xl font-semibold text-indigo-950">
        Our Popular Products
      </h2>

      {/* Products Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {products.map((product, index) => (
          <div
            key={product._id}
            className={`flex flex-col bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Product Link */}
            <Link href={`/product/${product._id}`}>
              <div className="cursor-pointer">
                {/* Product Image */}
                <div
                  className={`w-full ${
                    index === 0 ? "h-[300px] sm:h-[400px]" : "h-[200px] sm:h-[300px]"
                  } overflow-hidden`}
                >
                  <img
                    loading="lazy"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: product.aspectRatio || "1.2" }}
                  />
                </div>
                {/* Product Info */}
                <div className="flex flex-col p-4 text-indigo-950">
                  <div
                    className={`${
                      index === 0 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                    } font-medium leading-snug`}
                  >
                    {product.name}
                  </div>
                  <div className="mt-2 text-base sm:text-lg font-semibold">
                    £{product.price}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const fetchProducts = async () => {
  const query = `*[_type == "product"][0..2] {
    _id,
    name,
    description,
    features,
    dimensions,
    category,
    price,
    tags,
    image {
      asset -> {
        _id,
        url
      }
    }
  }`;

  const products = await client.fetch(query);

  return products.map((product: any) => ({
    _id: product._id,
    imageSrc: product.image.asset.url,
    imageAlt: product.name,
    name: product.name,
    price: product.price,
  }));
};

const PopularProductsSection: React.FC = () => {
  const [products, setProducts] = React.useState<ProductCardProps[]>([]);

  React.useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return <PopularProducts products={products} />;
};

export default PopularProductsSection;
