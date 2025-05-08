"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"

export default function MarketingSupportFAQ() {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = (panel) => {
    setExpanded(expanded === panel ? false : panel)
  }

  const faqs = [
    {
      question: "How quickly can our enterprise implement your platform?",
      answer:
        "Most enterprise clients are up and running within 2-4 weeks. Our dedicated implementation team will guide you through the setup process, data migration, and provide comprehensive training for your team.",
    },
    {
      question: "Do you integrate with enterprise marketing tools?",
      answer:
        "Yes, we integrate with over 50 popular enterprise marketing tools including Salesforce, HubSpot, Adobe Marketing Cloud, Google Analytics, and more. Our API also allows for custom integrations with your proprietary systems.",
    },
    {
      question: "What security measures do you have in place?",
      answer:
        "We take enterprise security very seriously. Our platform is SOC 2 Type II certified, GDPR compliant, and we use industry-standard encryption. We also offer single sign-on (SSO), role-based access controls, and regular security audits.",
    },
    {
      question: "Can we customize the platform to our specific needs?",
      answer:
        "Absolutely. Our enterprise plans include customization options to match your specific workflows, reporting needs, and branding requirements. We also offer professional services for more complex customizations.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Enterprise clients receive 24/7 priority support, a dedicated customer success manager, regular business reviews, and access to our knowledge base and training resources. We also offer optional managed services for clients who need additional support.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <QuestionAnswerIcon className="h-4 w-4 mr-1" />
              FAQ
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Enterprise FAQ</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Common questions from our enterprise clients</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4"
            >
              <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-md transition-all duration-200">
                <button
                  onClick={() => handleToggle(`panel${index}`)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ExpandMoreIcon
                    className={`text-gray-500 transition-transform duration-200 ${
                      expanded === `panel${index}` ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expanded === `panel${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
