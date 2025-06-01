'use client'

import { motion } from 'framer-motion'
import BusinessIcon from '@mui/icons-material/Business'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'

export default function RevenuePilotAudience() {
  const audiences = [
    {
      icon: <BusinessIcon className="text-blue-700" fontSize="medium" />,
      text: 'SMEs planning to cross ₹5–200 Cr in revenue',
    },
    {
      icon: <TrendingUpIcon className="text-blue-700" fontSize="medium" />,
      text: "Founders who've outgrown founder-led sales",
    },
    {
      icon: <GroupIcon className="text-blue-700" fontSize="medium" />,
      text: 'Companies struggling with low-performance sales hires',
    },
    {
      icon: <TrackChangesIcon className="text-blue-700" fontSize="medium" />,
      text: 'Businesses looking for second-line leaders to scale operations',
    },
  ]

  const offerings = [
    '1-on-1 support to define your hiring goals',
    'Curated pool of trained sales leadership candidates',
    'Structured pre-hiring interaction and role readiness',
    'Onboarding support + 9-month success journey',
    'Peace of mind with guaranteed results',
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl  text-gray-900 mb-4">
              Unlock Scalable Sales Growth
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              RevenuePilot is built for founders ready to move beyond founder-led sales and build high-performing teams.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Who Should Use RevenuePilot?
              </h2>
              <div className="space-y-5">
                {audiences.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="mt-1">{item.icon}</div>
                    <p className="ml-4 text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                What You Get
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {offerings.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 mt-2 bg-blue-700 rounded-full mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
