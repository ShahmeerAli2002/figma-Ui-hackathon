export interface NavLinkProps {
    text: string;
    href: string;
  }
  
  export interface IconProps {
    src: string;
    alt: string;
    onClick?: () => void;
  }
  
  export interface NavigationProps {
    className?: string;
  }