"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutConsulting() {
  const achievements = [
    "Re-engineered sales engines for high-growth companies",
    "Transformed underperforming marketing teams into revenue drivers",
    "Advised leadership on scaling teams, building GTM strategies, and driving profitability",
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Consulting DNA</h2>
            <p className="text-xl text-gray-700 mb-8">Before we built this Academy, we built outcomes.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">We've:</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{achievement}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-lg text-blue-800 font-medium text-center">
                This frontline experience powers every single learning module, making our programs far more actionable
                than academic models.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
