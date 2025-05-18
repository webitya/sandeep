"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DownloadModal from "@/Components/Resources/DownloadModal"
import { CloudDownload, Explore, Description, BarChart } from "@mui/icons-material"
import industries from "@/Components/Resources/industries"
import Link from "next/link"

export default function FreeResources() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeTab, setActiveTab] = useState("marketResearch")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false)

  // Check if mobile view on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const handleDownload = (resource) => {
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleMobileTabs = () => {
    setMobileTabsOpen(!mobileTabsOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-3xl lg:text-4xl pt-10 py-5 text-blue-900 mb-4"
          >
            Explore Our Free Resources on Industry Insights and Thought Leadership
          </motion.h1>
          <motion.p
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Access exclusive research and white papers to stay ahead in sales and marketing.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <button
              onClick={() => handleDownload(industries[0].marketResearch[0])}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center transition-all duration-300"
            >
              <CloudDownload className="mr-2" />
              Download Now
            </button>
           <Link href="#resources">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium flex items-center transition-all duration-300">
              <Explore className="mr-2" />
              Explore Resources
            </button>
           </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div id="resources" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12"
        >
          Industry-Specific Insights
        </motion.h2>

        {/* Mobile Toggle Button */}
        {isMobileView && (
          <div className="mb-4">
            <button
              onClick={toggleMobileTabs}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md flex justify-between items-center"
            >
              <span>{industries[activeIndustry].industryName}</span>
              <span
                className="transform transition-transform duration-200"
                style={{ transform: mobileTabsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </span>
            </button>
          </div>
        )}

        {/* Tabs Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side Tabs */}
          <AnimatePresence>
            {(isMobileView && mobileTabsOpen) || !isMobileView ? (
              <motion.div
                initial={isMobileView ? { height: 0, opacity: 0 } : { width: 0, opacity: 0 }}
                animate={isMobileView ? { height: "auto", opacity: 1 } : { width: "auto", opacity: 1 }}
                exit={isMobileView ? { height: 0, opacity: 0 } : { width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:w-64 flex-shrink-0"
              >
                <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isMobileView ? "mb-4" : ""}`}>
                  <div className="p-4 bg-blue-600 text-white font-semibold">Industries</div>
                  <div className="divide-y divide-gray-200">
                    {industries.map((industry, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndustry(index)
                          if (isMobileView) setMobileTabsOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                          activeIndustry === index
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {industry.industryName}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-grow"
          >
            {/* Content Tabs */}
            <div className="flex mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("marketResearch")}
                className={`flex items-center px-4 py-2 font-medium transition-colors duration-200 ${
                  activeTab === "marketResearch"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <BarChart className="mr-2" />
                Market Research
              </button>
              <button
                onClick={() => setActiveTab("whitePapers")}
                className={`flex items-center px-4 py-2 font-medium transition-colors duration-200 ${
                  activeTab === "whitePapers"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Description className="mr-2" />
                White Papers
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeIndustry}-${activeTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    {activeTab === "marketResearch" ? "Market Research" : "White Papers"} for{" "}
                    {industries[activeIndustry].industryName}
                  </h3>

                  <div className="space-y-4">
                    {industries[activeIndustry][activeTab === "marketResearch" ? "marketResearch" : "whitePapers"].map(
                      (resource, index) => (
                        <div
                          key={index}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                        >
                          <h4 className="text-lg font-medium text-gray-800 mb-2">{resource.topic}</h4>
                          {resource.description && <p className="text-gray-600 mb-3">{resource.description}</p>}
                          <button
                            onClick={() => handleDownload(resource)}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-200"
                          >
                            <CloudDownload className="mr-1" />
                            Download
                          </button>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Button */}
    

      {/* Download Modal */}
      <AnimatePresence>
        {isModalOpen && <DownloadModal isOpen={isModalOpen} onClose={closeModal} resource={selectedResource} />}
      </AnimatePresence>
    </div>
  )
}
