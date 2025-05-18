"use client"
import { motion } from "framer-motion"
import { Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Link from "next/link"

const ServicePageHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white py-24 md:py-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* LEFT - TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Sales & Marketing Growth Solutions Built for{" "}
              <span className="text-indigo-300">₹1–₹1,000 Cr</span> Companies
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed"
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="https://calendly.com/salessyllabus" target="_blank">
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
              </Link>
<Link href="#services">
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
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT - IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src="/serviceb.webp" // Replace with your actual image path
              alt="Service Hero"
              className="h-[350px] max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
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
