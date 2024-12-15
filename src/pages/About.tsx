import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To democratize access to premium tools and empower individuals and businesses to reach their full potential without the burden of multiple expensive subscriptions.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'We believe in transparency, affordability, and exceptional service. Our commitment is to provide reliable access to premium tools while maintaining the highest standards of customer support.',
  },
  {
    icon: Users,
    title: 'Team',
    description: 'Our diverse team of technology enthusiasts and customer service professionals works tirelessly to ensure you have seamless access to the tools you need for success.',
  },
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Success Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-playfair text-white text-center mb-16">
          About Magnates Empire
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value) => (
            <div key={value.title} className="bg-navy-800 p-8 rounded-xl">
              <value.icon className="w-12 h-12 text-gold-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">{value.title}</h2>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-playfair text-white text-center mb-12">
          Meet Our Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-navy-800 rounded-xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gold-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}