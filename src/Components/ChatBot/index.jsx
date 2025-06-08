"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Alert,
} from "@mui/material"
import {
  Message as MessageIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  People as PeopleIcon,
  EmojiEvents as AwardIcon,
  Work as BriefcaseIcon,
  ChevronRight as ChevronRightIcon,
  MenuBook as BookOpenIcon,
  Link as ExternalLinkIcon,
  Email as EmailIcon,
} from "@mui/icons-material"

// Comprehensive Q&A database for Sales Syllabus Academy
const qnaDatabase = [
  // Home Page Questions
  {
    id: "1",
    question: "What is Sales Syllabus Academy?",
    answer:
      "Sales Syllabus Academy is a leadership development platform crafted for experienced sales, marketing, and business professionals who want to break into top management. Our Mission: Create business-ready leaders. Our Difference: Case-based. ROI-driven. Leadership-focused.",
    category: "company",
    relatedQuestions: ["What sets you apart?", "Who is it for?", "Why choose us over ISB, IIM, or Harvard?"],
  },
  {
    id: "2",
    question: "What sets you apart?",
    answer:
      "• Real-World Intelligence: Our curriculum is built from 300+ consulting engagements, distilled into actionable learning. • Deep Market Research: We study fast-growth SMEs and large enterprises to identify what actually drives business outcomes. • Strategy-Led Learning: Every module is powered by business cases, frameworks, and real-time insights—not theory.",
    category: "company",
    relatedQuestions: ["What is Sales Syllabus Academy?", "Who is it for?", "What is The Next Phase program?"],
  },
  {
    id: "3",
    question: "Who is it for?",
    answer:
      "• Professionals with 10+ years in sales, marketing, or business roles • Aspiring managers and team leads preparing for promotion • Founders grooming their next line of leadership",
    category: "company",
    relatedQuestions: ["What is The Next Phase program?", "What sets you apart?", "How does the program work?"],
  },
  {
    id: "4",
    question: "Why choose us over ISB, IIM, or Harvard?",
    answer:
      "We offer a high-impact alternative to elite institutions, without the fluff: • Built by consultants, not professors • Powered by real-time business data, not outdated frameworks • Designed for working professionals seeking ROI, not just credentials. Learn. Earn. Lead—with Sales Syllabus Academy.",
    category: "company",
    relatedQuestions: ["What sets you apart?", "What is The Next Phase program?", "Who is it for?"],
  },
  {
    id: "5",
    question: "What is The Next Phase program?",
    answer:
      "Our Flagship Program: The 'Next Phase' - If your early learning got you into the game, 'Next Phase' gets you to the top. A practical, simulation-based leadership program designed to unlock your next level—with real business impact. This is not a short-term course. It's a 2-year career transformation journey with complete end-to-end support, from learning to leadership placement.",
    category: "programs",
    relatedQuestions: [
      "What support do you provide?",
      "What are the program tracks?",
      "How does the learning journey work?",
    ],
  },
  {
    id: "6",
    question: "What support do you provide?",
    answer:
      "We offer complete end-to-end support, ensuring you're not just job-ready—but role-ready. Even if your first attempt at a leadership role doesn't succeed, we stay with you. You'll get career guidance, interview support, and access to leadership opportunities for up to 2 years, including: • Multiple interview cycles (we support 2nd, 3rd attempts if needed) • Strategic role-matching with our hiring partners • Ongoing mentorship to help you succeed in your new role",
    category: "programs",
    relatedQuestions: [
      "What is The Next Phase program?",
      "What are the program tracks?",
      "How does the learning journey work?",
    ],
  },
  {
    id: "7",
    question: "What are the program tracks?",
    answer:
      "Choose Your Track: 1. SME Leadership Sprint - Goal: Become Head of Department in a high-growth SME (Head of Sales, Marketing Head, Business Lead). Ideal for professionals who want to lead across departments. 2. Corporate Leadership Sprint - Goal: Step into senior leadership roles in structured enterprises (VP – Sales, Marketing Director, Business Unit Head). Ideal for professionals aiming for strategic roles with scale, systems, and visibility.",
    category: "programs",
    relatedQuestions: [
      "What is The Next Phase program?",
      "How does the learning journey work?",
      "What support do you provide?",
    ],
  },
  {
    id: "8",
    question: "How does the learning journey work?",
    answer:
      "Inside the Learning Journey - A visual breakdown of the 2-year program: 1. Diagnostic & Goal Mapping 2. Strategy Modules (Simulation + Cases) 3. Sprint Assignments with Mentorship 4. Placement Preparation 5. Career Launch + Ongoing Support",
    category: "programs",
    relatedQuestions: [
      "What are the program tracks?",
      "What support do you provide?",
      "What is The Next Phase program?",
    ],
  },
  {
    id: "9",
    question: "What is RevenuePilot?",
    answer:
      "RevenuePilot - A Trained Sales Leader to Pilot Your Growth. Guaranteed. We help you recruit, onboard, and empower a fully-trained sales leader—one who knows how to grow revenue, lead teams, and drive execution from day one. We don't just find a candidate. We deliver a revenue pilot—guaranteed to work.",
    category: "services",
    relatedQuestions: [
      "What does a Sales Head deliver?",
      "What is your success guarantee?",
      "Who should use RevenuePilot?",
    ],
  },
  {
    id: "10",
    question: "What does a Sales Head deliver?",
    answer:
      "Our sales leaders come equipped to transform your growth engine: • Drive Aggressive Growth Culture across sales and marketing • Build Your Marketing Engine – lead generation, branding, and outreach • Design High-Performance Sales Processes – from lead to closure • Implement Performance Tracking for real-time team optimization • Recruit and Manage Sales & Marketing Teams with strategic clarity • Own Revenue Targets alongside the founder • Set Milestones and Scale Operations • Establish Second-Line Management, allowing founders to focus on strategic direction",
    category: "services",
    relatedQuestions: ["What is RevenuePilot?", "What is your success guarantee?", "Who should use RevenuePilot?"],
  },
  {
    id: "11",
    question: "What is your success guarantee?",
    answer:
      "100% Success Guarantee - We don't stop at hiring—we guarantee success. Every RevenuePilot engagement includes: • 12-month leadership development (role-specific, ROI-focused) • 9-month post-hire support: Strategic mentorship, Conflict resolution, Team alignment, Free replacement if required. No guesswork. No trial-and-error. Just results.",
    category: "services",
    relatedQuestions: ["What is RevenuePilot?", "What does a Sales Head deliver?", "Who should use RevenuePilot?"],
  },
  {
    id: "12",
    question: "Who should use RevenuePilot?",
    answer:
      "• SMEs planning to cross ₹5–200 Cr in revenue • Founders who've outgrown founder-led sales • Companies struggling with low-performance sales hires • Businesses looking for second-line leaders to scale operations",
    category: "services",
    relatedQuestions: ["What is RevenuePilot?", "What does a Sales Head deliver?", "What is your success guarantee?"],
  },
  // FAQ Questions
  {
    id: "13",
    question: "How is Sales Syllabus Academy different from traditional business schools?",
    answer:
      "Unlike academic institutions, our programs are built by sales and marketing consultants who've solved real business problems for 300+ companies. We focus on ROI, not just credentials—so you learn strategies that actually move revenue, teams, and business outcomes.",
    category: "faq",
    relatedQuestions: [
      "Who are your programs designed for?",
      "What kind of results can I expect?",
      "What makes your content real-world?",
    ],
  },
  {
    id: "14",
    question: "Who are your programs designed for?",
    answer:
      "Our programs are crafted for experienced sales, marketing, and business professionals—typically with 8–15 years of experience—who want to break stagnancy, lead cross-functional teams, and step into mid- to senior-level leadership roles in SMEs or corporates.",
    category: "faq",
    relatedQuestions: [
      "Do you provide placement support?",
      "What kind of results can I expect?",
      "Can your programs help me switch industries?",
    ],
  },
  {
    id: "15",
    question: "Do you provide placement support?",
    answer:
      "Yes. We offer high-value placement and career mentorship support for up to 2 years. This includes interview readiness, strategic career planning, and direct access to our hiring partners for leadership roles in both SMEs and large enterprises.",
    category: "faq",
    relatedQuestions: [
      "What kind of results can I expect?",
      "Who are your programs designed for?",
      "What makes your content real-world?",
    ],
  },
  {
    id: "16",
    question: "What kind of results can I expect?",
    answer:
      "Expect clarity in your leadership path, mastery over strategic execution, and stronger positioning for 2x–3x roles and salaries. Many of our learners have transitioned from operational roles to Head of Sales, Marketing Director, or Business Unit Head positions.",
    category: "faq",
    relatedQuestions: [
      "Do you provide placement support?",
      "What makes your content real-world?",
      "Can your programs help me switch industries?",
    ],
  },
  {
    id: "17",
    question: "What makes your content real-world?",
    answer:
      "All our content is derived from live consulting engagements, actual market trends, and deep research across fast-growth companies. You won't find outdated theory—instead, you'll get access to simulation-based sprints, case studies, and tools you can apply immediately.",
    category: "faq",
    relatedQuestions: [
      "Can your programs help me switch industries?",
      "What kind of results can I expect?",
      "How is Sales Syllabus Academy different from traditional business schools?",
    ],
  },
  {
    id: "18",
    question: "Can your programs help me switch industries?",
    answer:
      "Yes. Our strategic frameworks and leadership training are industry-agnostic but outcome-specific. Whether you aim to lead a sales team in SaaS, manufacturing, BFSI, or D2C—we equip you with universal leadership skills that accelerate cross-industry transitions.",
    category: "faq",
    relatedQuestions: [
      "What makes your content real-world?",
      "What kind of results can I expect?",
      "Who are your programs designed for?",
    ],
  },
  // About Us
  {
    id: "19",
    question: "Who built Sales Syllabus Academy?",
    answer:
      "Built by Sales and Marketing Experts. Designed for Future Leaders. Sales Syllabus Academy is the result of 300+ real-world consulting projects turned into a practical, ROI-driven learning ecosystem. We've worked deep inside India's fastest-growing SMEs and evolving enterprises, helping them solve complex sales and marketing challenges from the inside out.",
    category: "about",
    relatedQuestions: ["What is your consulting background?", "What makes you different?", "Why do you exist?"],
  },
  {
    id: "20",
    question: "What is your consulting background?",
    answer:
      "Our Consulting DNA - Before we built this Academy, we built outcomes. We've: • Re-engineered sales engines for high-growth companies • Transformed underperforming marketing teams into revenue drivers • Advised leadership on scaling teams, building GTM strategies, and driving profitability. This frontline experience powers every single learning module.",
    category: "about",
    relatedQuestions: ["Who built Sales Syllabus Academy?", "What makes you different?", "Why do you exist?"],
  },
  {
    id: "21",
    question: "Why do you exist?",
    answer:
      "We saw a critical gap: experienced professionals were hitting growth ceilings—not due to lack of effort, but because they lacked access to the right strategic exposure, frameworks, and leadership clarity. Traditional institutions teach theory. We teach what actually works in business today.",
    category: "about",
    relatedQuestions: [
      "What is your consulting background?",
      "What makes you different?",
      "Who built Sales Syllabus Academy?",
    ],
  },
  {
    id: "22",
    question: "Contact us",
    answer:
      "Ready to transform your career or find the right sales leader for your business? Let's discuss how Sales Syllabus Academy can help you achieve your goals.",
    category: "contact",
    hasContactForm: true,
    relatedQuestions: ["Book a free strategy session", "What is The Next Phase program?", "What is RevenuePilot?"],
  },
  {
    id: "23",
    question: "Book a free strategy session",
    answer:
      "Book a Free Strategy Session to discover the right leadership path for you or discuss how RevenuePilot can transform your revenue trajectory with a battle-ready sales leader.",
    category: "contact",
    hasContactForm: true,
    relatedQuestions: ["Contact us", "What is The Next Phase program?", "What is RevenuePilot?"],
  },
]

// Category icons mapping
const categoryIcons = {
  company: <BriefcaseIcon fontSize="small" />,
  programs: <AwardIcon fontSize="small" />,
  services: <CheckCircleIcon fontSize="small" />,
  faq: <BookOpenIcon fontSize="small" />,
  about: <PeopleIcon fontSize="small" />,
  contact: <EmailIcon fontSize="small" />,
}

// Category colors mapping
const categoryColors = {
  company: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#90caf9",
  },
  programs: {
    bg: "#e8eaf6",
    text: "#3949ab",
    border: "#9fa8da",
  },
  services: {
    bg: "#e8f5e9",
    text: "#2e7d32",
    border: "#a5d6a7",
  },
  faq: {
    bg: "#fce4ec",
    text: "#c2185b",
    border: "#f48fb1",
  },
  about: {
    bg: "#f3e5f5",
    text: "#7b1fa2",
    border: "#ce93d8",
  },
  contact: {
    bg: "#e0f7fa",
    text: "#00838f",
    border: "#80deea",
  },
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: "0",
      type: "bot",
      text: "Hello! I'm the Sales Syllabus Academy assistant. I can help you learn about our leadership development programs, RevenuePilot service, and how we can help you advance your career or build high-performing sales teams. How can I assist you today?",
      category: "company",
      suggestedQuestions: [
        "What is Sales Syllabus Academy?",
        "What is The Next Phase program?",
        "What is RevenuePilot?",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [relatedQuestions, setRelatedQuestions] = useState([
    "What is Sales Syllabus Academy?",
    "What is The Next Phase program?",
    "What is RevenuePilot?",
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)

  // Contact form states
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    problemStatement: "",
    message: "",
  })
  const [emailStatus, setEmailStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Initialize EmailJS (you'll need to replace these with your actual values)
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // Replace with your EmailJS public key
  }, [])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 300)
    }
  }, [isOpen])

  // Search function for real-time results
  const handleSearch = (query) => {
    setInputValue(query)

    if (query.length < 2) {
      setSearchResults([])
      setShowSearch(false)
      return
    }

    const results = qnaDatabase
      .filter(
        (item) =>
          item.question.toLowerCase().includes(query.toLowerCase()) ||
          item.answer.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5)

    setSearchResults(results)
    setShowSearch(results.length > 0)
  }

  // Find answer from database with improved matching
  const findAnswer = (question) => {
    // First try exact match
    const exactMatch = qnaDatabase.find((item) => item.question.toLowerCase() === question.toLowerCase())

    if (exactMatch) return exactMatch

    // Then try partial match on question
    const partialQuestionMatch = qnaDatabase.find((item) =>
      item.question.toLowerCase().includes(question.toLowerCase()),
    )

    if (partialQuestionMatch) return partialQuestionMatch

    // Try keyword matching in answers
    const keywords = question
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3) // Only use significant words

    if (keywords.length > 0) {
      // Find items that contain the most keywords
      const scoredItems = qnaDatabase
        .map((item) => {
          const answerLower = item.answer.toLowerCase()
          const matchCount = keywords.filter((word) => answerLower.includes(word)).length
          return { item, matchCount }
        })
        .filter(({ matchCount }) => matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)

      // Return the best match if any found
      if (scoredItems.length > 0) {
        return scoredItems[0].item
      }
    }

    // No good match found
    return null
  }

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setEmailStatus({ type: "", message: "" })

    try {
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        problem_statement: contactForm.problemStatement,
        message: contactForm.message,
        to_name: "Sales Syllabus Academy",
      }

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
      )

      setEmailStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      })

      // Reset form
      setContactForm({
        name: "",
        email: "",
        problemStatement: "",
        message: "",
      })

      // Close form after 3 seconds
      setTimeout(() => {
        setShowContactForm(false)
        setEmailStatus({ type: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setEmailStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle form input changes
  const handleContactFormChange = (field, value) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Handle sending a message
  const handleSendMessage = (text) => {
    if (!text.trim()) return

    setShowSearch(false)

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      text: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Find and add bot response
    const qnaItem = findAnswer(text)

    setTimeout(() => {
      if (qnaItem) {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: qnaItem.answer,
          category: qnaItem.category,
          hasLinks: qnaItem.hasLinks,
          hasButtons: qnaItem.hasButtons,
          hasContactForm: qnaItem.hasContactForm,
          links: qnaItem.links,
          buttons: qnaItem.buttons,
          suggestedQuestions: qnaItem.relatedQuestions || [],
        }

        setMessages((prev) => [...prev, botMessage])

        // Update related questions
        if (qnaItem.relatedQuestions) {
          setRelatedQuestions(qnaItem.relatedQuestions)
        }
      } else {
        // Default response if no match found
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            type: "bot",
            text: "I don't have specific information on that topic. Would you like to know about our leadership programs, RevenuePilot service, or get in touch with us directly?",
            category: "company",
            suggestedQuestions: ["What is The Next Phase program?", "What is RevenuePilot?", "Contact us"],
          },
        ])

        // Reset to default related questions
        setRelatedQuestions(["What is The Next Phase program?", "What is RevenuePilot?", "Contact us"])
      }
      setIsTyping(false)
    }, 1000)
  }

  // Handle button actions
  const handleButtonAction = (action) => {
    const actionQuestion = qnaDatabase.find((item) => item.id === action || item.question === action)

    if (actionQuestion) {
      handleSendMessage(actionQuestion.question)
    } else {
      // Handle specific actions
      if (action === "contact" || action === "book_call") {
        setShowContactForm(true)
      }
    }
  }

  // Get time for message timestamp
  const getMessageTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {/* Chat toggle button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute bottom-0 right-0 z-[51]"
        >
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              width: 56,
              height: 56,
              backgroundColor: isOpen ? "transparent" : "#1976d2",
              color: isOpen ? "transparent" : "white",
              boxShadow: isOpen ? "none" : "0 4px 20px rgba(0,0,0,0.15)",
              transform: isOpen ? "scale(0)" : "scale(1)",
              opacity: isOpen ? 0 : 1,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
            aria-label={isOpen ? "Close chat" : "Open chat"}
          >
            <MessageIcon fontSize="medium" />
          </IconButton>
        </motion.div>

        {/* Chat window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-[10px] right-0 w-[400px] max-w-[90vw] max-h-[80vh] rounded-xl overflow-hidden"
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "600px",
                  maxHeight: "80vh",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                {/* Chat header */}
                <CardHeader
                  sx={{
                    padding: "16px 20px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        border: "2px solid rgba(255,255,255,0.3)",
                        width: 40,
                        height: 40,
                      }}
                    >
                      S
                    </Avatar>
                  }
                  title={
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>
                      Sales Syllabus Academy
                    </Typography>
                  }
                  subheader={
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
                      Leadership Development Assistant
                    </Typography>
                  }
                  action={
                    <IconButton
                      onClick={() => setIsOpen(false)}
                      aria-label="Close chat"
                      sx={{ color: "white", "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  }
                />

                {/* Messages area */}
                <CardContent
                  sx={{
                    flex: 1,
                    padding: "16px",
                    overflowY: "auto",
                    backgroundColor: "#f5f7fa",
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "rgba(0,0,0,0.2)",
                      borderRadius: "6px",
                    },
                  }}
                >
                  <AnimatePresence initial={false}>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{
                          display: "flex",
                          justifyContent: message.type === "user" ? "flex-end" : "flex-start",
                          marginBottom: "16px",
                        }}
                      >
                        {message.type === "bot" && (
                          <Paper
                            elevation={0}
                            sx={{
                              maxWidth: "85%",
                              padding: "12px 16px",
                              borderRadius: "16px 16px 16px 0",
                              backgroundColor: "white",
                              color: "inherit",
                              border: "1px solid rgba(0,0,0,0.08)",
                            }}
                          >
                            {message.category && (
                              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px" }}>
                                <Chip
                                  icon={categoryIcons[message.category]}
                                  label={message.category.charAt(0).toUpperCase() + message.category.slice(1)}
                                  size="small"
                                  sx={{
                                    backgroundColor: categoryColors[message.category].bg,
                                    color: categoryColors[message.category].text,
                                    border: `1px solid ${categoryColors[message.category].border}`,
                                    fontWeight: 500,
                                    fontSize: "0.7rem",
                                    height: "20px",
                                  }}
                                />
                                <Typography variant="caption" color="text.secondary" sx={{ marginLeft: "4px" }}>
                                  {getMessageTime()}
                                </Typography>
                              </div>
                            )}

                            <Typography variant="body2" sx={{ lineHeight: 1.5, whiteSpace: "pre-line" }}>
                              {message.text}
                            </Typography>

                            {/* Contact Form Button */}
                            {message.hasContactForm && (
                              <div style={{ marginTop: "12px" }}>
                                <Button
                                  onClick={() => setShowContactForm(true)}
                                  variant="contained"
                                  startIcon={<EmailIcon />}
                                  sx={{
                                    backgroundColor: "#1976d2",
                                    color: "white",
                                    "&:hover": {
                                      backgroundColor: "#1565c0",
                                    },
                                    textTransform: "none",
                                    fontWeight: 500,
                                  }}
                                >
                                  Get in Touch
                                </Button>
                              </div>
                            )}

                            {/* Links in message */}
                            {message.hasLinks && message.links && (
                              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                                {message.links.map((link, index) => (
                                  <Link href={link.url} key={index} style={{ textDecoration: "none" }}>
                                    <Button
                                      variant="outlined"
                                      size="small"
                                      endIcon={<ExternalLinkIcon fontSize="small" />}
                                      sx={{
                                        backgroundColor: "#e3f2fd",
                                        borderColor: "#90caf9",
                                        color: "#1565c0",
                                        "&:hover": {
                                          backgroundColor: "#bbdefb",
                                          borderColor: "#42a5f5",
                                        },
                                        textTransform: "none",
                                        justifyContent: "flex-start",
                                        width: "100%",
                                      }}
                                    >
                                      {link.text}
                                    </Button>
                                  </Link>
                                ))}
                              </div>
                            )}

                            {/* Buttons in message */}
                            {message.hasButtons && message.buttons && (
                              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                                {message.buttons.map((button, index) => (
                                  <Button
                                    key={index}
                                    onClick={() => handleButtonAction(button.action)}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                      backgroundColor: "#e3f2fd",
                                      borderColor: "#90caf9",
                                      color: "#1565c0",
                                      "&:hover": {
                                        backgroundColor: "#bbdefb",
                                        borderColor: "#42a5f5",
                                      },
                                      textTransform: "none",
                                      alignSelf: "flex-start",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {button.text}
                                  </Button>
                                ))}
                              </div>
                            )}

                            {/* Suggested Questions */}
                            {message.suggestedQuestions && message.suggestedQuestions.length > 0 && (
                              <div style={{ marginTop: "16px" }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ fontWeight: 500, display: "block", marginBottom: "8px" }}
                                >
                                  Suggested Questions:
                                </Typography>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                  {message.suggestedQuestions.map((question, index) => (
                                    <Button
                                      key={index}
                                      onClick={() => handleSendMessage(question)}
                                      variant="text"
                                      startIcon={<ChevronRightIcon fontSize="small" />}
                                      sx={{
                                        justifyContent: "flex-start",
                                        textTransform: "none",
                                        color: "#1976d2",
                                        padding: "4px 8px",
                                        borderRadius: "8px",
                                        "&:hover": {
                                          backgroundColor: "#e3f2fd",
                                        },
                                        fontSize: "0.875rem",
                                        fontWeight: 400,
                                      }}
                                    >
                                      {question}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </Paper>
                        )}
                        {message.type === "user" && (
                          <Paper
                            elevation={0}
                            sx={{
                              maxWidth: "85%",
                              padding: "12px 16px",
                              borderRadius: "16px 16px 0 16px",
                              backgroundColor: "#1976d2",
                              color: "white",
                              marginLeft: "auto",
                            }}
                          >
                            <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                              {message.text}
                            </Typography>
                          </Paper>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginBottom: "16px",
                        }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            maxWidth: "85%",
                            padding: "12px 16px",
                            borderRadius: "16px 16px 16px 0",
                            backgroundColor: "white",
                            border: "1px solid rgba(0,0,0,0.08)",
                          }}
                        >
                          <div style={{ display: "flex", gap: "4px" }}>
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#42a5f5",
                                animation: "bounce 1.2s infinite",
                                animationDelay: "0ms",
                              }}
                            ></div>
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#42a5f5",
                                animation: "bounce 1.2s infinite",
                                animationDelay: "150ms",
                              }}
                            ></div>
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#42a5f5",
                                animation: "bounce 1.2s infinite",
                                animationDelay: "300ms",
                              }}
                            ></div>
                          </div>
                        </Paper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </CardContent>

                <Divider />

                {/* Input area */}
                <CardActions sx={{ padding: 0, flexDirection: "column" }}>
                  {/* Search results dropdown */}
                  {showSearch && searchResults.length > 0 && (
                    <Paper
                      elevation={0}
                      sx={{
                        width: "100%",
                        maxHeight: "200px",
                        overflowY: "auto",
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                        backgroundColor: "white",
                      }}
                    >
                      <List dense disablePadding>
                        {searchResults.map((result, index) => (
                          <ListItemButton
                            key={index}
                            sx={{
                              padding: "12px 16px",
                              borderBottom: index === searchResults.length - 1 ? "none" : "1px solid rgba(0,0,0,0.08)",
                            }}
                            onClick={() => handleSendMessage(result.question)}
                          >
                            <ListItemIcon sx={{ minWidth: "32px" }}>
                              <SearchIcon fontSize="small" color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2" sx={{ fontWeight: 500, color: "text.primary" }}>
                                  {result.question}
                                </Typography>
                              }
                              secondary={
                                <Typography variant="caption" noWrap sx={{ color: "text.secondary" }}>
                                  {result.answer.substring(0, 60)}...
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Paper>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "16px",
                      width: "100%",
                      backgroundColor: "#f5f7fa",
                      borderTop: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <TextField
                      inputRef={inputRef}
                      placeholder="Type your question..."
                      value={inputValue}
                      onChange={(e) => handleSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage(inputValue)
                        }
                      }}
                      fullWidth
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(0,0,0,0.12)",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(0,0,0,0.24)",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#1976d2",
                          },
                          height: "48px",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      startIcon={<SendIcon />}
                      sx={{
                        height: "48px",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: 500,
                        boxShadow: "none",
                        "&:hover": {
                          boxShadow: "none",
                        },
                      }}
                    >
                      Send
                    </Button>
                  </div>
                  <Typography
                    variant="caption"
                    align="center"
                    color="text.secondary"
                    sx={{
                      padding: "0 16px 12px 16px",
                      backgroundColor: "#f5f7fa",
                      width: "100%",
                    }}
                  >
                    Powered by Sales Syllabus Academy
                  </Typography>
                </CardActions>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onClose={() => setShowContactForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon color="primary" />
            <Typography variant="h6">Get in Touch</Typography>
          </Box>
        </DialogTitle>
        <form onSubmit={handleContactSubmit}>
          <DialogContent>
            {emailStatus.message && (
              <Alert severity={emailStatus.type} sx={{ mb: 2 }}>
                {emailStatus.message}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Your Name"
              value={contactForm.name}
              onChange={(e) => handleContactFormChange("name", e.target.value)}
              required
              margin="normal"
            />

            <TextField
              fullWidth
              label="Your Email"
              type="email"
              value={contactForm.email}
              onChange={(e) => handleContactFormChange("email", e.target.value)}
              required
              margin="normal"
            />

            <TextField
              fullWidth
              label="Problem Statement / What you're looking for"
              value={contactForm.problemStatement}
              onChange={(e) => handleContactFormChange("problemStatement", e.target.value)}
              required
              margin="normal"
              multiline
              rows={2}
              placeholder="e.g., Looking for leadership development, need sales team training, interested in RevenuePilot..."
            />

            <TextField
              fullWidth
              label="Additional Message"
              value={contactForm.message}
              onChange={(e) => handleContactFormChange("message", e.target.value)}
              margin="normal"
              multiline
              rows={3}
              placeholder="Tell us more about your specific needs or questions..."
            />
          </DialogContent>

          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setShowContactForm(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting || !contactForm.name || !contactForm.email || !contactForm.problemStatement}
              startIcon={isSubmitting ? null : <SendIcon />}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* CSS for bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  )
}
