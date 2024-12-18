import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-900 mb-6"
        >
          The Future of AI on{' '}
          <motion.span
            initial={{ color: '#2563EB' }}
            animate={{ color: ['#2563EB', '#4F46E5', '#7C3AED', '#2563EB'] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-blue-600"
          >
            Solana
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Build, train, and deploy cutting-edge AI models within a secure blockchain ecosystem.
          Access exclusive neural networks and private laboratory environments.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Launch Platform
        </motion.button>
      </div>
    </section>
  );
}