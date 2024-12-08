import * as React from 'react';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
    />
  );
};