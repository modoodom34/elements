import React from 'react';
import { buttonVariants } from './buttonVariants';
import type { CTAButtonProps } from './types';

export function CTAButton({ variant, className = '', ...props }: CTAButtonProps) {
  const baseStyles = 'px-6 py-3 transition-all duration-200 transform hover:scale-105';
  const variantStyles = buttonVariants[variant];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      Get Started Now!
    </button>
  );
}