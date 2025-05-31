"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function HomeFAQ() {
  const faqs = [
    {
      question: "How is Sales Syllabus Academy different from traditional business schools like ISB, IIM, or Harvard?",
      answer:
        "Unlike academic institutions, our programs are built by sales and marketing consultants who've solved real business problems for 300+ companies. We focus on ROI, not just credentials—so you learn strategies that actually move revenue, teams, and business outcomes.",
    },
    {
      question: "Who are your programs designed for?",
      answer:
        "Our programs are crafted for experienced sales, marketing, and business professionals—typically with 8–15 years of experience—who want to break stagnancy, lead cross-functional teams, and step into mid- to senior-level leadership roles in SMEs or corporates.",
    },
    {
      question: "Do you provide placement or career support?",
      answer:
        "Yes. We offer high-value placement and career mentorship support for up to 2 years. This includes interview readiness, strategic career planning, and direct access to our hiring partners for leadership roles in both SMEs and large enterprises.",
    },
    {
      question: "What kind of results can I expect from the program?",
      answer:
        "Expect clarity in your leadership path, mastery over strategic execution, and stronger positioning for 2x–3x roles and salaries. Many of our learners have transitioned from operational roles to Head of Sales, Marketing Director, or Business Unit Head positions.",
    },
    {
      question: 'What makes your content "real-world" and practical?',
      answer:
        "All our content is derived from live consulting engagements, actual market trends, and deep research across fast-growth companies. You won't find outdated theory—instead, you'll get access to simulation-based sprints, case studies, and tools you can apply immediately.",
    },
    {
      question: "Can your programs help me switch industries or roles?",
      answer:
        "Yes. Our strategic frameworks and leadership training are industry-agnostic but outcome-specific. Whether you aim to lead a sales team in SaaS, manufacturing, BFSI, or D2C—we equip you with universal leadership skills that accelerate cross-industry transitions.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="flex-shrink-0 w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="flex-shrink-0 w-5 h-5 text-blue-600" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
