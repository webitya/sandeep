"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, GraduationCap, Building2 } from "lucide-react"

export default function HomeAudience() {
  const audiences = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      title: "Founders",
      description:
        "Build your second line, drive predictable growth, and install winning systems.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Mid-level Professionals",
      description:
        "Become revenue leaders with real-world strategies and monthly business case training. Learn what top performers do. And become one.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "Freshers",
      description:
        "Get industry-ready with tools, training, and placement support — with the exact skills companies hire for.",
    },
  ]

  return (
    <section className="relative py-10 bg-[#f9fafc] overflow-hidden">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[360px] h-[360px] bg-white/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-blue-100/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="mx-auto px-4 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Who It's For</h2>
          <p className="text-blue-600 font-medium text-lg">Build leaders. Grow business.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-800 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
