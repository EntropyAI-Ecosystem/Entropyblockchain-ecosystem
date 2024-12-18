import React from 'react';
import { Triangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Triangle className="w-6 h-6" />
          <span className="text-xl font-bold">EntropyAI</span>
        </div>
        <p>© 2024 EntropyAI. All rights reserved.</p>
      </div>
    </footer>
  );
}