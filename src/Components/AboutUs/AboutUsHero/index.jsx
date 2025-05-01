'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AboutUsHeroSection = () => {
  return (
    <section className="w-full md:py-24 py-16 relative" style={{ backgroundColor: "#007B82" }}>
      
      {/* Background Decorative Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?sales,marketing,teamwork')"
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between h-full">

        {/* Left Side - Text and CTA */}
        <div className="md:w-1/2 text-left md:pr-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Helping Organizations Build Sales & Marketing Teams That Perform, Scale & Deliver Growth
          </h1>
          
          <p className="text-lg md:text-xl text-white opacity-90 mb-6">
            We help businesses hire the right people, train them with real-world insights, and empower them with strategies to drive scalable, predictable revenue growth.
          </p>

          <Link href="/services" target="_blank">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                borderRadius: '9999px',
                background: 'linear-gradient(to right, #3B82F6, #6366F1, #8B5CF6)',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 3,
                '&:hover': {
                  background: 'linear-gradient(to right, #2563EB, #10B981)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Explore Our Solutions
            </Button>
          </Link>
        </div>

        {/* Right Side - Feature Cards */}
        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Feature 1 */}
          <Card
            sx={{
              backgroundColor: '#1C54BC',
              color: 'white',
              borderRadius: '1rem',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            elevation={8}
          >
            <CardContent>
              <div className="flex items-center mb-3">
                <BarChartIcon className="text-4xl text-white mr-4 animate-pulse" />
                <Typography variant="h6" component="h3" fontWeight="600">
                  Data-Driven Mindset
                </Typography>
              </div>
              <Typography variant="body2" className="text-gray-200">
                Infusing real-world data intelligence into your sales and marketing management for predictable results.
              </Typography>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card
            sx={{
              backgroundColor: '#F49464',
              color: 'white',
              borderRadius: '1rem',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            elevation={8}
          >
            <CardContent>
              <div className="flex items-center mb-3">
                <StarIcon className="text-4xl text-white mr-4 animate-pulse" />
                <Typography variant="h6" component="h3" fontWeight="600">
                  Hands-On Expertise
                </Typography>
              </div>
              <Typography variant="body2" className="text-gray-200">
                Our seasoned experts guide your teams with practical strategies tailored for sustainable scaling.
              </Typography>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
