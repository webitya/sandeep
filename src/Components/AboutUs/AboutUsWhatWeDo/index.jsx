'use client';
import { motion } from 'framer-motion';
import { Groups, Campaign, School } from '@mui/icons-material';

export default function WhatWeDo() {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          At Sales Syllabus, we help companies unlock sustainable growth by building high-performance sales and marketing ecosystems. Our services are designed around three core pillars:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Groups fontSize="large" className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Build Sales & Marketing Teams That Deliver
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We don’t just recruit — we design, hire, and enable sales and marketing teams aligned with your business goals. From revenue-mapped workforce planning to onboarding and performance systems, we help you build teams that perform.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Campaign fontSize="large" className="text-green-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Tell Your Sales Story to Win Customers
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
             Hire a Remote Marketing Team That Delivers from Day One
We help organizations hire high-performing remote marketing teams specialized in lead generation and brand building. Every team we provide is well-trained, strategically aligned, and productive from day one—so you can accelerate growth without the hassle of micromanagement
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <School fontSize="large" className="text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Upskill Leaders Through Sales Syllabus Academy
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our leadership learning platform empowers sales and marketing professionals with real-world case studies, frameworks, and monthly problem-solving content. It’s where tomorrow’s leaders learn to drive results today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
