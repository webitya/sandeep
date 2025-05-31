'use client'

import { motion } from "framer-motion"
import { ArrowRight, Play, Award, Users, TrendingUp } from "lucide-react"

export default function HomeHero() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-blue-600" />, value: "300+", label: "Consulting Projects" },
    { icon: <Award className="w-6 h-6 text-green-600" />, value: "95%", label: "Success Rate" },
    { icon: <TrendingUp className="w-6 h-6 text-purple-600" />, value: "3x", label: "Career Growth" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br pt-8 from-blue-50 via-white to-blue-100 text-gray-900 overflow-hidden">
      {/* Glassmorphic Blurred Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-24 w-72 h-72 bg-blue-200/50 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-purple-300/40 rounded-full filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/20 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h1
                className="text-4xl lg:text-4xl font-bold leading-tight mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Learn to Lead
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Sales, Marketing & Business Teams
                </span>
                <span className="text-gray-800"> That Scale Revenue</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-3 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Real-world leadership learning for professionals ready to move from execution to influence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                  Book a Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group bg-white/50 backdrop-blur-md border border-white/30 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-white/70 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-xl">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-md">
                  <Award className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">Leadership Transformation</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>300+ Real Business Cases</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span>2-Year Career Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Guaranteed Placement</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/30">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="text-2xl font-bold text-green-500">95%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
