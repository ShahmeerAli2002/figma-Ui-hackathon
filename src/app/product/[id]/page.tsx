"use client";

import { PopularProductsSection } from "@/app/components/popalursproduct/finalproduct";
import { productsData } from "../../components/popalursproduct/tsproduct";
import { BrandFeatures } from "@/app/components/brabd/Brandfearuter";
import { NewsletterSection } from "@/app/components/secondpart/newsfrom";
import { Navigation } from "@/app/components/Navigation";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const { id } = params;

  // ID se product fetch karein
  const product = productsData[parseInt(id)];

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Navigation/>
    <div className="flex flex-col md:flex-row items-center justify-center px-10 py-10 md:px-20 md:py-20 bg-gray-50 min-h-screen">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 md:pl-16">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-xl text-indigo-600 font-semibold">£{product.price}</p>

        <div className="text-gray-700 text-sm space-y-4">
          <p>
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The {product.title.toLowerCase()} is
            perfect for any stylish living space with beech legs and lambskin
            leather upholstery.
          </p>
          <ul className="list-disc list-inside">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        {/* Dimensions */}
        <div className="text-gray-700">
          <h3 className="font-semibold">Dimensions</h3>
          <p>Height: 110cm</p>
          <p>Width: 75cm</p>
          <p>Depth: 50cm</p>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Amount:</label>
          <div className="flex items-center border rounded-md px-2">
            <button className="px-2 text-gray-700 hover:text-indigo-600">
              -
            </button>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-12 text-center border-none outline-none"
            />
            <button className="px-2 text-gray-700 hover:text-indigo-600">
              +
            </button>
          </div>
        </div>

        <button className="bg-indigo-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-800 transition">
          Add to cart
        </button>
      </div>
      
    </div>
    <div>
    <PopularProductsSection/>
    <BrandFeatures/>
    <NewsletterSection/>
    </div>
    </div>
    
  );
};

export default ProductDetail;
