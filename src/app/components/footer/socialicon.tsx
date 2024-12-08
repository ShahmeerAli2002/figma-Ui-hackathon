import * as React from 'react';
import { SocialIconProps } from './type';

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 w-6 bg-blend-multiply aspect-square fill-white"
  />
);