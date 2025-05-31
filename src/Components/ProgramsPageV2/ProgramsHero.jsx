"use client"

import { motion } from "framer-motion"
import { Rocket, Clock, Target, Award, ArrowRight } from "lucide-react"

export default function ProgramsHero() {
  const highlights = [
    { icon: <Clock className="w-6 h-6" />, text: "2-Year Journey" },
    { icon: <Target className="w-6 h-6" />, text: "Guaranteed Placement" },
    { icon: <Award className="w-6 h-6" />, text: "95% Success Rate" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Flagship Leadership Program
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              'Next Phase'
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-8 text-blue-100 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            If your early learning got you into the game,
          </motion.p>

          <motion.p
            className="text-3xl md:text-4xl mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            'Next Phase' gets you to the <span className="text-yellow-400">top</span>.
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">A practical, simulation-based leadership program</h2>
            <p className="text-xl text-blue-100 mb-6">Designed to unlock your next level—with real business impact.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 rounded-lg p-4">
                  <div className="text-blue-400 mr-3">{highlight.icon}</div>
                  <span className="font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
              Download Program Guide
            </button>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 mb-4">This is not a short-term course.</p>
            <p className="text-2xl font-bold text-yellow-400">It's a 2-year career transformation journey.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
