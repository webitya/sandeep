"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import SendIcon from "@mui/icons-material/Send"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"

export default function MarketingSupportCTA() {
  const formRef = useRef(null)
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const errors = {}

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      errors.company = "Company name is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))

    // Clear error when user types
    if (formErrors[id]) {
      setFormErrors((prev) => ({
        ...prev,
        [id]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = "YOUR_SERVICE_ID"
      const templateId = "YOUR_TEMPLATE_ID"
      const publicKey = "YOUR_PUBLIC_KEY"

      // For demo purposes, we'll simulate a successful submission
      // In a real implementation, you would uncomment the following code:

      /*
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      */

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "There was an error sending your message. Please try again.",
      })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-white mb-4">
              Get Started
            </div> */}

            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Enterprise Marketing?</h2>

            <p className="text-lg text-gray-300">
              Join leading enterprises that have revolutionized their marketing operations with our platform.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center">
                <CheckCircleIcon className="text-green-400 mr-3 h-5 w-5" />
                <span className="text-gray-200">Free 30-day trial for enterprise teams</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-green-400 mr-3 h-5 w-5" />
                <span className="text-gray-200">Dedicated implementation specialist</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-green-400 mr-3 h-5 w-5" />
                <span className="text-gray-200">24/7 priority support</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-green-400 mr-3 h-5 w-5" />
                <span className="text-gray-200">Custom onboarding for your team</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-medium rounded-md shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                Request Enterprise Demo
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowForwardIcon className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-medium rounded-md shadow-md border border-white hover:bg-blue-800 transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            {formStatus.isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <CheckCircleIcon className="text-green-500 h-16 w-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  {formStatus.message || "Your message has been sent successfully. We'll be in touch soon."}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setFormStatus({
                      isSubmitting: false,
                      isSubmitted: false,
                      isError: false,
                      message: "",
                    })
                  }
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition-colors duration-200"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-900">Schedule a Consultation</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.fullName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900`}
                    />
                    {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900`}
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.company ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900`}
                    />
                    {formErrors.company && <p className="mt-1 text-sm text-red-600">{formErrors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.message ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900`}
                    ></textarea>
                    {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
                  </div>

                  {formStatus.isError && (
                    <div className="p-3 bg-red-100 border border-red-200 rounded-md flex items-start">
                      <ErrorIcon className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{formStatus.message}</p>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition-colors duration-200 ${
                      formStatus.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
