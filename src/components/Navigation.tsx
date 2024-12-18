import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useWalletStore } from '../store/walletStore';

const menuItems = [
  { name: 'Repository', href: '#repository' },
  { name: 'Laboratory', href: '#laboratory' },
  { name: 'AI Agents', href: '#agents' },
  { name: 'Documentation', href: '#docs' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { connected, connect, disconnect } = useWalletStore();

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={connected ? disconnect : connect}
          className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-lg border border-white/20"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-lg mt-2 rounded-lg p-4`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}