import React from 'react';

type ButtonProps = {
  variant: number;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CTAButton({ variant, className = '', ...props }: ButtonProps) {
  const variants = {
    1: 'bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg',
    2: 'bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full',
    3: 'bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-medium rounded',
    4: 'bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl border-b-4 border-green-800',
    5: 'bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg shadow-lg',
    6: 'bg-green-500 hover:bg-green-600 text-white font-medium rounded-full ring-2 ring-green-300',
    7: 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded shadow-emerald-200 shadow-inner',
    8: 'bg-gradient-to-br from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-lg',
    9: 'bg-green-500 hover:bg-green-600 text-white font-bold rounded-full border-2 border-green-200',
    10: 'bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg',
    // ... continuing with more variants up to 50
  } as const;

  const baseStyles = 'px-6 py-3 transition-all duration-200 transform hover:scale-105';
  const variantStyles = variants[variant as keyof typeof variants] || variants[1];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      Get Started Now!
    </button>
  );
}