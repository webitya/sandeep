'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function HomePageHeroSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-50 flex justify-center items-center via-white to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
            Accelerate Your Sales & Marketing Growth
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            India’s #1 Talent Platform for High-Performance Revenue Teams. We <strong>recruit</strong>, <strong>train</strong>, and <strong>grow</strong> your team to scale from 
            <span className="text-blue-700 font-semibold"> ₹1 Cr</span> to 
            <span className="text-blue-700 font-semibold"> ₹1,000 Cr</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact-us" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition">
              <RocketLaunchIcon fontSize="small" />
              GET STARTED
            </a>
            <a href="/about-us" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              LEARN MORE
            </a>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
      <form
  ref={form}
  onSubmit={sendEmail}
  className="bg-white/70 backdrop-blur-md border border-blue-100 p-5 rounded-2xl shadow-lg"
>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Inquiry</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="relative">
      <input
        name="name"
        required
        placeholder=" "
        className="peer w-full border border-gray-300 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="absolute text-gray-500 text-sm left-3 top-2.5 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        Name *
      </label>
    </div>
    <div className="relative">
      <input
        name="email"
        type="email"
        required
        placeholder=" "
        className="peer w-full border border-gray-300 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="absolute text-gray-500 text-sm left-3 top-2.5 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        Email *
      </label>
    </div>
    <div className="relative sm:col-span-2">
      <input
        name="phone"
        type="tel"
        required
        placeholder=" "
        className="peer w-full border border-gray-300 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="absolute text-gray-500 text-sm left-3 top-2.5 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        Phone *
      </label>
    </div>
    <div className="relative sm:col-span-2">
      <textarea
        name="message"
        rows="3"
        required
        placeholder=" "
        className="peer w-full border border-gray-300 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="absolute text-gray-500 text-sm left-3 top-2.5 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        Message *
      </label>
    </div>
  </div>
  <button
    type="submit"
    className="mt-5 w-full bg-blue-600 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-700 transition"
  >
    SUBMIT
  </button>
</form>

        </motion.div>
      </div>
    </div>
  );
}
