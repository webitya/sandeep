"use client"
import { motion } from "framer-motion"
import { Button } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const ServicePageOverview = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section  className="py-10 md:py-10 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-slate-50 to-transparent rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase bg-indigo-50 rounded-full">
              Our Services
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-5 tracking-tight">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A complete ecosystem to build and manage high-performing sales & marketing teams.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            "Talent Strategy & Workforce Planning",
            "Performance-Based Recruitment (Permanent & Temporary)",
            "Sales & Marketing Training Programs",
            "Leadership & Founder Advisory",
            "Revenue Team Audits & Optimization",
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex items-start"
              whileHover={{ y: -5 }}
            >
              <CheckCircleIcon sx={{ color: "#4f46e5", marginRight: "12px", fontSize: "24px" }} />
              <p className="text-slate-700 font-medium">{service}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<MenuBookIcon />}
            sx={{
              backgroundColor: "#4f46e5",
              "&:hover": { backgroundColor: "#4338ca" },
              padding: "14px 28px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)",
            }}
          >
            Book a Free Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageOverview
