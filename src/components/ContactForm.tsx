import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';
import { toolsList } from '../data/tools';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  selectedTools: string[];
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedTools: [],
    message: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showToolsList, setShowToolsList] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const filteredTools = toolsList.filter(tool =>
    tool.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.message.length < 50) {
      newErrors.message = 'Message must be at least 50 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
          selectedTools: formData.selectedTools.join(', '),
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          selectedTools: [],
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-navy-800 rounded-xl p-8"
      data-netlify="true"
      name="contact"
    >
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-lg flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-900/50 text-red-300 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          There was an error submitting the form. Please try again.
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            aria-required="true"
            className={`w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 ${
              errors.fullName ? 'border-red-500' : ''
            }`}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-red-500 text-sm">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            className={`w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 ${
              errors.email ? 'border-red-500' : ''
            }`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-red-500 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            aria-required="true"
            className={`w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 ${
              errors.phone ? 'border-red-500' : ''
            }`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-red-500 text-sm">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="tools" className="block text-gray-300 mb-2">
            Select Tools
          </label>
          <div className="relative">
            <input
              type="text"
              id="tools"
              className="w-full bg-navy-700 text-white rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-gold-500"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowToolsList(true);
              }}
              onFocus={() => setShowToolsList(true)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          
          {showToolsList && (
            <div className="absolute z-10 w-full mt-1 bg-navy-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredTools.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  className={`w-full text-left px-4 py-2 hover:bg-navy-600 ${
                    formData.selectedTools.includes(tool) ? 'bg-navy-600' : ''
                  }`}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      selectedTools: formData.selectedTools.includes(tool)
                        ? formData.selectedTools.filter((t) => t !== tool)
                        : [...formData.selectedTools, tool],
                    });
                  }}
                >
                  {tool}
                </button>
              ))}
            </div>
          )}
          
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.selectedTools.map((tool) => (
              <span
                key={tool}
                className="bg-navy-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tool}
                <button
                  type="button"
                  className="ml-2 text-gray-400 hover:text-white"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedTools: formData.selectedTools.filter((t) => t !== tool),
                    })
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
            rows={6}
            className={`w-full bg-navy-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 ${
              errors.message ? 'border-red-500' : ''
            }`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-red-500 text-sm">
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-400">
            {formData.message.length}/50 characters minimum
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-navy-900 py-4 rounded-lg font-bold hover:from-gold-500 hover:to-gold-400 transition-colors"
        >
          Submit Message
        </button>
      </div>
    </form>
  );
}