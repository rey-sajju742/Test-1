import React from 'react';
import { Crown } from 'lucide-react';
import SubscriptionForm from './SubscriptionForm';

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy-900 to-navy-950 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Crown className="w-16 h-16 text-gold-500 mb-8" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 leading-tight">
            Magnates Empire
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gold-500">
              Unlock 150+ Premium Tools in One Affordable Subscription!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
            Empowering creators, businesses, and professionals with tools like ChatGPT Pro, SEMrush, Moz, YouTube Premium, and many more.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-gold-600 to-gold-500 text-navy-900 px-8 py-4 rounded-lg text-xl font-bold transform transition-all hover:scale-105 hover:shadow-xl hover:from-gold-500 hover:to-gold-400"
          >
            Get Access Now
          </button>
        </div>
      </div>
      {isFormOpen && <SubscriptionForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}