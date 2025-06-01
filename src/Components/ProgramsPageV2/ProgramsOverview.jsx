"use client"

import { motion } from "framer-motion"
import { Clock, Target, Users } from "lucide-react"

export default function ProgramsOverview() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-sky-500" />,
      title: "2-Year Journey",
      description: "This is not a short-term course. It's a 2-year career transformation journey.",
    },
    {
      icon: <Target className="w-8 h-8 text-sky-500" />,
      title: "End-to-End Support",
      description: "Complete support from learning to leadership placement, ensuring you're role-ready.",
    },
    {
      icon: <Users className="w-8 h-8 text-sky-500" />,
      title: "For Mid-Career Professionals",
      description: "Designed for professionals stuck in stagnancy due to outdated playbooks or skill gaps.",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Decorative blurry blobs */}
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className=" mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Why It's Mandatory Block */}
          <motion.div
            className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why It's Mandatory</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              You can't solve new-age problems with old-age strategies. This sprint closes the skill and clarity gap,
              helping you grow at 3x speed—with practical content, expert mentorship, and hiring support.
            </p>
            <div className="text-center">
              <h4 className="text-xl font-bold text-sky-600">The Promise:</h4>
              <p className="text-lg font-medium">Clarity. Confidence. Career Acceleration.</p>
              <p className="text-gray-700 mt-2">Move from stuck to standout in your leadership journey.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
