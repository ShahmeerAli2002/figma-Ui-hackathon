// components/ProductPage.tsx
"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  productType: string;
  brand: string;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("");
  const [productType, setProductType] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  // Fetch products from the server
  useEffect(() => {
    // Replace this URL with your real API endpoint
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: any, index: number) => ({
          id: index,
          name: item.title,
          price: Math.floor(item.price),
          image: item.image,
          category: item.category,
          productType: "General",
          brand: "No Brand",
        }));
        setProducts(formattedData);
        setFilteredProducts(formattedData);
      });
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (productType) {
      filtered = filtered.filter((p) => p.productType === productType);
    }

    if (brand) {
      filtered = filtered.filter((p) => p.brand === brand);
    }

    if (sortBy === "price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [category, productType, brand, sortBy, products]);

  return (
    <div className="px-8 py-12">
      <h1 className="text-2xl font-semibold mb-8">All Products</h1>

      {/* Filter & Sort Options */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <select
          className="p-2 border rounded"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="">Product Type</option>
          <option value="General">General</option>
          <option value="Specific">Specific</option>
        </select>
        <select
          className="p-2 border rounded"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Brand</option>
          <option value="No Brand">No Brand</option>
        </select>
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sorting by:</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
