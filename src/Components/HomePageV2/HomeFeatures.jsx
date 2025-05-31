"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Rocket } from "lucide-react"

export default function HomeFeatures() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Real-World Intelligence",
      description: "Our curriculum is built from 300+ consulting engagements, distilled into actionable learning.",
      color: "blue",
      stats: "300+ Projects",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Deep Market Research",
      description:
        "We study fast-growth SMEs and large enterprises to identify what actually drives business outcomes—and teach only what works.",
      color: "green",
      stats: "95% Success Rate",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Strategy-Led Learning",
      description: "Every module is powered by business cases, frameworks, and real-time insights—not theory.",
      color: "purple",
      stats: "3x Growth",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Built on Real Business
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike academic institutions, our programs are powered by actual consulting experience and market insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8  mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-blue-200 h-full">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Stats Badge */}
                <div
                  className={`inline-flex items-center px-3 py-1 bg-${feature.color}-50 text-${feature.color}-700 rounded-full text-sm font-medium mb-4`}
                >
                  {feature.stats}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-0">{feature.description}</p>

                {/* Hover Glass Background Effect */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
