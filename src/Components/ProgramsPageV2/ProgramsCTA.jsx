"use client"

import { motion } from "framer-motion"

export default function ProgramsCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Deciding? Let's Talk.</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a free 1:1 session to discover the right leadership sprint for you.
          </p>

          <a
            href="/contact-us"
            className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-colors inline-block"
          >
            Book a Free Strategy Session
          </a>
        </motion.div>
      </div>
    </section>
  )
}
