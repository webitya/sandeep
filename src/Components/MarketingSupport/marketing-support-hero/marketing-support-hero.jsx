"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Image from "next/image"

export default function MarketingSupportHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-24 border-b border-gray-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
              Enterprise Solutions
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Enterprise Marketing <span className="text-blue-700">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Streamline your marketing operations with our comprehensive platform designed for enterprise teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition-all duration-200"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                  <ArrowForwardIcon className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(219, 234, 254, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-medium rounded-md shadow-md border border-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/10 to-transparent z-10 pointer-events-none"></div>
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Enterprise Marketing Dashboard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
