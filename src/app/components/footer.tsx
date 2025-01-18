"use client";
import * as React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const menuItems = {
    menu: ['New arrivals', 'Best sellers', 'Recently viewed', 'Popular this week', 'All products'],
    categories: ['Crockery', 'Furniture', 'Homeware', 'Plant pots', 'Chairs', 'Crockery'],
    company: ['About us', 'Vacancies', 'Contact us', 'Privacy', 'Returns policy']
  };

  const socialIcons = [
    { icon: <FaFacebookF />, href: 'https://facebook.com', alt: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', alt: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', alt: 'Instagram' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com', alt: 'LinkedIn' },
    { icon: <FaYoutube />, href: 'https://youtube.com', alt: 'YouTube' },
  ];

  return (
    <div className="flex flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5">
      {/* Menu Sections */}
      <div className="flex flex-wrap gap-5 justify-between text-sm text-white">
        {Object.entries(menuItems).map(([title, items]) => (
          <div key={title} className="flex flex-col">
            <div className="text-base">{title.charAt(0).toUpperCase() + title.slice(1)}</div>
            {items.map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="mt-3">{item}</span>
              </Link>
            ))}
          </div>
        ))}

        {/* Mailing List */}
        <div className="flex flex-col">
          <div className="text-base">Join our mailing list</div>
          <form className="flex flex-wrap mt-4 w-full">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-8 py-4 text-white bg-white bg-opacity-10 min-w-[240px]"
            />
            <button type="submit" className="px-8 py-4 bg-white text-indigo-950">
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 h-px bg-indigo-800 w-full" />

      {/* Footer Bottom */}
      <div className="flex flex-wrap gap-5 justify-between mt-6 text-sm text-white">
        <div>Copyright 2022 Avion LTD</div>
        <div className="flex gap-6">
          {socialIcons.map((icon, index) => (
            <Link key={index} href={icon.href} aria-label={icon.alt}>
              <span className="text-lg">{icon.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
