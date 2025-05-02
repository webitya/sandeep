"use client"
import { motion } from "framer-motion"
import { Button } from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"

const ServicePageCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <motion.span
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-200 uppercase bg-indigo-800/50 rounded-full border border-indigo-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Get Started Today
          </motion.span> */}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to Build a Revenue Team That Performs?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            <PhoneIcon sx={{ fontSize: 24, verticalAlign: "middle", marginRight: "8px" }} />
            Book a free strategy call and let's plan your growth journey together.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white",
                color: "#4f46e5",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                padding: "16px 32px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
              }}
            >
              Book Your Discovery Call
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              View Case Studies
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-indigo-200 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Join 200+ companies already growing with our proven methodology
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageCTA
