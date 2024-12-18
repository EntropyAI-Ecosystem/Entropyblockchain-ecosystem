import React from 'react';
import Feature from './Feature';
import { Brain, Database, TestTube, Shield, Cpu, Webhook } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Exclusive AI Models",
      description: "Access cutting-edge AI models developed by leading experts in the field"
    },
    {
      icon: Database,
      title: "Neural Network Repository",
      description: "Browse and utilize a vast collection of pre-trained neural networks"
    },
    {
      icon: TestTube,
      title: "Private Laboratory",
      description: "Train and experiment with AI models in a secure environment"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "All operations are securely logged on the Solana blockchain"
    },
    {
      icon: Cpu,
      title: "Model Deployment",
      description: "Deploy trained models directly on the blockchain"
    },
    {
      icon: Webhook,
      title: "API Integration",
      description: "Comprehensive APIs for seamless platform interaction"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}