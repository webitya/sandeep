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
    icon: <AccessTime className="text-[#4C6DC7]" sx={{ fontSize: 30 }} />,
  },
  {
    year: '2018',
    title: 'Developed Proven Process',
    description: 'Expanded to serve 50+ clients.',
    icon: <EmojiEvents className="text-[#E6377A]" sx={{ fontSize: 30 }} />,
  },
  {
    year: '2020',
    title: 'Shifted Focus to Specialized Consulting',
    description: 'Focused on sales and marketing consulting.',
    icon: <TrendingUp className="text-[#802A98]" sx={{ fontSize: 30 }} />,
  },
  {
    year: '2021',
    title: 'Created Core Syllabus and Systems',
    description:
      'Developed Sales Performance Management Systems and a Marketing Success Framework, tested across 25 companies.',
    icon: <CheckCircle className="text-[#28A745]" sx={{ fontSize: 30 }} />,
  },
  {
    year: '2024',
    title: 'Validated Solutions Across Companies',
    description:
      'Validated our frameworks across 100+ companies solving real business challenges.',
    icon: <Settings className="text-[#FF9800]" sx={{ fontSize: 30 }} />,
  },
];

const TimelineComponent = () => {
  return (
    <Box className="max-w-5xl mx-auto px-4 md:px-4 py-8 md:py-10">
      <Typography
        variant="h4"
        className="text-center font-bold text-[#4C6DC7] !mb-6"
      >
        Our Journey
      </Typography>

      <div className="relative border-l-4 border-[#4C6DC7] pl-4 space-y-6">
        {timelineData.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Icon Circle */}
            <motion.div
              className="absolute -left-6 top-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div className="bg-white p-1 rounded-full shadow-md">
                {step.icon}
              </div>
            </motion.div>

            {/* Step Card */}
            <Paper
              elevation={2}
              className="p-3 rounded-md transition-transform hover:scale-[1.02] hover:shadow-md"
            >
              <Typography variant="subtitle2" className="text-[#6200EA] font-semibold">
                {step.year}
              </Typography>
              <Typography variant="body1" className="font-medium text-[#333] leading-snug">
                {step.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
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
