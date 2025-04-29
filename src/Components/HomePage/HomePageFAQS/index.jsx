'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
  {
    question: 'What makes Sales Syllabus different from a recruitment agency?',
    answer:
      'We don’t just fill positions — we build performing revenue teams using strategic insights, training, and culture alignment.',
  },
  {
    question: 'How fast can we start seeing results?',
    answer:
      'You receive your Culture Mapping Report within 7 days. Candidate shortlists begin in week two.',
  },
  {
    question: 'What roles can you help us hire?',
    answer:
      'Sales Heads, Business Heads, Sales Managers, BDRs, Marketing Strategists, Performance Marketers, Digital Campaign Managers, and more.',
  },
  {
    question: 'What happens if a hire doesn’t work out?',
    answer:
      'We offer a 90-day replacement if the candidate leaves on their own.',
  },
  {
    question: 'Do you also help with ongoing prospecting and outreach?',
    answer:
      'Yes. Our ABM support team helps you identify, engage, and nurture B2B prospects through manual, personalized email outreach. This allows your sales team to focus on converting — not chasing.',
  },
];

const HomeFAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const handleChange = (index) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  return (
    <div className="py-16 px-6 bg-white text-gray-800">
      <Typography variant="h4" align="center" className="font-bold mb-12">
        Frequently Asked Questions
      </Typography>

      <Box className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={() => handleChange(index)}
            className="bg-gray-50 rounded-lg shadow-sm"
            sx={{ borderBottom: '1px solid #e5e7eb' }}
          >
            <AccordionSummary
              expandIcon={
                expandedIndex === index ? (
                  <RemoveIcon className="text-blue-600" />
                ) : (
                  <AddIcon className="text-blue-600" />
                )
              }
            >
              <Typography variant="subtitle1" className="font-medium">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-600">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default HomeFAQSection;
