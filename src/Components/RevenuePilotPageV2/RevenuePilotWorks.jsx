"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, Users, Target } from "lucide-react";

export default function WhyRevenuePilotWorks() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "SME-Focused Training",
      description: "Talent trained for SME-specific challenges to ensure contextual, on-ground readiness.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "300+ Business Case Studies",
      description: "Built on real scenarios to instill decision-making and execution confidence.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Expert Mentorship",
      description: "Guided by seasoned sales & marketing consultants with proven frameworks.",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Outcome Alignment",
      description: "Customized to your revenue goals, people culture, and strategic roadmap.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#edf3f8] via-[#f6f9fc] to-[#e6ecf0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            🔍 Why RevenuePilot Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
