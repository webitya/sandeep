"use client"

import { motion } from "framer-motion"

export default function HomeCTA() {
  return (
    <section
      className="relative py-20 text-gray-900 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #f8fafc, #e2e8f0, #f8fafc)", // light neutral background
        backgroundSize: "300% 300%",
        animation: "moveGradient 14s ease infinite",
      }}
    >
      {/* Blurred subtle business-toned shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[140px] opacity-25" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-[#0ea5e9] rounded-full blur-[130px] opacity-25" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            From Emerging Markets to Global Boardrooms
          </h2>
          <p className="text-lg md:text-xl mb-8 font-medium text-gray-700">
            Learn What it Takes to Lead, Scale, and Succeed in the Real World
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/salessyllabus"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition shadow-md"
            >
              Book a Free Strategy Session
            </a>
            <a
              href="/programs"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition shadow-sm"
            >
              Explore Our Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
