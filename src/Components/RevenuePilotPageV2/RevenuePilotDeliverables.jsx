"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Users, BarChart3, UserPlus, Award, Settings, Building } from "lucide-react"

export default function RevenuePilotDeliverables() {
  const deliverables = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      text: "Drive Aggressive Growth Culture across sales and marketing",
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      text: "Build Your Marketing Engine – lead generation, branding, and outreach",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      text: "Design High-Performance Sales Processes – from lead to closure",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      text: "Implement Performance Tracking for real-time team optimization",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-green-600" />,
      text: "Recruit and Manage Sales & Marketing Teams with strategic clarity",
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      text: "Own Revenue Targets alongside the founder",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "Set Milestones and Scale Operations for the next stage of growth",
    },
    {
      icon: <Building className="w-6 h-6 text-green-600" />,
      text: "Establish Second-Line Management, allowing founders to focus on strategic direction",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🎯 What Your Sales Head Will Deliver</h2>
            <p className="text-lg text-gray-700">
              Our sales leaders come equipped to transform your growth engine from the ground up:
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.icon}
                  <p className="ml-3 text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-green-100 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg font-bold text-green-800">
                📈 From vision to execution, your Sales Head becomes your #2 in growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
