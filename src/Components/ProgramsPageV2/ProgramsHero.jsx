"use client"

import { motion } from "framer-motion"
import { Clock, Target, Award, ArrowRight } from "lucide-react"

export default function ProgramsHero() {
  const highlights = [
    { icon: <Clock className="w-6 h-6 text-sky-600" />, text: "2-Year Journey" },
    { icon: <Target className="w-6 h-6 text-sky-600" />, text: "Guaranteed Placement" },
    { icon: <Award className="w-6 h-6 text-sky-600" />, text: "95% Success Rate" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50 text-gray-900 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-24 left-24 w-80 h-80 bg-blue-300 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-40 right-24 w-80 h-80 bg-violet-300 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-rose-200 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative flex items-center min-h-screen  mx-auto px-4 pt-24 pb-32">
        <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ‘Next Phase’
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              If your early learning got you into the game,
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ‘Next Phase’ gets you to the <span className="text-yellow-500">top</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-white/80 transition-all duration-300 shadow">
                Download Program Guide
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 text-center md:text-left">
              A practical, simulation-based leadership program
            </h2>
            <p className="text-base text-gray-600 mb-6 text-center md:text-left">
              Designed to unlock your next level—with real business impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/60 backdrop-blur-sm border border-gray-100 rounded-lg px-4 py-3"
                >
                  <div className="mr-3">{highlight.icon}</div>
                  <span className="font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Message Positioned at Bottom */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-base text-gray-500 mb-1">This is not a short-term course.</p>
          <p className="text-lg md:text-xl font-semibold text-yellow-600">
            It's a 2-year career transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
