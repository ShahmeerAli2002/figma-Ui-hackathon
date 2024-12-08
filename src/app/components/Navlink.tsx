import * as React from 'react';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <button 
      className="text-base text-gray-500"
      tabIndex={0}
      role="menuitem"
    >
      {text}
    </button>
  );
};