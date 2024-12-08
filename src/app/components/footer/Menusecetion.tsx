import * as React from 'react';
import { MenuItem } from './Menuitem';
import { MenuSectionProps } from './type';

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <div className="flex flex-col text-white">
    <div className="text-base">{title}</div>
    {items.map((item, index) => (
      <MenuItem key={index} text={item} />
    ))}
  </div>
);