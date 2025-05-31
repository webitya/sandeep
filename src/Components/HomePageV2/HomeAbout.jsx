"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness, Target, Lightbulb } from "lucide-react"

export default function HomeAbout() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-gray-800">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            At <span className="font-semibold text-blue-700">Sales Syllabus Academy</span>, we empower professionals
            in sales, marketing, and business to step confidently into executive roles by mastering leadership
            strategies that scale impact and performance.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Build visionary leaders equipped with real-world business acumen and an ability to drive measurable growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Our Difference</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              ROI-driven, case-based learning grounded in leadership transformation—not just skill-building.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
