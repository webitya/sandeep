"use client"

import { motion } from "framer-motion"
import { FileBarChart2, Users2, TrendingUp } from "lucide-react"

export default function HomeHowWeHelp() {
  const points = [
    {
      icon: <FileBarChart2 className="w-7 h-7 text-blue-700" />,
      title: "Real Business Cases",
      description:
        "Actual decisions, pivots, and campaign breakdowns across industries and company sizes.",
      bg: "bg-white/30",
    },
    {
      icon: <Users2 className="w-7 h-7 text-indigo-700" />,
      title: "Role-Specific Learning",
      description:
        "Whether you're a founder, sales head, or marketing lead — learn what matters to your decisions.",
      bg: "bg-white/30",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-green-700" />,
      title: "Fewer Mistakes, Faster Growth",
      description:
        "Leverage others’ experience to avoid repeating common scaling, hiring, and execution errors.",
      bg: "bg-white/30",
    },
  ]

  return (
    <section className="w-full relative py-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            We Turn Business Experience into Your Learning Advantage
          </h2>
        </motion.div>

        {/* 3 Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {points.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-blue-100 shadow-md ${item.bg} backdrop-blur-md`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
