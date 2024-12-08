import * as React from 'react';
import { MenuSection } from './Menusecetion';
import { SocialIcon } from './socialicon';

export const Footer: React.FC = () => {
  const menuItems = {
    menu: ['New arrivals', 'Best sellers', 'Recently viewed', 'Popular this week', 'All products'],
    categories: ['Crockery', 'Furniture', 'Homeware', 'Plant pots', 'Chairs', 'Crockery'],
    company: ['About us', 'Vacancies', 'Contact us', 'Privacy', 'Returns policy']
  };

  const socialIcons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40548a1c951deb2f38019b28827a8ea50e0da44298f39eb29c30ea5675c83a49?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0bb76a110f43754060b84860e23826a77b199539411f8ad4f5e3083e218aabd9?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bacc9120b6b69cbaec7e7e8b1d6c30ceb31bf0792d5d9a9d4c4d0df3d19010a4?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 3' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/815a5b19bc3dd141d71f6797eab90447318dad57abae0768e46e1b2320ced572?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f79211fbc502f1d6a1043b11629b3763e2b2cc2c0022166073dcc2dd236f7e60?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/15a1cad1b5464faf3aa385f783ab46dcc2c67723b928dc7eb1a791f76d6cc6c0?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 6' }
  ];

  return (
    <div className="flex overflow-hidden flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start text-sm max-md:max-w-full">
        <MenuSection title="Menu" items={menuItems.menu} />
        <MenuSection title="Categories" items={menuItems.categories} />
        <MenuSection title="Our company" items={menuItems.company} />
        
        <div className="flex flex-col text-base max-md:max-w-full">
          <div className="self-start text-white">Join our mailing list</div>
          <form className="flex flex-wrap mt-4 w-full max-md:max-w-full">
            <label htmlFor="emailInput" className="sr-only">Email address</label>
            <input
              type="email"
              id="emailInput"
              placeholder="your@email.com"
              className="overflow-hidden flex-1 shrink px-8 py-4 text-white whitespace-nowrap bg-white bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full"
            />
            <button type="submit" className="overflow-hidden gap-2.5 self-start px-8 py-4 bg-white text-indigo-950 max-md:px-5">
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="shrink-0 mt-12 max-w-full h-px bg-indigo-800 border border-indigo-800 border-solid w-[1277px] max-md:mt-10" />
      
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
        <div className="my-auto text-sm text-white">
          Copyright 2022 Avion LTD
        </div>
        <div className="flex gap-6 items-start">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </div>
      </div>
    </div>
  );
};