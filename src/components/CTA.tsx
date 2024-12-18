import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-blue-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Transform AI Development?
        </motion.h2>
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 text-blue-100"
        >
          Join the next generation of AI innovation on the Solana blockchain
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Get Started Now
        </motion.button>
      </div>
    </motion.section>
  );
}