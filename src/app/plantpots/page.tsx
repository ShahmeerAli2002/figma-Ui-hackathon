"use client";
import * as React from "react";
import Link from "next/link";
import  client  from "../../sanity"; // Sanity client import

// ProductCard Component
const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-64 object-contain" />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600">
          {name}
        </h3>
        <p className="mt-2 text-indigo-700 font-semibold">£{price}</p>
      </div>
    </div>
  );
};

// CollectionButton Component
const CollectionButton: React.FC<CollectionButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-9 text-base bg-stone-50 hover:bg-stone-100 transition-colors text-indigo-950 max-md:px-5 focus:outline-none focus:ring-2 focus:ring-indigo-950"
      aria-label="View ceramics collection"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// CeramicsCollection Component
const CeramicsCollection: React.FC = () => {
  const [products, setProducts] = React.useState<any[]>([]);

  // Fetching products from Sanity
  React.useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][10..18] {
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

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleViewCollection = React.useCallback(() => {
    window.location.href = "";
  }, []);

  return (
    <section className="flex flex-col px-20 py-16 w-full bg-gray-50 max-md:px-5">
      <h1 className="text-3xl font-semibold text-gray-800">Plant Pots</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <span className="group">
              <ProductCard image={product.image.asset.url} name={product.name} price={product.price} />
            </span>
          </Link>
        ))}
      </div>
     
    </section>
  );
};

// Interfaces for props
export interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

export interface CollectionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// Exporting Main Component
const Product = () => {
  return <CeramicsCollection />;
};

export default Product;
