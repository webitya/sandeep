"use client"

import { motion } from "framer-motion"

export default function RevenuePilotCTA() {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🗓️ Ready to Pilot Your Growth?</h2>
          <p className="text-xl mb-8 text-green-100">Don't waste time and money on unproven hires.</p>
          <p className="text-lg mb-8 text-green-100">
            Book a consultation to explore how RevenuePilot can transform your revenue trajectory with a battle-ready
            sales leader.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-green-600 px-8 py-4 rounded-md font-bold hover:bg-green-50 transition-colors"
            >
              👉 Book a Free Strategy Call
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              👉 Download Success Case Study
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
