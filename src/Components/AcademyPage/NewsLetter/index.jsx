'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from '@mui/icons-material';

const NewsletterSubscribe = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!audience) {
      setStatus('⚠️ Please select your category.');
      return;
    }

    setStatus('Sending...');

    emailjs
      .sendForm(
        'your_service_id',     // 🔁 Replace with your EmailJS Service ID
        'your_template_id',    // 🔁 Replace with your Template ID
        form.current,
        'your_public_key'      // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('✅ Subscribed successfully!');
          setEmail('');
          setAudience('');
        },
        () => {
          setStatus('❌ Subscription failed. Please try again.');
        }
      );
  };

  return (
    <section className="w-full bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Subscribe to Our Free Resources
        </h2>
        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          Receive career-related content, onboarding strategies, hiring tips, and more.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <select
            name="user_type"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            required
            className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="">I am...</option>
            <option value="Organization">For Organization</option>
            <option value="Professional">For Working Professional</option>
          </select>

          <input
            name="user_email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />

          <button
            type="submit"
            className="w-full sm:w-1/3 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition duration-300"
          >
            <Send fontSize="small" />
            Subscribe
          </button>
        </form>

        {status && (
          <p className="text-center text-sm text-gray-700 mt-4">{status}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
