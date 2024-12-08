import * as React from 'react';
import { NavLink } from './navlink';
import { SocialIcon } from './socialiscon';
import { NavigationLinks } from './nagvationlink';

export const Navigation1: React.FC = () => {
  const mainNavLinks = ['About us', 'Contact', 'Blog'];
  const socialIcons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5e7c272569076b01e0d1e94690a7228368cd341fd51742c1ebc0fe0ed8afb24c?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/72e73fc243d44823077c5165c62dec226cf67a378c6deab36aa6693e9af3a865?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/016010bfac0a3f55de96dd5b7d8c13724e5e74fa6d6e2bb614d557e6cb3601ec?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245', alt: 'Social media icon 3' },
  ];
  const productLinks = [
    'All products',
    'Plant pots',
    'Ceramics',
    'Tables',
    'Chairs',
    'Crockery',
    'Tableware',
    'Cutlery',
  ];

  return (
    <div className="flex overflow-hidden flex-col pt-5 bg-white">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1361px] max-md:max-w-full">
        <div className="text-2xl text-zinc-800">Avion</div>
        <div className="flex gap-10 my-auto">
          <div className="flex gap-8 items-start">
            {mainNavLinks.map((link, index) => (
              <NavLink key={index} text={link} />
            ))}
          </div>
          <div className="flex gap-4 items-start self-start mt-1.5">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-5 mt-5 w-full text-base text-gray-500 bg-stone-50 max-md:px-5 max-md:max-w-full">
        <NavigationLinks links={productLinks} />
      </div>
    </div>
  );
};