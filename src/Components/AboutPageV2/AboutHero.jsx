"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, TrendingUp } from "lucide-react"

export default function AboutHero() {
  const achievements = [
    { icon: <Users className="w-8 h-8" />, value: "300+", label: "Consulting Projects" },
    { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" },
    { icon: <Target className="w-8 h-8" />, value: "2000+", label: "Leaders Trained" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "₹500Cr+", label: "Revenue Impact" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-4 h-4 mr-2" />
                Industry Leaders in Sales & Marketing Consulting
              </motion.div>

              <motion.h1
                className="text-4xl md:text-4xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Built by
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Sales & Marketing
                </span>
                <span className="text-yellow-400">Experts</span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Designed for Future Leaders
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed mb-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Sales Syllabus Academy is not just a leadership development platform—it's the result of 300+ real-world
                consulting projects turned into a practical, ROI-driven learning ecosystem.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3 text-blue-400">{achievement.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{achievement.value}</div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Our Foundation</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>300+ Consulting Engagements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span>Real Business Challenges Solved</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span>Practical Learning Ecosystem</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>ROI-Driven Methodology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
