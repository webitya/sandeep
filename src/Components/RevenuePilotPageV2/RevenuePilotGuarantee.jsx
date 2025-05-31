"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target, RefreshCw } from "lucide-react"

export default function RevenuePilotGuarantee() {
  const guaranteeFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      text: "12-month leadership development (role-specific, ROI-focused)",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "Strategic mentorship",
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      text: "Conflict resolution",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "Team alignment",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      text: "Free replacement if required*",
    },
  ]

  const whyItWorks = [
    "Talent trained for SME-specific challenges",
    "Powered by 300+ real business case studies",
    "Mentored by sales and marketing consultants",
    "Aligned to your revenue goals and team culture",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🛡️ 100% Success Guarantee</h2>
            <p className="text-lg text-gray-700">We don't stop at hiring—we guarantee success.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg border border-green-200 mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">Every RevenuePilot engagement includes:</h3>

            <div className="space-y-4 mb-6">
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {feature.icon}
                  <p className="ml-3 text-gray-700">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-center font-bold text-lg">No guesswork. No trial-and-error. Just results.</p>
              <p className="text-center text-sm text-gray-600 mt-2">*Terms apply for replacement conditions.</p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">🔍 Why RevenuePilot Works</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {whyItWorks.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
