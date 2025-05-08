"use client"

import { motion } from "framer-motion"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SpeedIcon from "@mui/icons-material/Speed"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import EqualizerIcon from "@mui/icons-material/Equalizer"
import InsightsIcon from "@mui/icons-material/Insights"

export default function MarketingSupportOutcomes() {
  const outcomes = [
    {
      icon: <TrendingUpIcon className="text-green-600 text-4xl" />,
      title: "Increased Conversion Rates",
      description: "Our clients typically see a 35% increase in conversion rates within the first 3 months.",
      highlight: "+35%",
    },
    {
      icon: <SpeedIcon className="text-green-600 text-4xl" />,
      title: "Faster Campaign Deployment",
      description: "Launch campaigns 50% faster with our streamlined workflows and templates.",
      highlight: "50% faster",
    },
    {
      icon: <MonetizationOnIcon className="text-green-600 text-4xl" />,
      title: "Improved ROI",
      description: "Average 28% improvement in marketing ROI through better targeting and optimization.",
      highlight: "+28% ROI",
    },
    {
      icon: <PeopleAltIcon className="text-green-600 text-4xl" />,
      title: "Enhanced Customer Engagement",
      description: "Engage your audience with personalized content that resonates and drives action.",
      highlight: "2x engagement",
    },
    {
      icon: <EqualizerIcon className="text-green-600 text-4xl" />,
      title: "Data-Backed Decisions",
      description: "Make confident decisions based on comprehensive analytics and insights.",
      highlight: "Real-time data",
    },
    {
      icon: <InsightsIcon className="text-green-600 text-4xl" />,
      title: "Actionable Insights",
      description: "Gain clear visibility into what's working and what needs improvement.",
      highlight: "Clear insights",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              Results
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Measurable Business Results</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform delivers quantifiable outcomes that help you achieve your enterprise marketing goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-full"
            >
              <div className="h-full p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-green-100 text-green-800 font-bold px-4 py-1 rounded-bl-lg">
                  {outcome.highlight}
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
