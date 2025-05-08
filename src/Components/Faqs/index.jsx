'use client';

import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqData = [
  {
    key: '1',
    question: 'What services does SalesSyllabus offer?',
    answer: `We provide revenue generation consulting, pre-trained sales and marketing professionals, and specialized courses tailored for all levels of the sales and marketing hierarchy.`,
  },
  {
    key: '2',
    question: 'How do you build a sales and marketing strategy under revenue generation consulting?',
    answer: (
      <ol className="list-decimal list-inside space-y-1 text-base">
        <li>Perform data analysis to identify gaps and opportunities for improvement</li>
        <li>Align revenue goals with customer fit, pricing, and value proposition</li>
        <li>Monitor key performance metrics continuously</li>
        <li>Understand prospect intent across digital/traditional channels</li>
        <li>Build a data-driven sales funnel</li>
        <li>Deliver the right message at the right time</li>
        <li>
          Strengthen sales capabilities:
          <ul className="list-disc ml-6 mt-1">
            <li>Recruit & onboard the sales team</li>
            <li>Develop performance management systems</li>
            <li>Provide real-time support for work-related queries</li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    key: '3',
    question: 'Can you help improve my sales team’s performance?',
    answer: `Yes, our KPI-driven framework and regular feedback ensure continuous performance improvements.`,
  },
  {
    key: '4',
    question: 'What support does your Sales Support Desk provide?',
    answer: `Ongoing training, mentorship, and real-time troubleshooting to ensure team productivity and motivation.`,
  },
  {
    key: '5',
    question: 'How do I get started with SalesSyllabus?',
    answer: `Contact us for a free consultation. We’ll assess your sales processes and propose tailored solutions.`,
  },
  {
    key: '6',
    question: 'Do you offer custom solutions for unique business needs?',
    answer: `Absolutely. Our approach is always customized to your specific challenges and goals.`,
  },
  {
    key: '7',
    question: 'What is your pricing model?',
    answer: `Our pricing is customized based on project scope and business needs. Reach out for a detailed quote.`,
  },
  {
    key: '8',
    question: 'How can I track the progress of my sales team?',
    answer: `We provide regular performance reports and analytics for ongoing visibility and improvement.`,
  },
  {
    key: '9',
    question: 'Do you help in lead generation?',
    answer: `Yes, we offer proven lead generation strategies.`,
  },
  {
    key: '10',
    question: 'Do you help in sales closures?',
    answer: `Yes, we assist in optimizing and closing high-intent leads.`,
  },
];

const FAQPageEl = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white text-center pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 py-6"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-gray-600">
            Clarity on our consulting, training, and sales support solutions.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {faqData.map(({ key, question, answer }, index) => (
            <div key={key} className="bg-gray-50 rounded-md shadow-sm mb-4 overflow-hidden">
              <Accordion disableGutters elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-blue-700" />}
                  className="px-4 py-3"
                >
                  <HelpOutlineIcon className="text-blue-700 mr-2" />
                  <Typography className="font-medium text-gray-800 text-base">
                    {question}
                  </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className="px-4 pb-4 pt-2">
                  <Typography className="text-gray-700 text-sm leading-relaxed">
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default FAQPageEl;
