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
    question: 'What makes Sales Syllabus different from regular recruitment or training agencies?',
    answer:
      'Unlike traditional agencies, we blend recruitment, onboarding, and performance training into one integrated solution — tailored for revenue teams. We don’t just fill roles; we build teams that deliver results.',
  },
  {
    question: 'How fast can we start seeing results?',
    answer:
      'You’ll receive your Culture Mapping Report within 7 days. Candidate shortlists follow in 10–14 days. Onboarding and training can begin in as little as 2–3 weeks.'
  },
  {
    question: 'What roles do you help companies hire?',
    answer:
      'We hire for both sales and marketing — including Sales Heads, BDRs, SDRs, AEs, Sales Managers, Marketing Managers, Digital Marketers, Content Strategists, and more.',
  },
  {
    question: 'What if a candidate doesn’t perform or leaves?',
    answer:
      'We offer a 90-day replacement guarantee if a candidate leaves on their own. For performance mismatches, a replacement is offered within 30 days (as applicable to permanent hires).',
  },
  {
    question: 'Do you only work with startups or also traditional businesses?',
    answer:
      'We work with SaaS startups, manufacturers, B2B service firms, and more. Any company aiming for ₹1 Cr to ₹1,000 Cr in revenue is a fit for us.',
  },
  {
    question: 'Can you help with prospecting and lead generation too?',
    answer:
      'Yes. with our remote marketing services .',
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
