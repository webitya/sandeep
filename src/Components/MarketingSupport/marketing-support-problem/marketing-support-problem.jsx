"use client"

import { motion } from "framer-motion"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import Image from "next/image"

export default function MarketingSupportProblem() {
  const problems = [
    "B2B sales today is complex, multi-touch, and competitive",
    "1:1 communication by client facing team limits the depth of value communication",
    "Salespeople often lack time, data, or tools to articulate full impact",
    "Critical content like ROI, case studies, differentiation often comes too late—or never",
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent z-10 pointer-events-none"></div>
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Sales Communication Challenges"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The problems we are solving</h2>

            <p className="text-lg text-gray-700">
              "Your sales team talks to the right prospects, but the right story is not always told.“
              <br />
              Sales teams often manage to get in front of the prospect, but during these short interactions — calls or
              meetings — they typically only communicate 2–3 key points. That’s not enough to convey the full value,
              use cases, and differentiation of your solution.
            </p>

            <ul className="space-y-2 mt-8">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                >
                  <span className="flex-shrink-0 mr-3 mt-1">
                    <ErrorOutlineIcon className="text-red-600 h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
