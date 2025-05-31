"use client"

import { motion } from "framer-motion"

export default function HomeAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Sales Syllabus Academy is a leadership development platform crafted for experienced sales, marketing, and
            business professionals who want to break into top management.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Our Mission</h3>
              <p className="text-gray-700">Create business-ready leaders.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Our Difference</h3>
              <p className="text-gray-700">Case-based. ROI-driven. Leadership-focused.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
