'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {
  AccessTime,
  EmojiEvents,
  TrendingUp,
  CheckCircle,
  Settings,
} from '@mui/icons-material';

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
        className="text-center font-bold text-[#4C6DC7] mb-12"
      >
        Our Journey
      </Typography>

      <div className="relative border-l-4 border-[#4C6DC7] pl-6 space-y-10">
        {timelineData.map((step, index) => (
          <div key={index} className="relative">
            {/* Icon Circle */}
            <div className="absolute -left-8 top-1">
              <div className="bg-white p-2 rounded-full shadow-md">
                {step.icon}
              </div>
            </div>

            {/* Step Card */}
            <Paper elevation={3} className="p-5 rounded-lg">
              <Typography variant="h6" className="text-[#6200EA]">
                {step.year}
              </Typography>
              <Typography variant="subtitle1" className="font-medium">
                {step.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-1">
                {step.description}
              </Typography>
            </Paper>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default TimelineComponent;
