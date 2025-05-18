"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Close, CloudDownload, Email, CheckCircle } from "@mui/icons-material"
import emailjs from "@emailjs/browser"

export default function DownloadModal({ isOpen, onClose, resource }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleDirectDownload = () => {
    // Implement direct download logic
    window.open(resource.pdf, "_blank")
    onClose()
  }

  const handleSubscribeAndDownload = async (e) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          email: email,
          resource_name: resource.topic,
          to_name: email.split("@")[0],
        },
        "YOUR_PUBLIC_KEY",
      )

      setIsSubscribed(true)
      setTimeout(() => {
        window.open(resource.pdf, "_blank")
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error sending email:", error)
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Logo */}
        <div className="bg-blue-600 p-4 text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors">
            <Close />
          </button>
          <div className="flex justify-center py-2">
            {/* Replace with your actual logo */}
            <div className="flex items-center">
              <CloudDownload className="text-3xl mr-2" />
              <span className="text-xl font-bold">ResourceHub</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{resource?.topic}</h3>
          {resource?.description && <p className="text-gray-600 mb-6">{resource.description}</p>}

          {isSubscribed ? (
            <div className="text-center py-4">
              <CheckCircle className="text-green-500 text-5xl mx-auto mb-2" />
              <p className="text-green-600 font-medium">Thank you for subscribing! Your download is starting...</p>
            </div>
          ) : (
            <>
              <button
                onClick={handleDirectDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium mb-4 flex items-center justify-center transition-all duration-300"
              >
                <CloudDownload className="mr-2" />
                Download Now
              </button>

              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <form onSubmit={handleSubscribeAndDownload}>
                <p className="text-gray-700 mb-3">Subscribe to receive updates on new resources:</p>
                <div className="mb-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Email className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Email className="mr-2" />
                      Subscribe & Download
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
