"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"

const ServicePageFAQ = () => {
  const faqs = [
    {
      question: "Do we need to use all services, or can we start small?",
      answer:
        "You can begin with any one service — hiring, training, advisory, or audit. Most clients start with a project and scale up to ongoing monthly engagements.",
    },
    {
      question: "Can we use your training even if we don’t hire through you?",
      answer:
        "Absolutely. Many companies bring us in to upskill their existing teams through our cohort-based and self-paced programs.",
    },
    {
      question: "What if we just want a one-time project, not monthly support?",
      answer:
        "That’s perfectly fine. We support one-time hiring drives, sales team audits, or founder advisory on a project basis",
    },
    {
      question: "How do you ensure your hires perform post-joining?",
      answer:
        "Every hire goes through structured onboarding, performance-linked training, and monthly learning sprints — increasing their ramp-up speed and effectiveness.",
    },
    {
      question: "What training formats do you offer?",
      answer:"• Self-paced onboarding programs\n B  •	Live monthly problem-solving sessions\n C  •	Real-world case study learning\n D  •	Access to the Sales Syllabus Learning Library",
    },
    {
      question: "Do you offer services outside India?",
      answer:
        "Currently, we primarily serve Indian companies or India-focused business units. Global expansion is planned soon.",
    },
    
  ]

  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-4 border-indigo-100"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-8 border-indigo-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            <QuestionAnswerIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }} />
            <span className="text-indigo-800 font-medium text-sm">FAQs</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about our services and how we work
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  marginBottom: "16px",
                  borderRadius: "12px",
                  "&:before": { display: "none" },
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                  border: "1px solid rgba(241, 245, 249, 1)",
                  overflow: "hidden",
                  "&:first-of-type": {
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  },
                  "&:last-of-type": {
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#4f46e5" }} />}
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    "&.Mui-expanded": {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                    minHeight: "64px",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, color: "#334155", fontSize: "17px" }}>
                    {`Q${index + 1}: ${faq.question}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "20px 24px 24px", backgroundColor: "white" }}>
                  <Typography sx={{ color: "#475569", whiteSpace: "pre-line", lineHeight: 1.7 }}>
                    {`A: ${faq.answer}`}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            Still have questions?{" "}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Contact our support team</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageFAQ
