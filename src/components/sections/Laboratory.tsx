import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Brain, Cpu } from 'lucide-react';
import Card from '../ui/Card';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { images } from '../../utils/theme';

const tools = [
  {
    icon: Brain,
    title: 'Neural Network Training',
    description: 'Train your AI models with advanced neural network architectures'
  },
  {
    icon: Beaker,
    title: 'Experiment Environment',
    description: 'Secure sandbox for testing and validating AI models'
  },
  {
    icon: Cpu,
    title: 'Hardware Acceleration',
    description: 'Optimized computing resources for faster training'
  }
];

export default function Laboratory() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-6"
            >
              Private AI Laboratory
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              Access state-of-the-art tools and environments for AI model development
              and training in a secure, private laboratory setting.
            </motion.p>
            
            <div className="grid gap-6">
              {tools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <tool.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{tool.title}</h3>
                        <p className="text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={images.lab}
                alt="AI Laboratory"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">Laboratory Active</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Resources Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}