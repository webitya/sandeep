'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactUsEl = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    totalEmployees: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      alert('Message sent successfully!');
      setFormData({
        fullName: '',
        companyName: '',
        totalEmployees: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-1">
      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto border border-gray-200 bg-white md:px-9 px-1 py-12"
      >
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          We're available through phone, email, or at our office. Reach out anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <PhoneIcon className="text-blue-700" fontSize="large" />,
              title: 'Phone',
              value: '+91 6200207379',
            },
            {
              icon: <EmailIcon className="text-blue-700" fontSize="large" />,
              title: 'Email',
              value: 'sandeep@salessyllabus.com',
            },
            {
              icon: <LocationIcon className="text-blue-700" fontSize="large" />,
              title: 'Address',
              value: 'D block, Jayshree Green City, Argora, Ranchi',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 border-l-4 border-blue-600 pl-4">
              {item.icon}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

    

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className=" mx-auto mt-3 border border-gray-200 bg-white md:px-9 px-1 py-12"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {[
            { label: 'Full Name', name: 'fullName' },
            { label: 'Company Name', name: 'companyName' },
            { label: 'Total Employees', name: 'totalEmployees', type: 'number' },
            { label: 'Phone Number', name: 'phoneNumber' },
            { label: 'Email', name: 'email', type: 'email' },
          ].map(({ label, name, type = 'text' }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Your ${label}`}
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </motion.section>
        {/* Map */}
        <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mt-2 border border-gray-200 bg-white overflow-hidden"
      >
        <iframe
          className="w-full h-96"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1193036294476!2d85.2905526746679!3d23.347691904118623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e167b82e1d37%3A0x6a8cf10389b05501!2sD%20block%20Jaishree%20Green%20City!5e0!3m2!1sbn!2sin!4v1726451576856!5m2!1sbn!2sin"
        ></iframe>
      </motion.section>
    </div>
  );
};

export default ContactUsEl;
