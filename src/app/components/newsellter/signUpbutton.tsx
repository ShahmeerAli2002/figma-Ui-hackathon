import * as React from 'react';
import { SignUpButtonProps } from './types';

export const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden gap-2.5 self-start px-8 py-4 text-white bg-indigo-950 max-md:px-5"
      type="submit"
    >
      Sign up
    </button>
  );
};