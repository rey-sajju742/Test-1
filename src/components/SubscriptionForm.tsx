import React, { useState } from 'react';
import { X } from 'lucide-react';

const toolCategories = [
  {
    name: 'AI Writing',
    tools: ['ChatGPT Pro', 'Copy.ai', 'Jasper'],
  },
  {
    name: 'SEO',
    tools: ['SEMrush', 'Moz Pro', 'Ahrefs'],
  },
  {
    name: 'Video & Design',
    tools: ['YouTube Premium', 'Canva Pro', 'Adobe Creative Cloud'],
  },
];

export default function SubscriptionForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedTools: [] as string[],
    plan: 'monthly',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the Google Sheets integration
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-navy-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-3xl font-playfair text-white mb-6">Get Started with Magnates Empire</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Select Tools</label>
              <div className="space-y-4">
                {toolCategories.map((category) => (
                  <div key={category.name} className="bg-navy-700 p-4 rounded-lg">
                    <h4 className="text-gold-500 mb-2">{category.name}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.tools.map((tool) => (
                        <label key={tool} className="flex items-center text-white">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={formData.selectedTools.includes(tool)}
                            onChange={(e) => {
                              const tools = e.target.checked
                                ? [...formData.selectedTools, tool]
                                : formData.selectedTools.filter((t) => t !== tool);
                              setFormData({ ...formData, selectedTools: tools });
                            }}
                          />
                          {tool}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Subscription Plan</label>
              <select
                className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500"
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Custom Message (Optional)</label>
              <textarea
                className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-navy-900 py-4 rounded-lg font-bold hover:from-gold-500 hover:to-gold-400 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}