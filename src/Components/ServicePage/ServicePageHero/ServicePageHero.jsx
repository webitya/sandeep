"use client"
import { motion } from "framer-motion"
import { Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const ServicePageHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white py-24 md:py-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <motion.span
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-100 uppercase bg-indigo-800/50 rounded-full border border-indigo-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Revenue Growth Experts
          </motion.span> */}

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Sales & Marketing Growth Solutions Built for <span className="text-indigo-300">₹1–₹1,000 Cr</span> Companies
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We help you build, train, and optimize revenue teams that perform — with the perfect mix of strategy,
            talent, and execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#4f46e5",
                "&:hover": { backgroundColor: "#4338ca" },
                padding: "14px 28px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)",
              }}
            >
              Book a Free Discovery Call
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                padding: "14px 28px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default ServicePageHero
