'use client';

import React from 'react';
import { Typography } from '@mui/material';
import ReduceCapacityIcon from '@mui/icons-material/DoNotDisturbOn';
import ConvictionIcon from '@mui/icons-material/ThumbUpAlt';
import LeadsIcon from '@mui/icons-material/TrackChanges';
import { motion } from 'framer-motion';

const outputs = [
  {
    id: 1,
    title: 'Reduce Resource Wastage',
    description:
      'Proactive client communication with high-quality assets builds awareness about your company and its value proposition, improving inside sales productivity by up to 30%.',
    icon: <ReduceCapacityIcon fontSize="large" className="text-red-600" />,
  },
  {
    id: 2,
    title: 'Stronger Buyer Conviction',
    description:
      'Sharing high-quality content—such as case studies, success stories, and ROI-focused communication—helps clients develop a premium perception of your brand.',
    icon: <ConvictionIcon fontSize="large" className="text-blue-600" />,
  },
  {
    id: 3,
    title: 'Intent-Based Lead Generation',
    description:
      'When prospects engage with relevant content, they recognize their own challenges and are more likely to initiate discussions.',
    icon: <LeadsIcon fontSize="large" className="text-green-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const StoryTellingExpectedOutput = () => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Typography variant="h4" className="text-center font-bold text-gray-900 !mb-8">
          Expected Output
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outputs.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <Typography variant="h6" className="text-gray-800 font-semibold mb-2">
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {item.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTellingExpectedOutput;
