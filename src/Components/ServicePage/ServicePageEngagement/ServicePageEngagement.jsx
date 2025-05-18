"use client"
import { motion } from "framer-motion"
import { Button, Card, CardContent } from "@mui/material"
import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import RecurringIcon from "@mui/icons-material/Autorenew"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import CompareArrowsIcon from "@mui/icons-material/CompareArrows"

const ServicePageEngagement = () => {
  const engagementModels = [
    {
      id: 1,
      title: "Single Project",
      icon: <GpsFixedIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      details: [
        "Best for: Specific hiring or training goals",
        "Duration: 1–2 months",
        "Dedicated project manager",
        "Weekly progress reports",
      ],
      price: "",
      popular: false,
    },
    {
      id: 2,
      title: "Monthly Engagement",
      icon: <RecurringIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      details: [
        "Best for: Companies scaling fast and needing recurring hiring, training, and consulting",
        "Includes: Dedicated talent advisor, access to learning platform, quarterly strategy meets",
        "Priority support",
        "Customized growth roadmap",
      ],
      price: "",
      popular: true,
    },
  ]

  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-50 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-50 opacity-70"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            <MenuBookIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }} />
            <span className="text-indigo-800 font-medium text-sm">Engagement Models</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            How We Work With You
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Flexible engagement options designed to match your business needs and growth stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                elevation={0}
                className="h-full relative overflow-hidden"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(241, 245, 249, 1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(-5px)",
                    borderColor: "rgba(224, 231, 255, 1)",
                  },
                }}
              >
                {model.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-5 translate-y-3 shadow-sm">
                      POPULAR
                    </div>
                  </div>
                )}
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mr-5">
                        {model.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">{model.title}</h3>
                    </div>

                    <div className="mb-6">
                      <p className="text-indigo-600 font-semibold text-lg mb-4">{model.price}</p>
                      <ul className="space-y-3">
                        {model.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div className="mt-auto pt-6">
                      <Button
                        variant={model.popular ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                          backgroundColor: model.popular ? "#4f46e5" : "transparent",
                          borderColor: "#4f46e5",
                          color: model.popular ? "white" : "#4f46e5",
                          "&:hover": {
                            backgroundColor: model.popular ? "#4338ca" : "rgba(79, 70, 229, 0.04)",
                            borderColor: "#4f46e5",
                          },
                          padding: "12px 16px",
                          borderRadius: "8px",
                          textTransform: "none",
                          fontSize: "15px",
                          fontWeight: "bold",
                          boxShadow: model.popular ? "0 10px 15px -3px rgba(79, 70, 229, 0.2)" : "none",
                        }}
                      >
                        {model.popular ? "Get Started Now" : "Learn More"}
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<CompareArrowsIcon />}
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
            Compare Plans
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ServicePageEngagement
