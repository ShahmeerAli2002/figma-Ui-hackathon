import * as React from "react";
import { PopularProducts } from "./PopalurProduct";
import { productsData } from "./tsproduct";

export const PopularProductsSection: React.FC = () => {
  return <PopularProducts products={productsData} />;
};

export { PopularProducts };
