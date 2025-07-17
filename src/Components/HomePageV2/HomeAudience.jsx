"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, GraduationCap, Building2 } from "lucide-react"

export default function WhoThisIsFor() {
  const audiences = [
    {
      icon: <Briefcase className="w-12 h-12 text-[#4A90E2]" />,
      title: "Ambitious Professionals",
      description: "For those ready to step into leadership roles and drive growth with confidence.",
      bg: "from-[#e6f0ff] to-[#f9fbff]",
    },
    {
      icon: <Users className="w-12 h-12 text-[#50b5a2]" />,
      title: "Sales & Marketing Managers",
      description: "Perfect for professionals seeking practical strategies beyond theory and jargon.",
      bg: "from-[#e5f9f3] to-[#f9fefe]",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#f6a623]" />,
      title: "B-School Graduates",
      description: "Bridge the gap between classroom learning and real-world business scenarios.",
      bg: "from-[#fff8e6] to-[#fffef9]",
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#d96f6f]" />,
      title: "Founders & CXOs",
      description: "Ideal for leaders building high-performance sales and marketing teams.",
      bg: "from-[#ffeaea] to-[#fffafa]",
    },
  ]

  return (
    <section className="relative py-20 bg-[#f9fafc] overflow-hidden">
      {/* Soft Blurred Background Bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-80px] w-[280px] h-[280px] bg-[#d0eaff]/40 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-120px] right-[-90px] w-[300px] h-[300px] bg-[#bde4e0]/30 rounded-full blur-[130px]" />
      </div>

      <div className="mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Who This Is For</h2>
          <p className="text-blue-500 text-lg font-medium">Is Sales Syllabus Right for You?</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-6 text-center bg-gradient-to-br ${item.bg} backdrop-blur-md shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
