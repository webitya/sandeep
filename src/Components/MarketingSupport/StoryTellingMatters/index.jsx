'use client';

import React from 'react';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    text: 'Poor articulation = Lost deals, longer cycles, and lower conviction',
    icon: <CheckCircleIcon fontSize="large" className="text-blue-600" />,
  },
  {
    id: 2,
    text: 'Competitors win not because they’re better — because they’re clearer',
    icon: <CheckCircleIcon fontSize="large" className="text-green-600" />,
  },
  {
    id: 3,
    text: 'Prospects don’t buy what they don’t fully understand',
    icon: <CheckCircleIcon fontSize="large" className="text-purple-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const StoryTellingWhyMatters = () => {
  return (
    <section className="w-full bg-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <Typography variant="h4" className="text-gray-900 font-bold text-center !mb-8">
          Why This Matters
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <Typography variant="body1" className="text-gray-700 text-center">
                {item.text}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTellingWhyMatters;
