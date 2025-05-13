"use client"

import { motion } from "framer-motion"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import CampaignIcon from "@mui/icons-material/Campaign"
import PeopleIcon from "@mui/icons-material/People"
import AutoGraphIcon from "@mui/icons-material/AutoGraph"

export default function MarketingSupportIntro() {
  const features = [
    {
      icon: <AnalyticsIcon className="text-blue-700 text-4xl" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting tools.",
    },
    {
      icon: <CampaignIcon className="text-blue-700 text-4xl" />,
      title: "Campaign Management",
      description: "Create, schedule, and manage all your marketing campaigns in one place.",
    },
    {
      icon: <PeopleIcon className="text-blue-700 text-4xl" />,
      title: "Audience Targeting",
      description: "Reach the right people with advanced segmentation and targeting features.",
    },
    {
      icon: <AutoGraphIcon className="text-blue-700 text-4xl" />,
      title: "Performance Optimization",
      description: "Continuously improve your marketing efforts with AI-powered recommendations.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Our Platform
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About sales Story telling </h2>

            <p className="text-lg text-gray-600  mx-auto">
              we transforms complex B2B offerings into clear, compelling narratives designed to accelerate buyer decisions and maximize conversion. We partner closely with your sales and leadership teams to weave data, insights, and proven best practices into every touch point—ensuring your prospects not only hear your value but act on it
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div variants={itemVariants} key={index}>
                <div className="p-8 h-full border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-white group hover:border-blue-200">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
