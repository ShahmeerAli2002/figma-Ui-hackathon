import * as React from 'react';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <div className="text-base text-gray-500" role="link" tabIndex={0}>
    {text}
  </div>
);