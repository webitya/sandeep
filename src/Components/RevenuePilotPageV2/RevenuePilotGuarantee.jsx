"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Target, RefreshCw } from "lucide-react";

export default function RevenuePilotGuarantee() {
  const guaranteeFeatures = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      text: "12-month leadership development (role-specific, ROI-focused)",
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      text: "Strategic mentorship",
    },
    {
      icon: <Target className="w-5 h-5 text-green-600" />,
      text: "Conflict resolution",
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      text: "Team alignment",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-green-600" />,
      text: "Free replacement if required*",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#f7fafd] to-[#eaf3fc] backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl  text-gray-900 tracking-tight">
            100% Success Guarantee
          </h2>
          <p className="text-base md:text-lg text-gray-700 mt-1">
            We don’t stop at hiring — we drive outcomes.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {guaranteeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="mt-1">{feature.icon}</div>
              <p className="text-sm md:text-base text-gray-800 leading-snug">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg font-medium text-gray-900">
            No guesswork. No trial-and-error. Just results.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">
            *Terms apply for replacement conditions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
