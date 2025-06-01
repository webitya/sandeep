'use client'

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutConsulting() {
  const achievements = [
    "Re-engineered sales engines for high-growth companies",
    "Transformed underperforming marketing teams into revenue drivers",
    "Advised leadership on scaling teams, building GTM strategies, and driving profitability",
  ]

  return (
    <section className="relative py-24 px-4 bg-[#F5F7FA] text-gray-800 overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-10 bg-center bg-cover" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-gray-900 mb-4">Our Consulting DNA</h2>
          <p className="text-xl text-gray-600 mb-8">
            Before we built this Academy, we built outcomes.
          </p>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <p className="text-lg text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Sets Us Apart</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            This <span className="font-medium text-blue-700">frontline experience</span> powers every single learning module,
            making our programs far more <span className="font-medium text-blue-700">actionable</span> than academic models.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
