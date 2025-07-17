"use client"

import { motion } from "framer-motion"
import { AlertTriangle, BookX, Globe } from "lucide-react"

export default function ProblemWeSolve() {
  return (
    <section className="w-full relative bg-gradient-to-br from-blue-100 via-white to-blue-100 py-16">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-none z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Why Do So Many Smart Leaders Still Fail in Sales & Marketing?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Because theory doesn’t prepare you for real-world complexity.
            </p>
            <p className="text-gray-600 text-base sm:text-md leading-relaxed">
              Textbook models and YouTube tutorials don’t show what actually happens in the market — and mistakes cost crores in lost revenue, mis-hires, and brand failure.
              <br /><br />
              We fill this gap with practical learning from real business cases — curated from actual Indian and global companies.
            </p>
          </div>

          {/* Right side - Glassy Info Cards */}
          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-blue-100 bg-white/30 backdrop-blur-md shadow-md">
              <div className="bg-blue-100 p-2 rounded-full">
                <AlertTriangle className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-md font-semibold text-gray-800">The Real Problem</h4>
                <p className="text-sm text-gray-700">
                  Smart leaders fall short because theoretical knowledge doesn’t solve dynamic market challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-blue-100 bg-white/30 backdrop-blur-md shadow-md">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookX className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-md font-semibold text-gray-800">Theory Fails in Reality</h4>
                <p className="text-sm text-gray-700">
                  Textbooks and tutorials can’t simulate hiring decisions, pricing wars, or brand positioning disasters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-blue-100 bg-white/30 backdrop-blur-md shadow-md">
              <div className="bg-blue-100 p-2 rounded-full">
                <Globe className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-md font-semibold text-gray-800">Our Solution</h4>
                <p className="text-sm text-gray-700">
                  We offer curated, real-world business cases from Indian and global companies to bridge this critical learning gap.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
