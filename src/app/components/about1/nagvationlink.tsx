import * as React from 'react';
import { NavigationLinksProps } from './types';

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => (
  <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
    {links.map((link, index) => (
      <div key={index} className="text-base text-gray-500" role="link" tabIndex={0}>
        {link}
      </div>
    ))}
  </div>
);