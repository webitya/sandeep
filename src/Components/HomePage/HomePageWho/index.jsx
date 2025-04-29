'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography, Box, Container } from '@mui/material';

const HomePageWho = () => {
  return (
    <div className="relative py-20 text-gray-900 overflow-hidden bg-gradient-to-br from-[#f3f9ff] via-[#eaf7ff] to-[#fdfcfe]">
      {/* Animated Gradient Overlay (subtle) */}
      <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-r from-transparent via-[#f0f9ff]/40 to-transparent z-0" />

      <Container maxWidth="lg" className="relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <Box className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" component="h2" className="font-bold mb-4">
              Who We Are
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Typography variant="body1" className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              At <strong>Sales Syllabus</strong>, we go beyond traditional hiring. We are your growth
              partner — combining sales expertise, hiring strategy, and training into one powerful
              solution for building high-performance sales teams.
            </Typography>
          </motion.div>
        </Box>

        {/* Image Section */}
        <Box className="lg:w-1/2 flex justify-center">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.4, delay: 0.4 }}
    className="w-[300px] h-[300px] rounded-lg shadow-xl overflow-hidden"
  >
    <Image
      src="/homeab2.png"
      alt="Sales Expertise"
      width={300}
      height={300}
      className="w-full h-full object-cover rounded-lg"
      priority
    />
  </motion.div>
</Box>

      </Container>
    </div>
  );
};

export default HomePageWho;
