import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import sanityClient from '@sanity/client';
interface Product {
    _id: string;
    name: string;
    description: string;
    features: string[];
    dimensions: string;
    category: string;
    price: number;
    tags: string[];
    image: {
        asset: {
            _id: string;
            url: string;
        };
    };
}
const client = sanityClient({
  projectId: 'qb6wry8z', // Replace with your Sanity project ID
  dataset: 'production', // Or your dataset name
  useCdn: true, // Use the CDN for faster queries
});

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
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

      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="relative w-64">
      <div className="flex items-center">
        <FiSearch className="text-gray-600 text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-md w-full ml-2"
        />
      </div>

      {/* Display filtered products */}
      {filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto">
          <ul>
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 border-b">
                <a href={`/product/${product._id}`} className="text-gray-800">
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
