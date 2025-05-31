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
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us Over ISB, IIM, or Harvard?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We offer a high-impact alternative to elite institutions, without the fluff:
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-4 mb-8 pb-8 border-b border-blue-800 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-200">Our Approach</h3>
                <p>{item.ours}</p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-200">Traditional Approach</h3>
                <p className="text-blue-100">{item.theirs}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-2xl font-bold italic">"Learn. Earn. Lead—with Sales Syllabus Academy."</p>
        </motion.div>
      </div>
    </section>
  )
}
