import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: 49.99,
    period: '/month',
    features: [
      'Access to all 150+ premium tools',
      'Monthly billing flexibility',
      'Cancel anytime',
      '24/7 premium support',
    ],
    savings: '75%',
  },
  {
    name: 'Quarterly',
    price: 129.99,
    period: '/quarter',
    features: [
      'Everything in Monthly plan',
      'Priority support',
      'Advanced analytics',
      'Save 15% vs monthly',
    ],
    savings: '80%',
    popular: true,
  },
  {
    name: 'Yearly',
    price: 399.99,
    period: '/year',
    features: [
      'Everything in Quarterly plan',
      'VIP support',
      'Custom solutions',
      'Save 33% vs quarterly',
    ],
    savings: '90%',
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center text-white mb-16">Choose Your Plan</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-navy-800 rounded-2xl p-8 ${
                plan.popular ? 'border-2 border-gold-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-gold-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center mb-6">
                <span className="text-gold-500 font-bold">
                  Save up to {plan.savings}
                </span>
                <p className="text-sm text-gray-400">vs. individual subscriptions</p>
              </div>
              
              <button className="w-full bg-gold-500 text-navy-900 py-3 rounded-lg font-bold hover:bg-gold-400 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}