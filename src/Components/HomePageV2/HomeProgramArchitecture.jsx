"use client"

import { motion } from "framer-motion"

export default function HomeProgramArchitecture() {
  const steps = [
    {
      number: "01",
      title: "Diagnostic & Goal Mapping",
      description: "Personalized assessment to identify your leadership strengths and growth areas",
    },
    {
      number: "02",
      title: "Strategy Modules (Simulation + Cases)",
      description: "Hands-on learning through real business scenarios and strategic frameworks",
    },
    {
      number: "03",
      title: "Sprint Assignments with Mentorship",
      description: "Apply your learning with guided support from industry experts",
    },
    {
      number: "04",
      title: "Placement Preparation",
      description: "Targeted coaching to position you for leadership roles",
    },
    {
      number: "05",
      title: "Career Launch + Ongoing Support",
      description: "Transition into your new role with continued guidance",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Architecture</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Inside the Learning Journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
