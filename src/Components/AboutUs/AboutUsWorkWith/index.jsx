'use client';

import React from 'react';
import { Groups } from '@mui/icons-material'; // Optional: Replace with another icon if needed

const AboutUsWhoWeWorkWith = () => {
  const partners = [
    {
      title: "SME Founders (₹3 Cr–₹100 Cr revenue range)",
      description: "We work closely with SME founders, guiding them to scale and build high-performing teams.",
    },
    {
      title: "Sales & Marketing Leaders",
      description: "Helping leaders who are building high-output sales and marketing teams to drive measurable results.",
    },
    {
      title: "HR Leaders",
      description: "HR leaders investing in performance-based hiring to ensure long-term growth and stability.",
    },
    {
      title: "Early-stage to Scaling Startups",
      description: "We partner with early-stage startups to scaling businesses, focusing on structured and sustainable growth.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We collaborate with forward-thinking organizations and leaders dedicated to performance-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 border-l-4 border-sky-400 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-6 h-full flex flex-col justify-between"
            >
              {/* Optional Icon */}
              {/* <Groups className="text-sky-500 text-4xl mb-4" /> */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {partner.title}
              </h3>
              <p className="text-gray-700">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhoWeWorkWith;
