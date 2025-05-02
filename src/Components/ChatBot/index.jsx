"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
} from "@mui/material"
import {
  Message as MessageIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  EmojiEvents as AwardIcon,
  Work as BriefcaseIcon,
  Event as CalendarIcon,
  ChevronRight as ChevronRightIcon,
  MenuBook as BookOpenIcon,
  Link as ExternalLinkIcon,
} from "@mui/icons-material"

// Comprehensive Q&A database for Sales Syllabus
const qnaDatabase = [
  // Home Page Questions
  {
    id: "1",
    question: "What does Sales Syllabus do?",
    answer:
      "Sales Syllabus is India's Only Performance-First Talent Platform for Revenue Teams. We help you recruit, train, and grow sales and marketing talent to scale your business from ₹1 Cr to ₹1,000 Cr.",
    category: "company",
    relatedQuestions: ["What services do you offer?", "How do you build revenue teams?", "What makes you different?"],
  },
  {
    id: "2",
    question: "What services do you offer?",
    answer:
      "We offer a complete ecosystem to build and manage high-performing sales & marketing teams, including Talent Strategy & Workforce Planning, Performance-Based Recruitment, Sales & Marketing Training Programs, Leadership & Founder Advisory, and Revenue Team Audits & Optimization.",
    category: "services",
    relatedQuestions: [
      "How does your recruitment work?",
      "What training programs do you offer?",
      "Do you offer temporary consultants?",
    ],
  },
  {
    id: "3",
    question: "How do you build revenue teams?",
    answer:
      "We follow a proven framework: 1) Culture Mapping - understanding your sales & marketing culture, 2) Revenue Goal Mapping - aligning goals with required skills, 3) Strategic Workforce Planning - defining the right talent mix, and 4) Talent Sourcing & Onboarding - finding and onboarding the right professionals.",
    category: "methodology",
    relatedQuestions: [
      "What is Culture Mapping?",
      "What types of hiring do you offer?",
      "How fast can we see results?",
    ],
  },
  {
    id: "4",
    question: "What types of hiring do you offer?",
    answer:
      "We offer two types of hiring: 1) Permanent Hires - full-time resources on your payroll aligned with long-term growth, and 2) Temporary Consultants - short-term or hourly basis professionals perfect for plugging skill gaps or project-based needs.",
    category: "recruitment",
    relatedQuestions: [
      "What roles can you help us hire?",
      "How fast can we see results?",
      "What's your guarantee on candidates?",
    ],
  },
  {
    id: "5",
    question: "What roles can you help us hire?",
    answer:
      "We hire for various roles including Sales Head, Business Head, CEO, BDRs, SDRs, AEs, Sales Managers, Marketing Managers, Digital Marketers, Content Strategists, Telecallers, and Campaign Operators.",
    category: "recruitment",
    relatedQuestions: [
      "What's your guarantee on candidates?",
      "How fast can we see results?",
      "Do you offer training?",
    ],
  },
  {
    id: "6",
    question: "What's your guarantee on candidates?",
    answer:
      "For permanent hires, we offer a 90-day replacement if the candidate leaves on their own. For temporary consultants, you only pay for actual working hours or deliverables.",
    category: "recruitment",
    relatedQuestions: [
      "How fast can we see results?",
      "What types of hiring do you offer?",
      "What roles can you help us hire?",
    ],
  },
  {
    id: "7",
    question: "How fast can we see results?",
    answer:
      "You receive your Culture Mapping Report within 7 days. Candidate shortlists begin in week two. Most clients see visible team performance improvements in the first 30-45 days.",
    category: "methodology",
    relatedQuestions: [
      "What's your guarantee on candidates?",
      "What is Culture Mapping?",
      "What types of hiring do you offer?",
    ],
  },
  {
    id: "8",
    question: "What is Culture Mapping?",
    answer:
      "Culture Mapping is where we attend 1-2 performance review meetings to understand your sales & marketing culture, leadership style, and team dynamics. This helps us align talent with your company culture for better performance.",
    category: "methodology",
    relatedQuestions: [
      "How do you build revenue teams?",
      "How fast can we see results?",
      "What types of hiring do you offer?",
    ],
  },
  {
    id: "9",
    question: "What training programs do you offer?",
    answer:
      "We offer customized onboarding and skill-building programs including role-specific onboarding, performance training for early-stage hires, real-world case study learning, and monthly problem-solving sprints. We offer both self-paced and cohort-style formats.",
    category: "training",
    relatedQuestions: [
      "Tell me about Sales Syllabus Academy",
      "Do you offer temporary consultants?",
      "What makes you different?",
    ],
  },
  {
    id: "10",
    question: "Tell me about Sales Syllabus Academy",
    answer:
      "Sales Syllabus Academy is the only preparatory platform for B2B business professionals to fast-track career growth using real-world case studies, frameworks, and proven industry insights. It offers role-specific learning paths, industry-tested frameworks, access to real business case studies, and skill gap assessments.",
    category: "academy",
    relatedQuestions: [
      "What training programs do you offer?",
      "What makes you different?",
      "What roles can you help us hire?",
    ],
  },
  {
    id: "11",
    question: "Do you offer temporary consultants?",
    answer:
      "Yes, our temporary hiring model helps you bring in specialists (campaign managers, outbound experts, etc.) on an hourly or weekly basis — perfect for urgent skill gaps or pilot projects.",
    category: "recruitment",
    relatedQuestions: [
      "What types of hiring do you offer?",
      "What roles can you help us hire?",
      "Tell me about your marketing support",
    ],
  },
  {
    id: "12",
    question: "Tell me about your marketing support",
    answer:
      "We offer Account-Based Marketing & Prospect Nurturing services that support your sales team with manual, personalized outreach designed to engage decision-makers and open sales conversations faster. This includes identifying ideal customer profiles, creating personalized email scripts, manual outreach campaigns, follow-ups, and weekly analytics.",
    category: "marketing",
    relatedQuestions: ["Is this mass email marketing?", "What tools do you use?", "Can you also help us close leads?"],
  },
  {
    id: "13",
    question: "Is this mass email marketing?",
    answer:
      "No. Every outreach is done manually with customized messaging for each segment or account. We avoid bulk mailers to ensure high deliverability and response.",
    category: "marketing",
    relatedQuestions: [
      "What tools do you use?",
      "Can you also help us close leads?",
      "Tell me about your marketing support",
    ],
  },
  {
    id: "14",
    question: "What tools do you use?",
    answer:
      "We use verified data sources and manual execution tools — avoiding bulk mailers to ensure high deliverability and response.",
    category: "marketing",
    relatedQuestions: [
      "Is this mass email marketing?",
      "Can you also help us close leads?",
      "Tell me about your marketing support",
    ],
  },
  {
    id: "15",
    question: "Can you also help us close leads?",
    answer:
      "Yes — we can connect our outreach with your sales hiring or training needs, if required. Our comprehensive approach ensures alignment between marketing outreach and sales execution.",
    category: "marketing",
    relatedQuestions: [
      "Tell me about your marketing support",
      "What training programs do you offer?",
      "What types of hiring do you offer?",
    ],
  },
  {
    id: "16",
    question: "What makes you different?",
    answer:
      "We stand out with our Performance-First Approach (focusing on building performing teams), Real-World Learning (using real business cases), Complete Sales & Marketing Support (offering 360° support), and experience with 100+ Organizations across various industries.",
    category: "company",
    relatedQuestions: [
      "How do you build revenue teams?",
      "Tell me about Sales Syllabus Academy",
      "What services do you offer?",
    ],
  },
  {
    id: "17",
    question: "Who do you work with?",
    answer:
      "We work with SME Founders (₹3 Cr–₹100 Cr revenue range), Sales & Marketing Leaders building high-output teams, HR Leaders investing in performance-based hiring, and early-stage to scaling startups looking for structured growth.",
    category: "company",
    relatedQuestions: ["What services do you offer?", "What makes you different?", "How do you build revenue teams?"],
  },
  {
    id: "18",
    question: "How can I contact Sales Syllabus?",
    answer:
      "You can book a free strategy call or contact us through our website. We're happy to discuss how we can help you build a high-performing sales and marketing team.",
    category: "contact",
    hasButtons: true,
    buttons: [{ text: "Book a Strategy Call", action: "book_call" }],
    relatedQuestions: ["What services do you offer?", "Who do you work with?", "What makes you different?"],
  },
  {
    id: "19",
    question: "Book a Strategy Call",
    answer:
      "Thank you for your interest! Please visit our website to schedule a convenient time for your free strategy call. We look forward to discussing your sales and marketing team needs.",
    category: "contact",
    hasLinks: true,
    links: [{ text: "Schedule Now", url: "/contact" }],
    relatedQuestions: ["What services do you offer?", "How do you build revenue teams?", "What makes you different?"],
  },
  // Services Page Questions
  {
    id: "20",
    question: "What is Talent Strategy & Workforce Planning?",
    answer:
      "Our Talent Strategy & Workforce Planning service analyzes your growth plans and builds a strategic hiring roadmap. It includes culture mapping, revenue-linked skill planning, role prioritization (short-term vs long-term), and succession planning. This service is best for SME founders scaling from ₹1 Cr to ₹100 Cr+ and typically takes 1-2 weeks.",
    category: "services",
    relatedQuestions: [
      "What is Performance-Based Recruitment?",
      "What is Sales & Marketing Training Programs?",
      "What is Founder & Leadership Advisory?",
    ],
  },
  {
    id: "21",
    question: "What is Performance-Based Recruitment?",
    answer:
      "Our Performance-Based Recruitment service delivers performance-ready talent, not just hires. It includes permanent hiring for core sales & marketing roles, temporary consultants to plug urgent skill gaps, domain-specific shortlists within 7 days, and interview and onboarding support. We hire for roles like Sales Head, Business Head, CEO, BDRs, SDRs, AEs, Sales Managers, Marketing Managers, Digital Marketers, Content Strategists, Telecallers, and Campaign Operators.",
    category: "recruitment",
    relatedQuestions: [
      "What is Talent Strategy & Workforce Planning?",
      "What is Sales & Marketing Training Programs?",
      "What is Revenue Team Audit & Optimization?",
    ],
  },
  {
    id: "22",
    question: "What is Sales & Marketing Training Programs?",
    answer:
      "Our Sales & Marketing Training Programs offer customized onboarding and skill-building for your entire team. This includes role-specific onboarding (BDR, AE, Manager, etc.), performance training for early-stage hires, real-world case study learning, and monthly problem-solving sprints. We offer both self-paced and cohort-style formats, and include access to the Sales Syllabus Learning Library.",
    category: "training",
    relatedQuestions: [
      "What is Performance-Based Recruitment?",
      "What is Founder & Leadership Advisory?",
      "Tell me about Sales Syllabus Academy",
    ],
  },
  {
    id: "23",
    question: "What is Founder & Leadership Advisory?",
    answer:
      "Our Founder & Leadership Advisory service allows you to work directly with experts to solve high-level sales/marketing challenges. It includes sales architecture consulting, hiring prioritization and delegation, branding and growth planning, and access to exclusive founder-only playbooks. This service is ideal for founders of ₹3-₹20 Cr companies.",
    category: "services",
    relatedQuestions: [
      "What is Talent Strategy & Workforce Planning?",
      "What is Revenue Team Audit & Optimization?",
      "Who do you work with?",
    ],
  },
  {
    id: "24",
    question: "What is Revenue Team Audit & Optimization?",
    answer:
      "Our Revenue Team Audit & Optimization service diagnoses what's broken in your team. It includes team skill mapping, process audit (inbound/outbound), conversion and pipeline metrics analysis, and strategic fixes to improve output.",
    category: "services",
    relatedQuestions: [
      "What is Performance-Based Recruitment?",
      "What is Founder & Leadership Advisory?",
      "How fast can we see results?",
    ],
  },
  {
    id: "25",
    question: "What engagement models do you offer?",
    answer:
      "We offer two main engagement models: 1) Single Project - best for specific hiring or training goals with a duration of 1-2 months, and 2) Monthly Engagement - best for companies scaling fast and needing recurring hiring, training, and consulting. The Monthly Engagement includes a dedicated talent advisor, access to learning platform, and quarterly strategy meets.",
    category: "services",
    relatedQuestions: [
      "What services do you offer?",
      "How fast can we see results?",
      "What's your guarantee on candidates?",
    ],
  },
  // Marketing Support Page Questions
  {
    id: "26",
    question: "What is Account-Based Marketing & Prospect Nurturing?",
    answer:
      "Our Account-Based Marketing & Prospect Nurturing service supports your sales team with manual, personalized outreach designed to engage decision-makers and open sales conversations faster. It includes identifying ideal customer profiles (ICPs), creating hyper-personalized email scripts, manual outreach campaigns (non-automated), follow-ups and lead qualification support, and weekly analytics on engagement and responses. This service is ideal for companies targeting large-value B2B accounts, founder-led sales teams needing qualified conversations, and teams with limited internal marketing bandwidth.",
    category: "marketing",
    relatedQuestions: ["Is this mass email marketing?", "What tools do you use?", "Can you also help us close leads?"],
  },
  {
    id: "27",
    question: "What outcomes can I expect from your marketing support?",
    answer:
      "From our Account-Based Marketing & Prospect Nurturing service, you can expect: 3X increase in lead engagement, warm pipeline for your sales team, less time wasted on unqualified leads, and consistent presence in target accounts' inboxes. The ultimate outcome is More Replies → More Calls → More Revenue.",
    category: "marketing",
    relatedQuestions: [
      "What is Account-Based Marketing & Prospect Nurturing?",
      "Is this mass email marketing?",
      "Can you also help us close leads?",
    ],
  },
  // Academy Page Questions
  {
    id: "28",
    question: "Why choose Sales Syllabus Academy?",
    answer:
      "Most professionals grow by trial and error — and lose valuable time, energy, and business in the process. Sales Syllabus Academy changes that by empowering professionals at every level — from executives to founders — with role-specific learning paths, industry-tested frameworks, access to real business case studies, and skill gap assessments and monthly updates. We don't teach theory. We prepare you to perform and lead.",
    category: "academy",
    relatedQuestions: [
      "What career tracks are available in the Academy?",
      "How does the Academy work?",
      "What is the Skill Gap Assessment?",
    ],
  },
  {
    id: "29",
    question: "What career tracks are available in the Academy?",
    answer:
      "Sales Syllabus Academy offers career tracks for various roles including: Founder / Co-founder, CEO / Business Owner, Business Head / Profit Center Head, Sales Head / VP of Sales, Regional Manager / Zonal Manager, Sales Manager, Area Manager / Team Leader, Senior Executive – Sales / BD, and Executive – Sales / BD. You can select the role you want to grow into and start learning what top performers at that level know and do.",
    category: "academy",
    relatedQuestions: [
      "Why choose Sales Syllabus Academy?",
      "How does the Academy work?",
      "What is the Skill Gap Assessment?",
    ],
  },
  {
    id: "30",
    question: "What is the Skill Gap Assessment?",
    answer:
      "The Skill Gap Assessment helps you know where you stand before you grow. It's an expert-designed assessment to identify your strengths and gaps compared to top performers in your desired role. The assessment is based on real-time business expectations, must-have vs. nice-to-have skills, and leadership, communication, and execution scores.",
    category: "academy",
    relatedQuestions: [
      "Why choose Sales Syllabus Academy?",
      "What career tracks are available in the Academy?",
      "How does the Academy work?",
    ],
  },
  {
    id: "31",
    question: "How does the Academy work?",
    answer:
      "The Academy works in four steps: 1) Choose Your Role - Get access to structured learning modules, case studies, and growth tools tailored to your next role. 2) Learn What Really Works - From sales playbooks to decision frameworks, everything is built from 100+ real client scenarios. 3) Practice and Reflect - Apply your learning in real-time. Improve monthly with assessments, challenges, and role upgrades. 4) Move to the Next Level - Track your progress and become eligible for promotions or hiring opportunities through our hiring ecosystem.",
    category: "academy",
    relatedQuestions: [
      "Why choose Sales Syllabus Academy?",
      "What career tracks are available in the Academy?",
      "Who is the Academy for?",
    ],
  },
  {
    id: "32",
    question: "Who is the Academy for?",
    answer:
      "The Academy is for early-stage professionals looking to break into high-growth roles, mid-level managers preparing for strategic leadership, founders & CEOs building sales/marketing leadership capabilities in-house, and companies investing in upskilling their frontline and mid-level teams.",
    category: "academy",
    relatedQuestions: [
      "Why choose Sales Syllabus Academy?",
      "What career tracks are available in the Academy?",
      "How does the Academy work?",
    ],
  },
  // About Us Page Questions
  {
    id: "33",
    question: "What is your vision?",
    answer:
      "Our vision is to empower every business to build performing sales and marketing teams that fuel predictable, sustainable growth. We believe great growth doesn't come from theory or luck — it comes from the right people, with the right mindset and skills, working under the right structure and strategy. We're here to help companies build that system — with less trial-and-error, and more clarity, speed, and precision.",
    category: "company",
    relatedQuestions: ["What makes you different?", "Who do you work with?", "What services do you offer?"],
  },
  // Additional FAQs
  {
    id: "34",
    question: "Do you help with only sales hiring, or marketing too?",
    answer:
      "We specialize in both sales and marketing hiring — because real growth happens when these functions work together. Whether you need BDRs, account executives, performance marketers, or brand strategists, we build complete revenue teams that perform.",
    category: "recruitment",
    relatedQuestions: [
      "What roles can you help us hire?",
      "What types of hiring do you offer?",
      "What's your guarantee on candidates?",
    ],
  },
  {
    id: "35",
    question: "Can we use only training services without hiring through you?",
    answer:
      "Yes. Many clients come to us with an existing team and want to upgrade performance through training. Our training programs are modular, case study-based, and tailored for B2B sales and marketing roles.",
    category: "training",
    relatedQuestions: [
      "What training programs do you offer?",
      "Tell me about Sales Syllabus Academy",
      "What is Sales & Marketing Training Programs?",
    ],
  },
  {
    id: "36",
    question: "Do you work with agencies, product companies, or traditional businesses?",
    answer:
      "Yes. We work across B2B SaaS, D2C brands, traditional manufacturing, and service companies. If your business has a clear growth goal and needs a better performing team, we can help — regardless of industry.",
    category: "company",
    relatedQuestions: ["Who do you work with?", "What services do you offer?", "What makes you different?"],
  },
  {
    id: "37",
    question: "What kind of training formats do you offer?",
    answer:
      "We offer self-paced onboarding courses for different roles, live sessions & monthly problem-solving sprints, and case-based learning library (one real-world scenario each month). All training is available online and can be customized for your team.",
    category: "training",
    relatedQuestions: [
      "What training programs do you offer?",
      "Tell me about Sales Syllabus Academy",
      "Can we use only training services without hiring through you?",
    ],
  },
  {
    id: "38",
    question: "Can we hire for short-term or project-based needs?",
    answer:
      "Absolutely. Our temporary hiring model helps you bring in specialists (campaign managers, outbound experts, etc.) on an hourly or weekly basis — perfect for urgent skill gaps or pilot projects.",
    category: "recruitment",
    relatedQuestions: [
      "What types of hiring do you offer?",
      "Do you offer temporary consultants?",
      "What roles can you help us hire?",
    ],
  },
  {
    id: "39",
    question: "What is Revenue Goal Mapping?",
    answer:
      "Revenue Goal Mapping is the second step in our proven framework where we align your revenue goals with the effort and skillsets required to achieve them — no guesswork. This helps ensure that your hiring and team structure directly supports your business objectives.",
    category: "methodology",
    relatedQuestions: [
      "What is Culture Mapping?",
      "What is Strategic Workforce Planning?",
      "How do you build revenue teams?",
    ],
  },
  {
    id: "40",
    question: "What is Strategic Workforce Planning?",
    answer:
      "Strategic Workforce Planning is the third step in our proven framework where we guide your hiring plan, defining the right mix of permanent and temporary talent, aligned with your budget and succession strategy. This ensures you have the right people at the right time for sustainable growth.",
    category: "methodology",
    relatedQuestions: [
      "What is Revenue Goal Mapping?",
      "What is Talent Sourcing & Onboarding?",
      "How do you build revenue teams?",
    ],
  },
  {
    id: "41",
    question: "What is Talent Sourcing & Onboarding?",
    answer:
      "Talent Sourcing & Onboarding is the fourth step in our proven framework where we find and onboard sales & marketing professionals — from full-time hires to specialist consultants — to plug skill gaps and accelerate growth. This ensures a smooth transition and quick productivity.",
    category: "methodology",
    relatedQuestions: [
      "What is Strategic Workforce Planning?",
      "What is Culture Mapping?",
      "How do you build revenue teams?",
    ],
  },
  {
    id: "42",
    question: "What is your execution process?",
    answer:
      "Our execution process consists of 5 steps: 1) Submit Your Requirements & Goals, 2) Receive Your Culture Mapping Report, 3) Approve the Effort & Skill Blueprint, 4) Finalize Hiring Structure (Permanent + Temporary), and 5) We Source, Screen, and Onboard Your Team.",
    category: "methodology",
    relatedQuestions: ["How do you build revenue teams?", "How fast can we see results?", "What is Culture Mapping?"],
  },
  {
    id: "43",
    question: "Do you also help with ongoing prospecting and outreach?",
    answer:
      "Yes. Our ABM support team helps you identify, engage, and nurture B2B prospects through manual, personalized email outreach. This helps your sales team focus on converting — not chasing.",
    category: "marketing",
    relatedQuestions: [
      "Tell me about your marketing support",
      "What is Account-Based Marketing & Prospect Nurturing?",
      "Is this mass email marketing?",
    ],
  },
  {
    id: "44",
    question: "What do your clients say about you?",
    answer:
      "Our clients speak highly of our services. For example, Rohit Verma, Founder of a B2B SaaS Startup, says 'With Sales Syllabus, we built a sales team that actually delivers. They understood our goals and gave us exactly the right people.' And Anita Desai, Director of a Manufacturing Company, says 'Their process feels like an extension of our leadership team. Highly strategic, deeply involved, and results-focused.'",
    category: "company",
    relatedQuestions: ["Who do you work with?", "What makes you different?", "How fast can we see results?"],
  },
]

// Category icons mapping
const categoryIcons = {
  company: <BriefcaseIcon fontSize="small" />,
  services: <CheckCircleIcon fontSize="small" />,
  methodology: <BarChartIcon fontSize="small" />,
  recruitment: <PeopleIcon fontSize="small" />,
  training: <BookOpenIcon fontSize="small" />,
  academy: <AwardIcon fontSize="small" />,
  marketing: <MessageIcon fontSize="small" />,
  contact: <CalendarIcon fontSize="small" />,
}

// Category colors mapping
const categoryColors = {
  company: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#90caf9",
  },
  services: {
    bg: "#e8f5e9",
    text: "#2e7d32",
    border: "#a5d6a7",
  },
  methodology: {
    bg: "#fff8e1",
    text: "#f57f17",
    border: "#ffe082",
  },
  recruitment: {
    bg: "#f3e5f5",
    text: "#7b1fa2",
    border: "#ce93d8",
  },
  training: {
    bg: "#fce4ec",
    text: "#c2185b",
    border: "#f48fb1",
  },
  academy: {
    bg: "#e8eaf6",
    text: "#3949ab",
    border: "#9fa8da",
  },
  marketing: {
    bg: "#e0f7fa",
    text: "#00838f",
    border: "#80deea",
  },
  contact: {
    bg: "#e8f5e9",
    text: "#2e7d32",
    border: "#a5d6a7",
  },
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: "0",
      type: "bot",
      text: "Hello! I'm the Sales Syllabus assistant. How can I help you build a high-performing sales and marketing team today?",
      category: "company",
      suggestedQuestions: [
        "What does Sales Syllabus do?",
        "What services do you offer?",
        "How do you build revenue teams?",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [relatedQuestions, setRelatedQuestions] = useState([
    "What does Sales Syllabus do?",
    "What services do you offer?",
    "How do you build revenue teams?",
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

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
          links: qnaItem.links,
          buttons: qnaItem.buttons,
          suggestedQuestions: qnaItem.relatedQuestions || [], // Add suggested questions to the bot message
        }

        setMessages((prev) => [...prev, botMessage])

        // Update related questions (we'll still keep this state for tracking purposes)
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
            text: "I don't have specific information on that topic. Would you like to know about our services, our approach to building revenue teams, or our training programs?",
            category: "company",
            suggestedQuestions: [
              "What services do you offer?",
              "How do you build revenue teams?",
              "Tell me about Sales Syllabus Academy",
            ],
          },
        ])

        // Reset to default related questions
        setRelatedQuestions([
          "What services do you offer?",
          "How do you build revenue teams?",
          "Tell me about Sales Syllabus Academy",
        ])
      }
      setIsTyping(false)
    }, 1000) // Small delay to simulate thinking
  }

  // Handle button actions
  const handleButtonAction = (action) => {
    const actionQuestion = qnaDatabase.find((item) => item.id === action || item.question === action)

    if (actionQuestion) {
      handleSendMessage(actionQuestion.question)
    } else {
      // Handle specific actions
      if (action === "book_call") {
        handleSendMessage("Book a Strategy Call")
      }
    }
  }

  // Get time for message timestamp
  const getMessageTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
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
            className="absolute bottom-[70px] right-0 w-[400px] max-w-[90vw] max-h-[80vh] rounded-xl overflow-hidden"
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
                    Sales Syllabus
                  </Typography>
                }
                subheader={
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
                    Business Growth Assistant
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

                          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                            {message.text}
                          </Typography>

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
                        <Avatar
                          sx={{
                            height: 32,
                            width: 32,
                            marginLeft: "8px",
                            marginTop: "4px",
                            backgroundColor: "#455a64",
                            display: { xs: "none", sm: "flex" },
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 600, color: "white" }}>
                            U
                          </Typography>
                        </Avatar>
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
                      <Avatar
                        sx={{
                          height: 32,
                          width: 32,
                          marginRight: "8px",
                          marginTop: "4px",
                          backgroundColor: "#1976d2",
                          display: { xs: "none", sm: "flex" },
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 600, color: "white" }}>
                          S
                        </Typography>
                      </Avatar>
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
                  ChatGPT can make mistakes. Consider checking important information.
                </Typography>
              </CardActions>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
