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
    icon: <BusinessCenter fontSize="large" className="text-white" />,
  },
  {
    title: 'Temporary Consultants',
    details: [
      'Short-term or project-based professionals',
      'Ideal for specialized skills and agile teams',
      'Sales strategists, campaign managers, marketing experts',
    ],
    icon: <WorkOutline fontSize="large" className="text-white" />,
  },
];

const HomePageTypesOfHiring = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Soft floating gradient bubbles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400/10 rounded-full blur-2xl"
            style={{
              width: `${20 + i * 6}px`,
              height: `${20 + i * 6}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 tracking-tight"
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
                  bgcolor: 'rgba(30,41,59,0.85)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '1rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" gap={2} alignItems="flex-start">
                    <div className="bg-blue-600 p-3 rounded-full shadow-md">{type.icon}</div>
                    <Box>
                      <Typography variant="h6" className="text-white font-semibold mb-3">
                        {type.title}
                      </Typography>
                      <ul className="space-y-2 text-blue-100 text-sm">
                        {type.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✔</span>
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
