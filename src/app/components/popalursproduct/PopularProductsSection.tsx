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
  width?: string;
}

interface PopularProductsProps {
  products: ProductCardProps[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <div className="flex flex-col px-20 py-14 w-full bg-white max-md:px-5">
      <h2 className="self-start text-3xl font-semibold leading-snug text-indigo-950">
        Our popular products
      </h2>

      <div className="mt-8 flex gap-6 w-full overflow-x-auto">
        {products.map((product, index) => (
          <div

            key={`product-${product._id}-${index}`}
            className="flex-shrink-0"
            style={{ width: index === 0 ? "40%" : "30%" }}
          >
            <Link href={`/product/${product._id}`}>
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
                      {product.name}
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

const fetchProducts = async () => {
  const query = `*[_type == "product"][3..6] {
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