"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  UserPlus,
  Award,
  Settings,
  Building,
} from "lucide-react";

export default function RevenuePilotDeliverables() {
  const deliverables = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      text: "Foster a high-growth sales culture with strategic alignment",
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      text: "Develop a robust marketing engine: lead generation, branding & outreach",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      text: "Engineer efficient, scalable sales processes – from prospect to close",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      text: "Establish performance metrics and real-time tracking systems",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-green-600" />,
      text: "Strategically recruit and manage top-tier sales & marketing talent",
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      text: "Co-own revenue targets in direct partnership with leadership",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "Define growth milestones and operational scaling roadmaps",
    },
    {
      icon: <Building className="w-6 h-6 text-green-600" />,
      text: "Establish second-line leadership to free up founder focus",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className=" mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Your Sales Head Will Deliver
            </h2>
            <p className="text-lg text-gray-600">
              Our trained leaders drive structured growth, align teams, and engineer sustainable performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white shadow-sm rounded-xl p-5 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <p className="ml-4 text-base text-gray-800 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

     
        </motion.div>
      </div>
    </section>
  );
}
