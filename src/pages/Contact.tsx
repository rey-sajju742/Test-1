import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Business Avenue', 'Tech District', 'San Francisco, CA 94105'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', 'Monday to Friday', '9:00 AM - 6:00 PM PST'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['support@magnatesempire.com', 'sales@magnatesempire.com'],
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-playfair text-white text-center mb-16">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-navy-800 p-8 rounded-xl text-center">
              <info.icon className="w-12 h-12 text-gold-500 mb-4 mx-auto" />
              <h2 className="text-2xl font-bold text-white mb-4">{info.title}</h2>
              <div className="text-gray-300">
                {info.details.map((detail, index) => (
                  <p key={index} className="mb-2">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}