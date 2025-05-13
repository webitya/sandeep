"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Card, CardContent, MenuItem, Select, useMediaQuery } from "@mui/material"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import PeopleIcon from "@mui/icons-material/People"
import SchoolIcon from "@mui/icons-material/School"
import PsychologyIcon from "@mui/icons-material/Psychology"
import AssessmentIcon from "@mui/icons-material/Assessment"

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
    icon: <BusinessCenterIcon fontSize="large" color="primary" />,
    bestFor: "SME founders scaling from ₹1 Cr to ₹100 Cr+",
    timeline: "1–2 weeks",
    cta: "Book Strategy Session",
    ctaLink: "/book-strategy-session",
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
    icon: <PeopleIcon fontSize="large" color="primary" />,
    roles: [
      "Sales Head, Business Head and CEO – Top leadership",
      "BDRs, SDRs, AEs",
      "Sales Managers, Marketing Managers",
      "Digital Marketers, Content Strategists",
      "Telecallers, Campaign Operators",
    ],
    cta: "Request a Talent Call",
    ctaLink: "/request-talent-call",
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
    icon: <SchoolIcon fontSize="large" color="primary" />,
    additional: "Also includes access to Sales Syllabus Learning Library",
    cta: "See Training Plans",
    ctaLink: "/training-plans",
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
    icon: <PsychologyIcon fontSize="large" color="primary" />,
    bestFor: "Founders of ₹3–₹20 Cr companies",
    cta: "Apply for Advisory Access",
    ctaLink: "/advisory-access",
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
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    cta: "Request an Audit",
    ctaLink: "/request-audit",
  },
]

const ServicePageServices = () => {
  const [selectedService, setSelectedService] = useState(services[0])
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Our Comprehensive Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-2 rounded-full" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored solutions to help you build, scale, and optimize your revenue teams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tabs (Left Side) */}
          <div className="col-span-1">
            {isMobile ? (
              <Select
                fullWidth
                size="small"
                value={selectedService.id}
                onChange={(e) =>
                  setSelectedService(services.find((s) => s.id === e.target.value))
                }
              >
                {services.map((service) => (
                  <MenuItem key={service.id} value={service.id}>
                    {service.title}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-lg border font-medium transition-all ${
                      selectedService.id === service.id
                        ? "bg-indigo-100 border-indigo-500 text-indigo-800 font-semibold"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Service Content */}
          <div className="col-span-1 md:col-span-3">
            <Card
              elevation={0}
              className="overflow-hidden"
              sx={{
                borderRadius: "16px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(241, 245, 249, 1)",
              }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-50">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{selectedService.title}</h3>
                </div>
                <p className="text-slate-600 text-lg">{selectedService.description}</p>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Includes:</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    {selectedService.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {selectedService.roles && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                      <PeopleIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px" }} />
                      Roles we hire:
                    </h4>
                    <ul className="list-disc pl-6 text-slate-700 space-y-1">
                      {selectedService.roles.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedService.additional && (
                  <div className="bg-indigo-50 p-4 rounded-lg text-slate-700 flex items-center">
                    <SchoolIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "12px" }} />
                    {selectedService.additional}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.bestFor && (
                    <div className="bg-white p-4 rounded border border-slate-100 shadow-sm">
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                        <BusinessCenterIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px" }} />
                        Best for:
                      </h4>
                      <p className="text-slate-700">{selectedService.bestFor}</p>
                    </div>
                  )}

                  {selectedService.timeline && (
                    <div className="bg-white p-4 rounded border border-slate-100 shadow-sm">
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                        <AccessTimeIcon sx={{ fontSize: 20, color: "#4f46e5", marginRight: "8px" }} />
                        Timeline:
                      </h4>
                      <p className="text-slate-700">{selectedService.timeline}</p>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a href={selectedService.ctaLink}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#4f46e5",
                      "&:hover": { backgroundColor: "#4338ca" },
                      padding: "12px 20px",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: "bold",
                      boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)",
                    }}
                  >
                    {selectedService.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePageServices
