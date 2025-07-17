"use client"

import { motion } from "framer-motion"
import { Lightbulb, ShieldCheck, UserCog } from "lucide-react"

export default function CorePositioningPillars() {
  const pillars = [
    {
      icon: <Lightbulb className="w-7 h-7 text-blue-700" />,
      title: "Problem-Solving Through Real Business Exposure",
      description:
        "Not lectures. Not textbooks. Actual company situations and what worked (or didn’t).",
      bg: "bg-blue-50",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-green-700" />,
      title: "Mistake Reduction as the ROI",
      description:
        "The goal isn’t just learning, but avoiding failures others already paid the price for.",
      bg: "bg-green-50",
    },
    {
      icon: <UserCog className="w-7 h-7 text-cyan-700" />,
      title: "Founder & Leader-Focused",
      description:
        "Designed for decision-makers who want to scale with confidence.",
      bg: "bg-cyan-50",
    },
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Core Positioning Pillars
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {pillars.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-gray-200 shadow-sm ${item.bg}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
