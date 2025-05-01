'use client';
import { motion } from 'framer-motion';
import { BusinessCenter, WorkOutline } from '@mui/icons-material';
import { Card, CardContent, Typography, Box } from '@mui/material';

const hiringTypes = [
  {
    title: 'Permanent Hires',
    details: [
      'Full-time employees on your payroll',
      'Aligned with your long-term business goals',
      'Screened and performance-evaluated candidates',
    ],
    icon: <BusinessCenter fontSize="large" className="text-sky-600" />,
  },
  {
    title: 'Temporary Consultants',
    details: [
      'Short-term or project-based professionals',
      'Ideal for specialized skills and agile teams',
      'Sales strategists, campaign managers, marketing experts',
    ],
    icon: <WorkOutline fontSize="large" className="text-sky-600" />,
  },
];

const HomePageTypesOfHiring = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-sky-50 text-gray-900 overflow-hidden">
      {/* Soft floating pastel bubbles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-300/20 rounded-full blur-3xl"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 16 + i,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 leading-snug"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Types of Hiring We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hiringTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card
                sx={{
                  bgcolor: '#ffffffcc',
                  borderRadius: '1rem',
                  border: '1px solid #e0e7ff',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    boxShadow: '0 14px 35px rgba(0,0,0,0.08)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" gap={2} alignItems="flex-start">
                    <div className="bg-sky-100 p-3 rounded-full shadow">
                      {type.icon}
                    </div>
                    <Box>
                      <Typography variant="h6" className="text-gray-800 font-semibold mb-3">
                        {type.title}
                      </Typography>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {type.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✔</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageTypesOfHiring;
