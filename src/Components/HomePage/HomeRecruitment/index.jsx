'use client';

import { motion } from 'framer-motion';
import {
  WorkOutline, BusinessCenter, Group, Insights, Settings,
  Build, Devices, Star
} from '@mui/icons-material';

const recruitmentData = [
  {
    icon: <WorkOutline fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Goal',
    traditional: 'Fill vacant roles based on job descriptions',
    syllabus: 'Build outcome-aligned teams to achieve business goals',
  },
  {
    icon: <BusinessCenter fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Business Context',
    traditional: 'Limited understanding of org culture, leadership, and revenue plans',
    syllabus: 'Deep immersion via culture mapping, review meetings, goal alignment',
  },
  {
    icon: <Insights fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Planning Depth',
    traditional: 'Reactive hiring when a need arises',
    syllabus: 'Proactive strategic workforce planning aligned with growth strategy',
  },
  {
    icon: <Group fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Hiring Models',
    traditional: 'Full-time roles only',
    syllabus: 'Flexible models — full-time, project-based, fractional, contract',
  },
  {
    icon: <Settings fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Talent Fit',
    traditional: 'Focus on CVs and interviews',
    syllabus: 'Focus on team dynamics, skill gaps, and long-term fit',
  },
  {
    icon: <Build fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Post-Hire Support',
    traditional: 'Ends at joining',
    syllabus: 'Includes onboarding, performance planning, and skill enablement',
  },
  {
    icon: <Insights fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Performance Linkage',
    traditional: 'No direct connection to business outcomes',
    syllabus: 'Clear ROI tracking through KPI planning and enablement systems',
  },
  {
    icon: <Devices fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Skill Development',
    traditional: 'Not part of the process',
    syllabus: 'Integrated training, performance audits, and capability building',
  },
  {
    icon: <Devices fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Technology/Tools',
    traditional: 'Often manual or outsourced assessments',
    syllabus: 'Includes performance tracking, skill-gap analysis, and reporting tools',
  },
  {
    icon: <Star fontSize="small" className="text-blue-700 drop-shadow-sm" />,
    category: 'Overall Value',
    traditional: 'Transactional, short-term',
    syllabus: 'Strategic, outcome-focused, and long-term business value',
  },
];

export default function HomeRecruitment() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-screen py-6 px-3 md:px-12 flex items-start justify-center text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Sales Syllabus vs Traditional Recruitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-600 mt-2"
          >
            "The Problem Isn’t Just Talent. It’s the Process." <br />
            We’re not replacing your recruiters — we’re replacing the broken process that causes misalignment, failed hires, and poor performance.
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Table */}
        <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 text-xs">
          <div className="grid grid-cols-3 bg-blue-100 font-semibold text-gray-800 px-3 py-3 text-left">
            <div>Category</div>
            <div>Traditional Recruitment Process</div>
            <div>Sales Syllabus Approach</div>
          </div>

          {recruitmentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 px-3 py-2 transition-all duration-300 ${
                i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              } hover:bg-blue-50 hover:shadow-sm`}
            >
              <div className="flex gap-1 items-start font-medium">
                {item.icon}
                <span>{item.category}</span>
              </div>
              <div className="text-gray-600">{item.traditional}</div>
              <div className="text-blue-800">{item.syllabus}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
