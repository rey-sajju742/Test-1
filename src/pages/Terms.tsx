import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-playfair text-white text-center mb-16">
          Terms and Conditions
        </h1>

        <div className="bg-navy-800 rounded-xl p-8 prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Magnates Empire's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Subscription Services</h2>
            <p className="text-gray-300">
              Our subscription services provide access to various premium tools and software. By subscribing:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>You agree to pay the subscription fees</li>
              <li>You acknowledge that access is for personal/business use only</li>
              <li>You agree not to share or resell access</li>
              <li>You understand that tool availability may vary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any unauthorized use of the services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
            <p className="text-gray-300">
              Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Recurring billing based on chosen plan</li>
              <li>Automatic renewal unless cancelled</li>
              <li>No refunds for partial months</li>
              <li>Price changes with 30 days notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300">
              Magnates Empire shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p className="text-gray-300">
              For questions about these Terms, please contact us at:
            </p>
            <ul className="list-none pl-6 text-gray-300 mt-2">
              <li>Email: legal@magnatesempire.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Avenue, San Francisco, CA 94105</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}