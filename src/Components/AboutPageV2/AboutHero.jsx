'use client'

import { motion } from "framer-motion"
import { Award, Users, Target, TrendingUp } from "lucide-react"

export default function AboutHero() {
  const achievements = [
    {
      icon: <Users className="w-5 h-5 text-[#1D4ED8]" />, // deep blue
      value: "300+",
      label: "Consulting Projects",
      bg: "bg-[#E0E7FF]/40"
    },
    {
      icon: <Award className="w-5 h-5 text-[#FBBF24]" />,
      value: "95%",
      label: "Success Rate",
      bg: "bg-[#FEF9C3]/40"
    },
    {
      icon: <Target className="w-5 h-5 text-[#6B7280]" />, // gray
      value: "500+",
      label: "Leaders Trained",
      bg: "bg-[#E5E7EB]/40"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#10B981]" />,
      value: "₹100Cr+",
      label: "Revenue Impacted",
      bg: "bg-[#D1FAE5]/40"
    }
  ]

  return (
    <section className="relative min-h-screen flex !items-center justify-center bg-gradient-to-br from-[#F8FAFC] via-[#EEF1F5] to-[#F8FAFC] px-4 py-24 text-gray-800 overflow-hidden">
      {/* Blurred corporate glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[28rem] h-[28rem] bg-[#93C5FD] rounded-full top-20 left-10 blur-[120px] opacity-20" />
        <div className="absolute w-[20rem] h-[20rem] bg-[#E2E8F0] rounded-full bottom-10 right-0 blur-[90px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
            Trusted by <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#334155]">
              Business Leaders
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Sales Syllabus Academy transforms real-world consulting insights into structured leadership development, backed by results.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-xl p-5 text-center shadow-xl border border-white/20 ${item.bg} bg-white/30 backdrop-blur-lg`}
              >
                <div className="mb-3 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-xl shadow-2xl p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Values</h3>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#10B981] rounded-full shadow-sm" />
              Learning from real market data
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#1D4ED8] rounded-full shadow-sm" />
              Solving Real Business Problems
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#6B7280] rounded-full shadow-sm" />
              Practical Learning Culture
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#F59E0B] rounded-full shadow-sm" />
              ROI-Focused Methodology
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
