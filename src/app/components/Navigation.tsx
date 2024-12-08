"use client"
import * as React from 'react';
import { NavLink } from './Navlink';
import { Icon } from './icon';
import { NavigationProps } from './types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navLinks = [
  { text: 'Plant pots', href: '/plant-pots' },
  { text: 'Ceramics', href: '/ceramics' },
  { text: 'Tables', href: '/tables' },
  { text: 'Chairs', href: '/chairs' },
  { text: 'Crockery', href: '/crockery' },
  { text: 'Tableware', href: '/tableware' },
  { text: 'Cutlery', href: '/cutlery' }
];

const topNavLinks = [
  { text: 'About', href: '/about' },
  { text: 'Shopping Basket', href: '/shoppinglist' },
  { text: 'Product Listing', href: '/productlist' }
];

export const Navigation: React.FC<NavigationProps> = ({ className }) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  const handleCartClick = () => {
    router.push('/basket');
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <div className={`sticky top-0 z-50 flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full ${className || ''}`}>
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:mr-0.5 max-md:max-w-full">
        <Icon 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d81950817f056517b80782120ca463511cf00875522007552066f9500fc541e?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" 
          alt="Menu" 
          onClick={handleMenuClick}
         
        />

        <div className="flex items-center gap-10 max-md:flex-grow">
          <div className="text-2xl text-zinc-800 cursor-pointer" onClick={() => router.push('/')}>Avion</div>
          <div className="hidden md:flex gap-6">
            {topNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-zinc-800 hover:text-zinc-600">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 self-stretch my-auto">
          <Icon 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e73fc243d44823077c5165c62dec226cf67a378c6deab36aa6693e9af3a865?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" 
            alt="Search" 
            onClick={handleSearchClick}
          />
          <Icon 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b962bc50f60a9ec044648ac46a220e167b4a6bac6a1ffae30f05347a7af3d267?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245" 
            alt="Cart" 
            onClick={handleCartClick}
          />
        </div>
      </div>
      <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="flex flex-col items-center gap-6">
            {topNavLinks.map((link) => (
              <div
                key={link.href}
                className="text-zinc-800 text-lg cursor-pointer"
                onClick={() => handleNavigation(link.href)}
              >
                {link.text}
              </div>
            ))}
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="text-zinc-800 text-lg cursor-pointer"
                onClick={() => handleNavigation(link.href)}
              >
                {link.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav 
        role="navigation" 
        aria-label="Main navigation"
        className="hidden md:flex justify-center w-full"
      >
        <div className="flex flex-wrap gap-10 items-start mt-5 max-md:max-w-full">
          {navLinks.map((link) => (
            <NavLink 
              key={link.href} 
              text={link.text} 
              href={link.href}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};