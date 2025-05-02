"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"

const ServicePageFAQ = () => {
  const faqs = [
    {
      question: "Do you help with only sales hiring, or marketing too?",
      answer:
        "We specialize in both sales and marketing hiring — because real growth happens when these functions work together. Whether you need BDRs, account executives, performance marketers, or brand strategists, we build complete revenue teams that perform.",
    },
    {
      question: "Can we use only training services without hiring through you?",
      answer:
        "Yes. Many clients come to us with an existing team and want to upgrade performance through training. Our training programs are modular, case study-based, and tailored for B2B sales and marketing roles.",
    },
    {
      question: "Do you work with agencies, product companies, or traditional businesses?",
      answer:
        "Yes. We work across B2B SaaS, D2C brands, traditional manufacturing, and service companies. If your business has a clear growth goal and needs a better performing team, we can help — regardless of industry.",
    },
    {
      question: "What's your guarantee on candidates?",
      answer:
        "For permanent hires, we offer a free replacement within the first 30 days if performance expectations are not met. For temporary consultants, you only pay for actual working hours or deliverables.",
    },
    {
      question: "How fast can we expect to start seeing results?",
      answer:
        "Culture Mapping Report: Within 7 days\nShortlist of Candidates: Within 10–14 days\nOnboarding & Training: Can begin in 2–3 weeks\n\nResults vary based on team size and engagement level — but most clients see visible team performance improvements in the first 30–45 days.",
    },
    {
      question: "What kind of training formats do you offer?",
      answer:
        "We offer:\n- Self-paced onboarding courses for different roles\n- Live sessions & monthly problem-solving sprints\n- Case-based learning library (one real-world scenario each month)\n\nAll training is available online, and can be customized for your team.",
    },
    {
      question: "Can we hire for short-term or project-based needs?",
      answer:
        "Absolutely. Our temporary hiring model helps you bring in specialists (campaign managers, outbound experts, etc.) on an hourly or weekly basis — perfect for urgent skill gaps or pilot projects.",
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
