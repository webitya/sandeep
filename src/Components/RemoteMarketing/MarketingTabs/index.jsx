"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BuildingIcon as BusinessCenter,
  CheckCircle,
  MonitorUpIcon as MonetizationOn,
  FastForwardIcon as Speed,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function RemoteMarketingStrategiesTabs() {
  const [activeTab, setActiveTab] = useState(0)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  const slideIn = {
    hidden: { x: -15, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  const tabs = [
    {
      id: 0,
      title: "Lack of Bandwidth",
      subtitle: "Resource optimization",
      quote: "I don't have a dedicated marketing team. My sales team handles both",
      icon: <BusinessCenter className="h-4 w-4" />,
      content: (
        <motion.div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm" variants={scaleUp}>
          <h4 className="text-xl font-semibold mb-3 text-gray-800">Strategy:</h4>
          <p className="text-gray-700 mb-4">Hire a trained remote team to handle:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="text-blue-600 h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-gray-800">LinkedIn, Google Ads, SEO</span>
                <p className="text-gray-600 mt-1 text-sm">Platform cost: ₹1L–₹3L/month, plus manpower</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="text-blue-600 h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-gray-800">Targeted Email Marketing</span>
                <p className="text-gray-600 mt-1 text-sm">
                  Low platform cost, high relevance in B2B, highly personalized outreach
                </p>
              </div>
            </li>
          </ul>
     
        </motion.div>
      ),
    },
    {
      id: 1,
      title: "Poor Performance",
      subtitle: "Efficiency enhancement",
      quote: "I have a marketing team, but they are not performing",
      icon: <Speed className="h-4 w-4" />,
      content: (
        <motion.div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm" variants={scaleUp}>
          <h4 className="text-xl font-semibold mb-3 text-gray-800">Strategy:</h4>
          <p className="text-gray-700 mb-4">
            Outsource to us for better ROI. We will audit, rebuild, and operate a high-performing demand generation
            system.
          </p>
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-4">
            <h5 className="font-medium text-gray-800 mb-2">Our approach includes:</h5>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <span>Comprehensive marketing audit</span>
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <span>Strategic rebuilding of marketing systems</span>
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <span>Ongoing optimization and performance tracking</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            {/* <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800 transition-colors">
              Learn more about this strategy
              <ChevronRight className="h-4 w-4 ml-1" />
            </button> */}
          </div>
        </motion.div>
      ),
    },
    {
      id: 2,
      title: "Weak Lead Conversion",
      subtitle: "Revenue optimization",
      quote: "We're generating leads, but sales closures are low",
      icon: <MonetizationOn className="h-4 w-4" />,
      content: (
        <motion.div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm" variants={scaleUp}>
          <h4 className="text-xl font-semibold mb-3 text-gray-800">Strategy:</h4>
          <p className="text-gray-700 mb-4">Strengthen value communication through content-led email campaigns:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                1
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">Awareness</h5>
              <p className="text-gray-600 mt-1 text-xs">Educate and introduce</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                2
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">Differentiation</h5>
              <p className="text-gray-600 mt-1 text-xs">Showcase competitive edge</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                3
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">Success Stories</h5>
              <p className="text-gray-600 mt-1 text-xs">Share relevant case studies</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                4
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">Value Communication</h5>
              <p className="text-gray-600 mt-1 text-xs">Highlight end-to-end impact</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                5
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">ROI & Justification</h5>
              <p className="text-gray-600 mt-1 text-xs">Present financial value</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
              <div className="bg-blue-50 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mb-2 text-xs">
                6
              </div>
              <h5 className="font-semibold text-gray-800 text-sm">Best Practices</h5>
              <p className="text-gray-600 mt-1 text-xs">Share industry benchmarks</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            {/* <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800 transition-colors">
              Learn more about this strategy
              <ChevronRight className="h-4 w-4 ml-1" />
            </button> */}
          </div>
        </motion.div>
      ),
    },
  ]

  return (
    <section id="strategies" className="py-5 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
     
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Choose the Strategy That Fits You Best</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We tailor our approach based on your specific marketing challenges.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row">
            {/* Tabs on the left */}
            <div className="md:w-1/4 bg-gray-50 border-r border-gray-200">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left py-4 px-5 border-b border-gray-200 transition-all hover:bg-blue-50 flex items-center ${
                    activeTab === tab.id
                      ? "bg-white border-l-4 border-l-blue-600"
                      : "text-gray-700 border-l-4 border-l-transparent"
                  }`}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`mr-3 p-2 rounded-md ${
                      activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div>
                    <h3 className={`font-medium text-sm ${activeTab === tab.id ? "text-blue-700" : "text-gray-800"}`}>
                      {tab.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{tab.subtitle}</p>
                  </div>
                </motion.button>
              ))}

              <div className="p-4 mt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2">Need assistance?</div>
               <Link href="https://calendly.com/salessyllabus" target="_blank">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors">
                  Schedule a consultation
                </button>
               </Link>
              </div>
            </div>

            {/* Content on the right */}
            <div className="md:w-3/4 p-6">
              <motion.div key={activeTab} initial="hidden" animate="visible" variants={slideIn}>
                <div className="flex items-center mb-4">
                  <div className={`p-1.5 rounded-md bg-blue-600 text-white mr-3`}>{tabs[activeTab].icon}</div>
                  <h3 className="font-semibold text-lg text-gray-800">{tabs[activeTab].title}</h3>
                </div>

                <motion.div
                  className="text-sm text-gray-700 mb-6 italic border-l-3 border-blue-200 pl-3 py-2 bg-blue-50/30 rounded-r-sm"
                  variants={slideIn}
                >
                  "{tabs[activeTab].quote}"
                </motion.div>

                {tabs[activeTab].content}

               
              </motion.div>
            </div>
          </div>
        </motion.div>

     
      </div>
    </section>
  )
}
