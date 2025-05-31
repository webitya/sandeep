"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp, Users, Target } from "lucide-react"

export default function RevenuePilotAudience() {
  const audiences = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      text: "SMEs planning to cross ₹5–200 Cr in revenue",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      text: "Founders who've outgrown founder-led sales",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Companies struggling with low-performance sales hires",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      text: "Businesses looking for second-line leaders to scale operations",
    },
  ]

  const offerings = [
    "1-on-1 support to define your hiring goals",
    "Curated pool of trained sales leadership candidates",
    "Structured pre-hiring interaction and role readiness",
    "Onboarding support + 9-month success journey",
    "Peace of mind with guaranteed results",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🧭 Who Should Use RevenuePilot?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {audience.icon}
                <p className="ml-4 text-gray-700">{audience.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">📝 What You Get</h3>
            <div className="space-y-3">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{offering}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
