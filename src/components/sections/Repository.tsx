import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Download } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { images } from '../../utils/theme';

const featuredModels = [
  {
    name: 'GPT-SOL v1',
    type: 'Natural Language Processing',
    accuracy: 94.5,
    downloads: 1234
  },
  {
    name: 'SolanaVision',
    type: 'Computer Vision',
    accuracy: 96.2,
    downloads: 856
  },
  {
    name: 'NeuroTrade AI',
    type: 'Financial Analysis',
    accuracy: 89.8,
    downloads: 2341
  }
];

export default function Repository() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={images.repository}
                alt="AI Model Repository"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">Popular Models</span>
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {featuredModels.map((model, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{model.name}</span>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{model.downloads}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="order-1 lg:order-2"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-6"
            >
              AI Model Repository
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              Explore our curated collection of pre-trained AI models, ready for
              deployment on the Solana blockchain. Download, customize, and integrate
              these models into your applications.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              {featuredModels.map((model, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-1">{model.name}</h3>
                      <p className="text-sm text-gray-600">{model.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">
                        {model.accuracy}% Accuracy
                      </div>
                      <div className="text-sm text-gray-500">
                        {model.downloads} Downloads
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Button size="lg">
                Browse Repository
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}