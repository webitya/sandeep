'use client'

import { motion } from "framer-motion"
import { BookOpen, BarChart3, Trophy } from "lucide-react"

export default function AboutDifference() {
  const differences = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Real Problems, Real Solutions",
      description: "Every case study comes from the field—not from textbooks.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: "Market-Backed Curriculum",
      description: "We research across industries to pinpoint what truly drives revenue—and teach only those strategies.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-blue-600" />,
      title: "Outcome-Led Learning",
      description: "Whether you're preparing for HOD roles or top-tier leadership, our sprints give you clarity and confidence.",
    },
  ]

  return (
    <section className="relative py-16 px-4 bg-gradient-to-tr from-[#f5f7fa] to-[#e8edf5] overflow-hidden">
      {/* Subtle radial glow for soft business mood */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-[#f0f4f8] to-[#dce3ed]" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-gray-900">What Makes Us Different</h2>
        </motion.div>

        {/* Glass Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-2">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Panel */}
        {/* <motion.div
          className="backdrop-blur-xl bg-gray-900/80 text-white rounded-2xl px-8 py-12 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl mb-4">We're not here to create students.</p>
          <p className="text-2xl font-semibold mb-4">
            We're here to develop leaders who think, act, and deliver like CXOs.
          </p>
          <p className="text-lg text-gray-300">
            Welcome to Sales Syllabus Academy—where consulting meets capability-building.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}
