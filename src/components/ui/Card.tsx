import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { shadows } from '../../utils/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        'bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200',
        shadows.subtle,
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}