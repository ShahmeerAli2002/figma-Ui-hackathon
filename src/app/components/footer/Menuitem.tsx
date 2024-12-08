import * as React from 'react';
import { MenuItemProps } from './type';

export const MenuItem: React.FC<MenuItemProps> = ({ text }) => (
  <div className="mt-3">{text}</div>
);