"use client";

import { CheckCircle } from '@mui/icons-material';

const A2WhatWeDo = () => {
  const services = [
    {
      title: "Sales & Marketing Hiring",
      points: [
        "Permanent and Temporary",
        "Role-based skill fit",
        "Culture-mapped",
      ],
    },
    {
      title: "ABM & Prospect Nurturing",
      points: [
        "Personalized outreach to engage high-value prospects",
        "Consistent lead generation and sales support",
      ],
    },
    {
      title: "Sales Syllabus Academy",
      points: [
        "Role-specific learning",
        "Skill-gap assessments",
        "Growth readiness for the next role",
      ],
    },
    {
      title: "Monthly Problem-Solving Sprints",
      points: [
        "Tactical guidance for leadership and sales teams",
        "Rapid resolution of business roadblocks",
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            What We Do (in a nutshell)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 text-base">
                    <CheckCircle className="text-blue-500 mr-2 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2WhatWeDo;
