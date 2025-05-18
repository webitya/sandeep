"use client"

import { motion } from "framer-motion"
import { WorkOutline, BusinessCenter, Group, Insights, Settings, Build, Devices, Star } from "@mui/icons-material"

const recruitmentData = [
  {
    icon: <WorkOutline fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Goal",
    traditional: "Fill vacant roles based on job descriptions",
    syllabus: "Build outcome-aligned teams to achieve business goals",
  },
  {
    icon: <BusinessCenter fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Business Context",
    traditional: "Limited understanding of org culture, leadership, and revenue plans",
    syllabus: "Deep immersion via culture mapping, review meetings, goal alignment",
  },
  {
    icon: <Insights fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Planning Depth",
    traditional: "Reactive hiring when a need arises",
    syllabus: "Proactive strategic workforce planning aligned with growth strategy",
  },
  {
    icon: <Group fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Hiring Models",
    traditional: "Full-time roles only",
    syllabus: "Flexible models — full-time, project-based, fractional, contract",
  },
  {
    icon: <Settings fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Talent Fit",
    traditional: "Focus on CVs and interviews",
    syllabus: "Focus on team dynamics, skill gaps, and long-term fit",
  },
  {
    icon: <Build fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Post-Hire Support",
    traditional: "Ends at joining",
    syllabus: "Includes onboarding, performance planning, and skill enablement",
  },
  {
    icon: <Insights fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Performance Linkage",
    traditional: "No direct connection to business outcomes",
    syllabus: "Clear ROI tracking through KPI planning and enablement systems",
  },
  {
    icon: <Devices fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Skill Development",
    traditional: "Not part of the process",
    syllabus: "Integrated training, performance audits, and capability building",
  },
  {
    icon: <Devices fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Technology/Tools",
    traditional: "Often manual or outsourced assessments",
    syllabus: "Includes performance tracking, skill-gap analysis, and reporting tools",
  },
  {
    icon: <Star fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: "Overall Value",
    traditional: "Transactional, short-term",
    syllabus: "Strategic, outcome-focused, and long-term business value",
  },
]

export default function HomeRecruitment() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-screen py-6 px-3 sm:px-6 md:px-12 flex items-start justify-center text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2 sm:mb-3"
          >
            Sales Syllabus vs Traditional Recruitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-2"
          >
            "The Problem Isn't Just Talent. It's the Process." <br className="hidden sm:block" />
            We're not replacing your recruiters — we're replacing the broken process that causes misalignment, failed
            hires, and poor performance.
          </motion.p>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-3 sm:mt-5 rounded-full shadow-sm" />
        </div>

        {/* Desktop Table (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white hidden sm:block"
        >
          <div className="grid grid-cols-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-4 py-3 text-left">
            <div className="col-span-2 flex items-center text-sm">Category</div>
            <div className="col-span-5 text-sm">Traditional Recruitment Process</div>
            <div className="col-span-5 text-sm">Sales Syllabus Approach</div>
          </div>

          {recruitmentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`grid grid-cols-12 px-4 py-2.5 transition-all duration-300 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-blue-50 border-b border-gray-100 last:border-b-0`}
            >
              <div className="col-span-2 flex gap-1.5 items-center font-medium text-blue-900">
                <span className="bg-blue-50 p-1.5 rounded-md flex items-center justify-center shadow-sm">
                  {item.icon}
                </span>
                <span className="text-xs md:text-sm truncate">{item.category}</span>
              </div>
              <div className="col-span-5 text-gray-600 text-xs md:text-sm pl-2 flex items-center">
                {item.traditional}
              </div>
              <div className="col-span-5 text-blue-800 text-xs md:text-sm pl-2 font-medium flex items-center">
                {item.syllabus}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Cards (visible only on small screens) */}
        <div className="sm:hidden space-y-4">
          {recruitmentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 flex items-center gap-2">
                <span className="bg-white/20 p-1.5 rounded-md flex items-center justify-center">{item.icon}</span>
                <span className="font-medium">{item.category}</span>
              </div>
              <div className="p-3 border-b border-gray-100">
                <div className="text-xs font-semibold text-gray-500 mb-1">Traditional Approach:</div>
                <div className="text-sm text-gray-600">{item.traditional}</div>
              </div>
              <div className="p-3 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 mb-1">Sales Syllabus Approach:</div>
                <div className="text-sm text-blue-800 font-medium">{item.syllabus}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-xs text-gray-500"
        >
          Compare our approach to see the difference in outcomes
        </motion.div>
      </motion.div>
    </div>
  )
}
