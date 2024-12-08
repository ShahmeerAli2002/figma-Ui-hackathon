export interface ProductCardProps {
    image: string;
    title: string;
    price: number;
  }
  
  export interface CollectionButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }