"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import client from "../../../sanity";
import { BrandFeatures } from "../../components/BrandFeatures";
import NewsletterSection from "@/app/components/NewsletterSection";
import PopularProductsSection from "../../components/popalursproduct/PopularProductsSection";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == "${id}"] {
          _id,
          title,
          description,
          price,
          image {
            asset -> {
              _id,
              url
            }
          }
        }`;
        const data = await client.fetch(query);
        setProduct(data[0]); // Since data is returned as an array
        setLoading(false);
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Add to Cart Functionality
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-10 md:px-20 md:py-20 bg-gray-50 min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={product.image.asset.url}
            alt={product.title}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:pl-16">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-indigo-600 font-semibold">£{product.price}</p>
          <div className="text-gray-700 text-sm space-y-4">
            <p>{product.description}</p>
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
      <PopularProductsSection />
      <BrandFeatures />
      <NewsletterSection />
    </div>
  );
};

export default ProductDetail;
