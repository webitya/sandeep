'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUsWhoWeAre = () => {
  return (
    <section id='about-us' className="w-full bg-white py-10 px-4">
      <Box  mx="auto">
        <Typography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" color="textSecondary" lineHeight={1.8}>
          <span className="font-semibold text-blue-600">Sales Syllabus</span> is India’s only{' '}
          <span className="font-semibold text-blue-600">
            Performance-First Sales & Marketing Talent Platform
          </span>
          .
          <br /><br />
          We exist to solve one of the biggest problems in business:{' '}
          <span className="font-semibold">
            How do you build a team that doesn't just work — but performs, grows, and scales revenue predictably?
          </span>
          <br /><br />
          We help organizations from ₹1 Cr to ₹1,000 Cr in revenue hire the right people,
          train them with real-world knowledge, and drive sales and marketing results.
          <br /><br />
          Whether you’re hiring your first sales rep, setting up a national team, or preparing your managers to lead —
          we provide the{' '}
          <span className="font-semibold text-blue-600">talent, tools, and training</span> needed for scalable success.
        </Typography>
      </Box>
    </section>
  );
};

export default AboutUsWhoWeAre;
