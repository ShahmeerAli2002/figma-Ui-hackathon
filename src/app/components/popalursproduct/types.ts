export interface ProductCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: number;
    aspectRatio?: string;
    width?: string;
  }
  
  export interface PopularProductsProps {
    products: ProductCardProps[];
  }