"use client"

import { motion } from "framer-motion"
import { BookOpen, BarChart3, Trophy } from "lucide-react"

export default function AboutDifference() {
  const differences = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Real Problems, Real Solutions",
      description: "Every case study comes from the field—not from textbooks.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Market-Backed Curriculum",
      description:
        "We research across industries to pinpoint what truly drives revenue—and teach only those strategies.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Outcome-Led Learning",
      description:
        "Whether you're preparing for HOD roles or top-tier corporate leadership, our sprints give you clarity, confidence, and career velocity.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes Us Different</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gray-900 text-white p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl mb-4">We're not here to create students.</p>
          <p className="text-2xl font-bold mb-6">
            We're here to develop leaders who think, act, and deliver like CXOs.
          </p>
          <p className="text-lg text-gray-300">
            Welcome to Sales Syllabus Academy—where consulting meets capability-building.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
