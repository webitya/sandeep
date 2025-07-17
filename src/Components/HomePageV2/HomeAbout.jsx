"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness, Target, Lightbulb } from "lucide-react"

export default function HomeAbout() {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 text-gray-900 pt-6 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header + Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight mb-3">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We are the <span className="font-semibold text-blue-700">The Global Center for Sales & Marketing Excellence</span>
          </p>
        </motion.div>

        {/* Description Paragraphs */}
        <motion.div
          className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-6xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Sales Syllabus is a premier, real world case-based business learning platform where professionals across the world learn to lead in the most critical commercial functions — sales, marketing, and business growth.
          </p>
          <p>
            We combine Harvard-style learning methodologies with contemporary, global business cases drawn from high-growth markets like India, Southeast Asia, the Middle East, and emerging economies — places where the next generation of global business stories is being written.
          </p>
          <p>
            Our programs prepare individuals and teams to think like strategists, communicate like leaders, and perform like world-class revenue drivers.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mission */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are on a mission to Help 3.5 Lakh+ Companies Boost Sales Productivity by 30%Without increasing cost. Just by optimizing talent, learning, and systems
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="w-8 h-8 text-green-600 group-hover:text-green-800 transition" />
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to help founders and business leaders reduce costly mistakes in sales and marketing by exposing them to real-world business cases.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
