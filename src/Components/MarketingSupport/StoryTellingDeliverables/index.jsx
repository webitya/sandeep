'use client';

import React from 'react';
import { Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import { motion } from 'framer-motion';

const deliverables = [
  {
    id: 1,
    title: 'Deal-winning content',
    description: 'ROI slides, case studies, differentiation decks, and more crafted to close deals.',
    icon: <AssignmentIcon fontSize="large" className="text-blue-600" />,
  },
  {
    id: 2,
    title: 'Strategic messaging',
    description: 'Narratives aligned with every stage of your sales pipeline.',
    icon: <BarChartIcon fontSize="large" className="text-green-600" />,
  },
  {
    id: 3,
    title: 'Persona-specific content',
    description: 'Tailored material that speaks directly to your buyer personas.',
    icon: <PersonIcon fontSize="large" className="text-purple-600" />,
  },
  {
    id: 4,
    title: 'Leadership POV & Best Practices',
    description: 'Positioning backed by market insight and industry experience.',
    icon: <InsightsIcon fontSize="large" className="text-yellow-600" />,
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

const StoryTellingDeliverables = () => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Typography variant="h4" className="text-gray-900 font-bold text-center mb-6">
          Deliverables
        </Typography>

        <Typography variant="body1" className="text-center text-gray-600  mx-auto !my-5">
          We partner with your sales team to influence buyer decisions through strategic, narrative-based communication.
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <Typography variant="h6" className="font-semibold text-gray-800 mb-2">
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

export default StoryTellingDeliverables;
