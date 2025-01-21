"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import client from "../../../sanity";
import { BrandFeatures } from "../../components/BrandFeatures";
import NewsletterSection from "@/app/components/NewsletterSection";
import PopularProductsSection from "../../components/popalursproduct/PopularProductsSection";

// Define product interface
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  features: string[];
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

const ProductDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const query = `*[_type == "product" && _id == "${id}"] {
            _id,
            name,
            description,
            price,
            dimensions {
              width,
              height,
              depth
            },
            features,
            image {
              asset -> {
                _id,
                url
              }
            }
          }`;
          const data: Product[] = await client.fetch(query);
          if (data.length > 0) {
            setProduct(data[0]);
          } else {
            setError("Product not found!");
          }
        } catch (err) {
          console.error("Error fetching product:", err);
          setError("Failed to fetch product data. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cartItems.findIndex((item: Product) => item._id === product._id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      const productToAdd = {
        ...product,
        quantity: 1,
        imageUrl: product.image.asset.url,
      };
      cartItems.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Product added to cart!");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-10 md:px-20 md:py-20 bg-gray-50 min-h-screen">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={product?.image.asset.url}
            alt={product?.name}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:pl-16">
          <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
          <p className="text-xl text-indigo-600 font-semibold">£{product?.price}</p>
          <div className="text-gray-700 text-sm space-y-4">
            <p>{product?.description}</p>
            <ul className="space-y-1">
              {product?.features.map((feature, index) => (
                <li key={index} className="list-disc ml-6">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-gray-600">
              <h4 className="font-semibold">Dimensions:</h4>
              <p>Width: {product?.dimensions.width}</p>
              <p>Height: {product?.dimensions.height}</p>
              <p>Depth: {product?.dimensions.depth}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={addToCart}
              className="bg-indigo-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-800 transition"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Additional Sections */}
      <PopularProductsSection />
      <BrandFeatures />
      <NewsletterSection />
    </div>
  );
};

export default ProductDetail;
