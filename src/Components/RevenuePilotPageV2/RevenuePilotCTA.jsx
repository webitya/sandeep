'use client'

import { motion } from "framer-motion"

export default function RevenuePilotCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#165797] to-[#1969af] opacity-90 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Pilot Your Growth?
          </h2>
          <p className="text-lg md:text-xl mb-4 text-slate-200">
            Stop wasting time and capital on risky sales hires.
          </p>
          <p className="text-md md:text-lg mb-8 text-slate-300">
            Book a consultation to explore how RevenuePilot can transform your revenue path with proven sales leadership.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition"
            >
              Download Success Case Study
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
