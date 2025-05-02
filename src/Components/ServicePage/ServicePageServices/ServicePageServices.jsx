"use client"
import { motion } from "framer-motion"
import { Button, Card, CardContent } from "@mui/material"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import PeopleIcon from "@mui/icons-material/People"
import SchoolIcon from "@mui/icons-material/School"
import PsychologyIcon from "@mui/icons-material/Psychology"
import AssessmentIcon from "@mui/icons-material/Assessment"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const ServicePageServices = () => {
  const services = [
    {
      id: 1,
      title: "Talent Strategy & Workforce Planning",
      description: "We analyze your growth plans and build a strategic hiring roadmap.",
      includes: [
        "Culture mapping",
        "Revenue-linked skill planning",
        "Role prioritization (short-term vs long-term)",
        "Succession planning",
      ],
      icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      bestFor: "SME founders scaling from ₹1 Cr to ₹100 Cr+",
      timeline: "1–2 weeks",
      cta: "Book Strategy Session",
    },
    {
      id: 2,
      title: "Performance-Based Recruitment",
      description: "We don't just hire — we deliver performance-ready talent.",
      includes: [
        "Permanent hiring for core sales & marketing roles",
        "Temporary consultants to plug urgent skill gaps",
        "Domain-specific shortlists within 7 days",
        "Interview and onboarding support",
      ],
      icon: <PeopleIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      roles: [
        "Sales Head, Business Head and CEO – Top leadership",
        "BDRs, SDRs, AEs",
        "Sales Managers, Marketing Managers",
        "Digital Marketers, Content Strategists",
        "Telecallers, Campaign Operators",
      ],
      cta: "Request a Talent Call",
    },
    {
      id: 3,
      title: "Sales & Marketing Training Programs",
      description: "Customized onboarding and skill-building for your entire team.",
      includes: [
        "Role-specific onboarding (BDR, AE, Manager, etc.)",
        "Performance training for early-stage hires",
        "Real-world case study learning",
        "Monthly Problem-Solving Sprints",
        "Formats: Self-paced + Cohort-style",
      ],
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      additional: "Also includes access to Sales Syllabus Learning Library",
      cta: "See Training Plans",
    },
    {
      id: 4,
      title: "Founder & Leadership Advisory",
      description: "Work directly with experts to solve high-level sales/marketing challenges.",
      includes: [
        "Sales architecture consulting",
        "Hiring prioritization and delegation",
        "Branding and growth planning",
        "Access to exclusive founder-only playbooks",
      ],
      icon: <PsychologyIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      bestFor: "Founders of ₹3–₹20 Cr companies",
      cta: "Apply for Advisory Access",
    },
    {
      id: 5,
      title: "Revenue Team Audit & Optimization",
      description: "Not sure what's broken in your team? We'll diagnose it.",
      includes: [
        "Team skill mapping",
        "Process audit (inbound/outbound)",
        "Conversion and pipeline metrics",
        "Strategic fixes to improve output",
      ],
      icon: <AssessmentIcon sx={{ fontSize: 40, color: "#4f46e5" }} />,
      cta: "Request an Audit",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-gray-100 to-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <div className="inline-block bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            <MenuBookIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }} />
            <span className="text-indigo-800 font-medium text-sm">Deep-Dive Into Each Service</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Our Comprehensive Services
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-2 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Tailored solutions to help you build, scale, and optimize your revenue teams
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card
                elevation={0}
                className="overflow-hidden"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(241, 245, 249, 1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(224, 231, 255, 1)",
                  },
                }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-8 p-8 md:p-10">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mr-5">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">
                          {service.id}. {service.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-8 text-lg">{service.description}</p>

                      <div className="mb-8">
                        <h4 className="font-semibold text-slate-800 mb-4 text-lg">Includes:</h4>
                        <ul className="space-y-3">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.roles && (
                        <div className="mb-8">
                          <h4 className="font-semibold text-slate-800 mb-4 text-lg flex items-center">
                            <PeopleIcon
                              sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }}
                            />
                            Roles we hire:
                          </h4>
                          <ul className="space-y-3 pl-8">
                            {service.roles.map((role, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-slate-700 before:content-['•'] before:mr-2 before:text-indigo-400"
                              >
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.additional && (
                        <div className="mb-8">
                          <p className="text-slate-700 flex items-center p-4 bg-indigo-50 rounded-lg">
                            <SchoolIcon
                              sx={{ fontSize: 20, color: "#4f46e5", marginRight: "12px", verticalAlign: "middle" }}
                            />
                            {service.additional}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-4 bg-gradient-to-br from-slate-50 to-indigo-50 p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100">
                      {service.bestFor && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <BusinessCenterIcon
                              sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }}
                            />
                            Best for:
                          </h4>
                          <p className="text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                            {service.bestFor}
                          </p>
                        </div>
                      )}

                      {service.timeline && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <AccessTimeIcon
                              sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px", verticalAlign: "middle" }}
                            />
                            Timeline:
                          </h4>
                          <p className="text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                            {service.timeline}
                          </p>
                        </div>
                      )}

                      <div className="mt-auto">
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: "#4f46e5",
                            "&:hover": { backgroundColor: "#4338ca" },
                            padding: "12px 16px",
                            borderRadius: "8px",
                            textTransform: "none",
                            fontSize: "15px",
                            fontWeight: "bold",
                            boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)",
                          }}
                        >
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageServices
