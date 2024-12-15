import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <p className="text-sm">
              Magnates Empire provides premium tool access at affordable prices,
              helping professionals and businesses grow without breaking the bank.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-500">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-500">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@magnatesempire.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: 24/7 Support Available</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-sm">
            © 2024 Magnates Empire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}