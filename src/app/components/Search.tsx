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
import dotenv from 'dotenv';
dotenv.config();
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


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

    <div className="relative">
      <div className="flex items-center">







        <FiSearch 
          className="text-gray-600 text-xl cursor-pointer" 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded-md w-64 ml-2"
          />
        )}
      </div>




      {isSearchOpen && filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg max-h-96 overflow-y-auto w-[300px]">
          <ul>
            {filteredProducts.map((product) => (



              <li key={product._id} className="p-2 border-b hover:bg-gray-100">
                <a href={`/product/${product._id}`} className="flex items-center space-x-3">
                  {product.image && product.image.asset && (
                    <img 
                      src={product.image.asset.url} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="text-gray-800 font-medium">{product.name}</p>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                  </div>
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