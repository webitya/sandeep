"use client";

import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MarketingSupportCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-tr from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-blue-400 opacity-10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Ready to Transform Your Enterprise Marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Unlock the power of streamlined operations, optimized performance, and scalable strategies tailored for modern enterprise teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
            >
              Request Enterprise Demo
              <ArrowForwardIcon className="ml-2" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-blue-800 transition"
            >
              Contact Sales
            </motion.a>
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {[
            "Free 30-day trial for enterprise teams",
            "Dedicated implementation specialist",
            "24/7 priority support",
            "Custom onboarding for your team",
            "Seamless integrations with your stack",
          ].map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-start text-gray-100 text-base"
            >
              <CheckCircleIcon className="text-green-400 mr-3 mt-1" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
