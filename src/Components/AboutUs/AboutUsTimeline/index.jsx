'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { AccessTime, EmojiEvents, TrendingUp, CheckCircle, Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2017',
    title: 'Launched as a Business Consulting Company',
    description: 'Serving 5 clients.',
    icon: <AccessTime className="text-[#4C6DC7] text-4xl" />,
  },
  {
    year: '2018',
    title: 'Developed Proven Process',
    description: 'Expanded to serve 50+ clients.',
    icon: <EmojiEvents className="text-[#E6377A] text-4xl" />,
  },
  {
    year: '2020',
    title: 'Shifted Focus to Specialized Consulting',
    description: 'Focused on sales and marketing consulting.',
    icon: <TrendingUp className="text-[#802A98] text-4xl" />,
  },
  {
    year: '2021',
    title: 'Created Core Syllabus and Systems',
    description:
      'Developed Sales Performance Management Systems and a Marketing Success Framework, tested across 25 companies.',
    icon: <CheckCircle className="text-[#28A745] text-4xl" />,
  },
  {
    year: '2024',
    title: 'Validated Solutions Across Companies',
    description:
      'Validated our frameworks across 100+ companies solving real business challenges.',
    icon: <Settings className="text-[#FF9800] text-4xl" />,
  },
];

const TimelineComponent = () => {
  return (
    <Box className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <Typography
        variant="h4"
        className="text-center font-extrabold text-[#4C6DC7] mb-12"
      >
        Our Journey
      </Typography>

      <div className="relative border-l-4 border-[#4C6DC7] pl-6 space-y-12">
        {timelineData.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Icon Circle */}
            <motion.div
              className="absolute -left-8 top-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </motion.div>

            {/* Step Card */}
            <Paper
              elevation={3}
              className="p-5 rounded-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <Typography variant="h6" className="text-[#6200EA] font-bold">
                {step.year}
              </Typography>
              <Typography variant="subtitle1" className="font-medium text-[#333]">
                {step.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-1">
                {step.description}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </div>
    </Box>
  );
};

export default TimelineComponent;
