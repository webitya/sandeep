"use client"

import { motion } from "framer-motion"
import { Clock, Target, Users } from "lucide-react"

export default function ProgramsOverview() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "2-Year Journey",
      description: "This is not a short-term course. It's a 2-year career transformation journey.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Support",
      description: "Complete support from learning to leadership placement, ensuring you're role-ready.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "For Mid-Career Professionals",
      description: "Designed for professionals stuck in stagnancy due to outdated playbooks or skill gaps.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Why It's Mandatory</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              You can't solve new-age problems with old-age strategies. This sprint closes the skill and clarity gap,
              helping you grow at 3x speed—with practical content, expert mentorship, and hiring support.
            </p>
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-600">The Promise:</h4>
              <p className="text-lg font-medium">Clarity. Confidence. Career Acceleration.</p>
              <p className="text-gray-700 mt-2">Move from stuck to standout in your leadership journey.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
