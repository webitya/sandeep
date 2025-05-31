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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who It's For</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
