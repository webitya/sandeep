'use client';

import React from 'react';
import Slider from 'react-slick';
import { FormatQuote } from '@mui/icons-material';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Ankur Goyal',
    position: 'Founder, AgSuite Technology',
    testimonial:
      'The screening and on boarding process designed by Sales Syllabus for sales and marketing roles is highly strategic. We observed quick market readiness in new hires, saving us a minimum of 45 days of otherwise unproductive on boarding time.',
  },
  {
    name: 'Brijesh Singh',
    position: 'Founder, Groots Technology, Pune',
    testimonial:
      'With Sales Syllabus, we are able to hire, onboard, and make new team members market-ready within just 30 days — a significant improvement in our hiring efficiency.',
  },
  {
    name: 'Yogesh Pawar',
    position: 'Founder, Digital Edu IT Solutions Pvt. Ltd.',
    testimonial:
      'The entire recruitment process for our sales team was smooth, insightful, and aligned with our succession planning goals. It not only saved us significant costs but also helped in reducing attrition.',
  },
  {
    name: 'Kadir',
    position: 'Founder, Twig Software',
    testimonial:
      'Sales Syllabus brought an exceptional, out-of-the-box, and data-driven approach to team building. Their strategic thinking truly set them apart.',
  },
];

const HomePageTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 w-full">
      <Typography variant="h4" className="text-center font-bold text-gray-800 !mb-10">
        What Our Clients Say
      </Typography>

      <div className="w-full px-4 md:px-12">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="mx-4"
              sx={{
                bgcolor: 'white',
                borderRadius: 4,
                px: 3,
                py: 4,
                border: '1px solid #e5e7eb',
              }}
            >
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <FormatQuote fontSize="large" className="text-blue-700 mb-2" />

                  <Typography
                    variant="body1"
                    className="text-center italic text-gray-700 mb-4"
                  >
                    "{item.testimonial}"
                  </Typography>

                  <Avatar
                    sx={{ bgcolor: '#2b3c73', width: 56, height: 56, mb: 1 }}
                  >
                    {item.name.charAt(0)}
                  </Avatar>

                  <Typography variant="h6" className="text-gray-900">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-500 text-sm"
                  >
                    {item.position}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageTestimonials;
