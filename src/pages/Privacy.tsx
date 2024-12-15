import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-playfair text-white text-center mb-16">
          Privacy Policy
        </h1>

        <div className="bg-navy-800 rounded-xl p-8 prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Providing and maintaining our services</li>
              <li>Processing payments and subscriptions</li>
              <li>Communicating with you about our services</li>
              <li>Improving our services and user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
            <p className="text-gray-300">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none pl-6 text-gray-300 mt-2">
              <li>Email: privacy@magnatesempire.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Avenue, San Francisco, CA 94105</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}