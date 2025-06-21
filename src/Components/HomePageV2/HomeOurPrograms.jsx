"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Users, Clock, Rocket } from "lucide-react"

export default function ProgramListSection() {
  const programs = [
    {
      title: "Next Phase – Leaders",
      description: "For professionals with 10+ years of experience",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      status: "available",
    },
    {
      title: "SME Scale Up",
      description: "Designed for SME founders aiming for structured growth",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      status: "available",
    },
    {
      title: "For Mid Managers",
      description: "Leadership and revenue ownership skills",
      icon: <Users className="w-6 h-6 text-gray-400" />,
      status: "coming",
    },
    {
      title: "Junior Executives",
      description: "Get skilled for cross-functional performance",
      icon: <Clock className="w-6 h-6 text-gray-400" />,
      status: "coming",
    },
    {
      title: "Freshers",
      description: "Industry-ready tools, mindset, and placements",
      icon: <Rocket className="w-6 h-6 text-gray-400" />,
      status: "coming",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Programs</h2>
        <p className="text-lg text-gray-600 mt-2">Tailored paths for every stage of your career</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`rounded-2xl p-6 shadow-sm border ${
              program.status === "available"
                ? "bg-blue-50 border-blue-100 hover:shadow-md"
                : "bg-gray-50 border-gray-200 opacity-80"
            } transition duration-300 text-left group`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-2 shadow-sm">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              {program.status === "coming" && (
                <span className="ml-auto text-sm bg-yellow-100 text-yellow-800 px-3 py-0.5 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-gray-700 text-sm">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
