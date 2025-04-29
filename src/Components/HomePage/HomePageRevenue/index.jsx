'use client';
import React from "react";
import {
  BarChartOutlined,
  StackedBarChartOutlined,
  GroupsOutlined,
  PersonAddAltOutlined,
} from "@mui/icons-material";

const steps = [
  {
    title: "Culture Mapping",
    description:
      "We attend 1–2 performance review meetings to understand your sales & marketing culture, leadership style, and team dynamics.",
    icon: <BarChartOutlined fontSize="large" className="text-white" />,
  },
  {
    title: "Revenue Goal Mapping",
    description:
      "We align your revenue goals with the effort and skillsets required to achieve them — no guesswork.",
    icon: <StackedBarChartOutlined fontSize="large" className="text-white" />,
  },
  {
    title: "Strategic Workforce Planning",
    description:
      "We guide your hiring plan, defining the right mix of permanent and temporary talent, aligned with your budget and succession strategy.",
    icon: <GroupsOutlined fontSize="large" className="text-white" />,
  },
  {
    title: "Talent Sourcing & Onboarding",
    description:
      "We find and onboard sales & marketing professionals — from full-time hires to specialist consultants — to plug skill gaps and accelerate growth.",
    icon: <PersonAddAltOutlined fontSize="large" className="text-white" />,
  },
];

const RevenueTeamFramework = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 leading-snug">
          Our Proven Framework
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          How we build high-performing revenue teams across industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1"
            >
              {/* Animated Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-105 z-0" />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md">
                  {step.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueTeamFramework;
