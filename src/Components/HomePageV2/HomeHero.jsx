'use client'

import { motion } from "framer-motion"
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react"
import DownloadIcon from "@mui/icons-material/Download"
import Link from "next/link"

export default function HomeHero() {
  const stats = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, value: "1000+", label: "Business Case" },
    { icon: <Award className="w-5 h-5 text-green-600" />, value: "95%", label: "Success Rate" },
    { icon: <TrendingUp className="w-5 h-5 text-purple-600" />, value: "3x", label: "Career Growth" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br pt-8 from-blue-50 via-white to-blue-100 text-gray-900 overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-24 w-60 h-60 bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-60 h-60 bg-purple-300/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto px-4 pt-20 pb-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              className="text-2xl lg:text-3xl font-bold leading-snug mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Where Real Business Teaches You to Win.
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Make Smarter Sales & Marketing Decisions. Learn from Real-World Business Cases
              </span>
            </motion.h1>

            {/* 🔵 New Highlighted Line */}
            <motion.p
              className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Join the new standard in professional business education.
            </motion.p>

            <motion.p
              className="text-base md:text-lg mb-3 text-gray-600 leading-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Avoid costly mistakes. Our case-based learning platform helps founders and business leaders gain clarity through actual, proven strategies—not just theory.
            </motion.p>

        <motion.div
  className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  {/* Primary Button */}
  <Link href="/enquiry" target="_blank" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center">
      Test your current skills
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
  </Link>

  {/* Secondary Button */}
  <a
    href="/Case%20Study%20-HOD%20sales%20-S1.pdf"
    download
    className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 bg-white/40 backdrop-blur-md text-gray-800 text-sm font-medium transition hover:bg-white/70 shadow-md hover:shadow-lg"
  >
    <DownloadIcon className="text-blue-600 mr-2 group-hover:animate-bounce transition-transform duration-300" />
    Sample Business Case
  </a>
</motion.div>


            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
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
            <div className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-md">
                <Award className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-bold mb-3 text-gray-800">Leadership Transformation</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2.5"></div>
                  <span>300+ Real Business Cases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2.5"></div>
                  <span>2-Year Career Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2.5"></div>
                  <span>Guaranteed Placement</span>
                </div>
              </div>

              {/* 2% Club Section */}
              <div className="mt-5">
                <p className="text-sm text-gray-800 font-medium mb-2">
                  Our alumni are the top 2% of sales and marketing talent – <span className="font-semibold">2% Club</span>
                </p>
                <Link href="/enquiry">
                  <button className="mt-1 text-sm text-blue-600 hover:underline font-semibold transition">
                    Join the Top 2% Club →
                  </button>
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="text-xl font-bold text-green-500">95%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
