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
    <section className="relative py-24 bg-gradient-to-r from-white via-[#f8fbfc] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl  text-gray-900 mb-4 tracking-tight">
              100% Success Guarantee
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don’t stop at hiring — we drive outcomes.
            </p>
          </div>

          <div className="space-y-10">
            {guaranteeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mt-1">{feature.icon}</div>
                <p className="text-lg text-gray-800">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8 text-center">
            <p className="text-xl font-semibold text-gray-900">
              No guesswork. No trial-and-error. Just results.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              *Terms apply for replacement conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
