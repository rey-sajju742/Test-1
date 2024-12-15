import React from 'react';
import { Bot, Search, Youtube, Palette, CheckCircle } from 'lucide-react';

const tools = [
  { icon: Bot, name: 'ChatGPT Pro', description: 'Advanced AI writing and analysis' },
  { icon: Search, name: 'SEMrush', description: 'Complete SEO toolkit' },
  { icon: Search, name: 'Moz Pro', description: 'SEO software and data' },
  { icon: Youtube, name: 'YouTube Premium', description: 'Ad-free streaming experience' },
  { icon: Palette, name: 'Canva Pro', description: 'Professional design tools' },
];

const benefits = [
  'Affordable and simple pricing for 150+ tools',
  'All-in-one subscription for business and personal growth',
  'Flexible plans to suit your needs',
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center text-white mb-16">Premium Tools at Your Fingertips</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {tools.map((Tool, index) => (
            <div
              key={index}
              className="bg-navy-700 p-6 rounded-xl transform transition-all hover:scale-105 hover:bg-navy-600 group"
            >
              <Tool.icon className="w-12 h-12 text-gold-500 mb-4 mx-auto" />
              <h3 className="text-xl text-white text-center font-bold mb-2">{Tool.name}</h3>
              <p className="text-gray-400 text-center text-sm">{Tool.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}