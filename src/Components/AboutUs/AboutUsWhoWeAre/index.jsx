'use client';

import React, { lazy, Suspense } from 'react';
import { CircularProgress, Card, Box, Typography, Paper } from '@mui/material';

const ApexChart = lazy(() => import('react-apexcharts'));

const chartOptions = {
  chart: { type: 'area', background: 'transparent' },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.8,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: { style: { colors: '#4A4A4A', fontSize: '12px' } },
  },
  yaxis: { labels: { style: { colors: '#4A4A4A', fontSize: '12px' } } },
  title: {
    text: 'Growth Over Time',
    align: 'center',
    style: { fontSize: '14px', color: '#4A4A4A', fontWeight: 'bold' },
  },
  colors: ['#93c5fd', '#38bdf8'],
  tooltip: { theme: 'light', x: { show: true } },
};

const chartSeries = [{ name: 'Growth Potential', data: [10, 20, 30, 40, 50, 60, 70] }];

const AboutUsWhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-6">
      <Box sx={{  mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'stretch' }}>
          
          {/* Left Side Text Content */}
          <Box sx={{ flex: 1 }}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: 'white', height: '100%' }}>
              <Typography variant="h3" fontWeight="extrabold" color="textPrimary" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                <span className="font-semibold text-blue-600">Sales Syllabus</span> is India’s only <span className="font-semibold text-blue-600">Performance-First Sales & Marketing Talent Platform</span>.
                <br /><br />
                We exist to solve one of the biggest problems in business: <span className="font-semibold">How do you build a team that doesn't just work — but performs, grows, and scales revenue predictably?</span>
                <br /><br />
                We help organizations from ₹1 Cr to ₹1,000 Cr in revenue hire the right people, train them with real-world knowledge, and drive sales and marketing results.
                <br /><br />
                Whether you’re hiring your first sales rep, setting up a national team, or preparing your managers to lead — we provide the <span className="font-semibold text-blue-600">talent, tools, and training</span> needed for scalable success.
              </Typography>
            </Paper>
          </Box>

          {/* Right Side Chart Content */}
          <Box sx={{ flex: 1 }}>
            <Card elevation={8} sx={{ borderRadius: 2, boxShadow: 12, overflow: 'hidden', height: '100%' }}>
              <Suspense fallback={<div className="flex justify-center items-center h-64"><CircularProgress size="large" /></div>}>
                <ApexChart options={chartOptions} series={chartSeries} type="area" height={300} width="100%" />
              </Suspense>
            </Card>
          </Box>

        </Box>
      </Box>
    </section>
  );
};

export default AboutUsWhoWeAre;
