"use client"
import { motion } from "framer-motion"
import { Paper } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const ServicePageClients = () => {
  const clientTypes = [
    "Scaling from ₹1 Cr to ₹1000 Cr",
    "Building in-house sales & marketing teams",
    "Expanding from founder-led selling to process driven sales",
    "Struggling with marketing ROI or sales output",
    "Seeking better alignment between goals and talent",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-28 bg-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase bg-indigo-50 rounded-full">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-5 tracking-tight">
            Who We Work With
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">We specialize in helping businesses that are:</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            className="p-8 md:p-10 rounded-2xl"
            sx={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
              border: "1px solid rgba(241, 245, 249, 1)",
              background: "linear-gradient(to bottom right, #ffffff, #f8fafc)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircleIcon sx={{ color: "#4f46e5", marginRight: "16px", fontSize: "24px" }} />
                  <p className="text-slate-700 font-medium text-lg">{client}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 pt-8 border-t border-slate-100 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-indigo-600 font-medium">
                Join 200+ companies already growing their revenue teams with us
              </p>
            </motion.div>
          </Paper>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageClients
