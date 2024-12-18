import React from 'react';
import { Triangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Triangle className="w-8 h-8 rotate-180" />
          </motion.div>
          <h1 className="text-2xl font-bold">EntropyAI</h1>
        </motion.div>
        
        <Navigation />
      </div>
    </header>
  );
}