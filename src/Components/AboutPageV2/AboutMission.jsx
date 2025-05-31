"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Users } from "lucide-react"

export default function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We saw a critical gap: experienced professionals were hitting growth ceilings—not due to lack of effort,
              but because they lacked access to the right strategic exposure, frameworks, and leadership clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="font-bold text-xl mb-2 text-red-800">The Problem</h3>
                <p className="text-red-700">Traditional institutions teach theory.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-xl mb-2 text-green-800">Our Solution</h3>
                <p className="text-green-700">We teach what actually works in business today.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Strategic Exposure</h4>
                  <p className="text-gray-700">Real-world frameworks from actual business challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Leadership Clarity</h4>
                  <p className="text-gray-700">Clear pathways to executive-level thinking</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Practical Application</h4>
                  <p className="text-gray-700">Immediate implementation in your current role</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
