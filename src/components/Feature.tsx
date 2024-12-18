import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
      >
        <Icon className="w-6 h-6 text-blue-600" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}