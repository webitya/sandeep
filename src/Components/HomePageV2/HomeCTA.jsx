"use client"

import { motion } from "framer-motion"

export default function HomeCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Leadership Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step toward accelerating your career and becoming the leader you're meant to be.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/salessyllabus"
              className="bg-white text-blue-600 px-8 py-4 rounded-md font-bold hover:bg-blue-50 transition-colors"
            >
              Book a Free Strategy Session
            </a>
            <a
              href="/programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              Explore Our Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
