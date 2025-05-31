"use client"

import { motion } from "framer-motion"

export default function HomeComparison() {
  const comparisons = [
    {
      ours: "Built by consultants, not professors",
      theirs: "Academic theory with limited practical application",
    },
    {
      ours: "Powered by real-time business data, not outdated frameworks",
      theirs: "Case studies from decades ago with limited relevance",
    },
    {
      ours: "Designed for working professionals seeking ROI, not just credentials",
      theirs: "Designed for full-time students or career transitions",
    },
    {
      ours: "Practical skills for immediate impact",
      theirs: "Heavy focus on theoretical models",
    },
    {
      ours: "Flexible learning for busy schedules",
      theirs: "Rigid academic calendars",
    },
    {
      ours: "Strong network with industry leaders",
      theirs: "Traditional alumni networks",
    },
  ]

  return (
    <section className="relative py-10 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Blurred background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-md">
            Why Choose Us Over ISB, IIM, or Harvard?
          </h2>
          <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            We offer a high-impact alternative to elite institutions, without the fluff:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-500 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-blue-300 mb-1">Our Approach</h3>
                <p className="text-white text-sm leading-snug">{item.ours}</p>
              </div>
              <div className="border-t border-white/20 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-blue-400 mb-1">Traditional Approach</h3>
                <p className="text-blue-200 text-sm leading-snug">{item.theirs}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 px-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-medium italic drop-shadow-md">
            "Learn. Earn. Lead—with Sales Syllabus Academy."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
