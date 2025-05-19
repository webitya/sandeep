"use client"

import { motion } from "framer-motion"
import {
  WorkOutline,
  BusinessCenter,
  Group,
  Insights,
  Settings,
  Build,
} from "@mui/icons-material"

const recruitmentData = [
  {
    icon: <WorkOutline fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Ownership",
    traditional: "Fills roles or trains people",
    syllabus: "Builds the full team-performance system",
  },
  {
    icon: <BusinessCenter fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Hiring Fit",
    traditional: "Resume-based decisions",
    syllabus: "Culture, context & capability-based mapping",
  },
  {
    icon: <Insights fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Enablement",
    traditional: "One-off training",
    syllabus: "Embedded onboarding & 30-60-90 plans",
  },
  {
    icon: <Group fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "KPI Planning",
    traditional: "Not included",
    syllabus: "Core to process",
  },
  {
    icon: <Settings fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Business Impact",
    traditional: "Hopes for results",
    syllabus: "Designs for predictable performance",
  },
  {
    icon: <Build fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Accountability",
    traditional: "None post-hire",
    syllabus: "Supports execution with tools & coaching",
  },
]

export default function HomeRecruitment() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 py-10 px-4 sm:px-6 md:px-12 flex justify-center text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-blue-900"
          >
            Sales Syllabus vs Traditional Recruitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2"
          >
            "The Problem Isn't Just Talent. It's the Process." <br />
            We're not replacing your recruiters — we're replacing the broken process causing misalignment, failed hires, and poor performance.
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full shadow-sm" />
        </div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden sm:block rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white"
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-blue-600 text-white font-semibold text-sm px-6 py-3">
            <div className="flex items-center">Category</div>
            <div className="flex items-center">Traditional</div>
            <div className="flex items-center">Sales Syllabus</div>
          </div>

          {/* Data Rows */}
          {recruitmentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 px-6 py-1 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-blue-50 transition duration-300 border-b last:border-b-0`}
            >
              {/* Category */}
              <div className="flex items-start gap-2 text-blue-900 font-medium">
                <span className="bg-blue-100 p-2 rounded-md shadow-sm">{item.icon}</span>
                <span className="leading-5">{item.category}</span>
              </div>
              {/* Traditional */}
              <div className="text-gray-600 leading-5">{item.traditional}</div>
              {/* Syllabus */}
              <div className="text-blue-800 font-medium leading-5">{item.syllabus}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4 mt-4">
          {recruitmentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="bg-blue-600 text-white flex items-center gap-2 px-3 py-2 text-sm font-medium">
                <span className="bg-white/20 p-1.5 rounded-md">{item.icon}</span>
                <span>{item.category}</span>
              </div>
              <div className="px-4 py-2 border-b border-gray-100 text-sm">
                <p className="text-xs font-semibold text-gray-500 mb-1">Traditional:</p>
                <p className="text-gray-700">{item.traditional}</p>
              </div>
              <div className="px-4 py-2 bg-blue-50 text-sm">
                <p className="text-xs font-semibold text-blue-600 mb-1">Sales Syllabus:</p>
                <p className="text-blue-800 font-medium">{item.syllabus}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-500 mt-6"
        >
          Compare our approach to see the difference in outcomes
        </motion.p>
      </motion.div>
    </div>
  )
}
