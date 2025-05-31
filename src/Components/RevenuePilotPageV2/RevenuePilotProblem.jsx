"use client"

import { motion } from "framer-motion"
import { X, CheckCircle } from "lucide-react"

export default function RevenuePilotProblem() {
  const problems = [
    "70% fail to deliver results",
    "High salary, low ROI",
    "Weak people management & domain leadership",
    "No structured upskilling path for mid-career leaders",
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">❌ The Industry's Leadership Gap</h2>
            <p className="text-lg text-gray-700">
              Most SMEs hire sales leaders with high expectations—but see poor outcomes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-6 text-red-800">Common Problems:</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <X className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-red-700">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-6 text-green-800">✅ We Fix That with Trained Leadership</h3>
              <div className="space-y-4">
                <p className="text-green-700 font-medium">
                  There's no IIM or Harvard for Sales Heads in SMEs. So we built one.
                </p>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-green-700">
                    Sales Syllabus combines strategic learning, talent grooming, and organizational alignment to ensure
                    your sales leader is 100% ready for the real world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
