"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Building } from "lucide-react"

export default function HomeAudience() {
  const audiences = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      description: "Professionals with 10+ years in sales, marketing, or business roles",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      description: "Aspiring managers and team leads preparing for promotion",
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      description: "Founders grooming their next line of leadership",
    },
  ]

  return (
    <section className="relative py-20 bg-[#f9fafc] overflow-hidden">
      {/* Background Glassmorphism Blurred Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[360px] h-[360px] bg-white/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-blue-100/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who It's For</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
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
              <div className="flex justify-center mb-6 text-blue-600">
                {item.icon}
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
