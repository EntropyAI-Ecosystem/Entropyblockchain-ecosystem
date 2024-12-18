import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-white text-blue-900 hover:bg-blue-50',
  outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg'
};

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'rounded-lg font-semibold transition-colors',
        variants[variant],
        sizes[size],
        isLoading && 'opacity-70 cursor-not-allowed',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}