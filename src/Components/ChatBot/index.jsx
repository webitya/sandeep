"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Material UI Components
import {
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

// Material UI Icons
import ChatIcon from "@mui/icons-material/Chat"
import CloseIcon from "@mui/icons-material/Close"
import SendIcon from "@mui/icons-material/Send"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import LaunchIcon from "@mui/icons-material/Launch"

// Predefined Q&A database
const qnaDatabase = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer a range of services including web development, mobile app development, and digital marketing.",
    relatedQuestions: ["How much do your services cost?", "Do you offer maintenance?", "What technologies do you use?"],
  },
  {
    id: "2",
    question: "How much do your services cost?",
    answer: "Our pricing varies based on project requirements. We offer custom quotes after an initial consultation.",
    hasButtons: true,
    buttons: [{ text: "Request a quote", action: "request_quote" }],
    relatedQuestions: ["What services do you offer?", "How long does a project take?"],
  },
  {
    id: "3",
    question: "Do you offer maintenance?",
    answer: "Yes, we offer ongoing maintenance and support packages for all our projects.",
    hasLinks: true,
    links: [{ text: "View maintenance plans", url: "/maintenance" }],
    relatedQuestions: ["What services do you offer?", "How much do your services cost?"],
  },
  {
    id: "4",
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including React, Next.js, Node.js, and various other frameworks depending on project needs.",
    relatedQuestions: ["What services do you offer?", "How long does a project take?"],
  },
  {
    id: "5",
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites may take 2-4 weeks, while complex applications can take several months.",
    relatedQuestions: ["What services do you offer?", "How much do your services cost?"],
  },
  {
    id: "6",
    question: "How can I contact you?",
    answer: "You can reach us through our contact form, email, or phone.",
    hasLinks: true,
    links: [
      { text: "Contact page", url: "/contact" },
      { text: "Email us", url: "mailto:info@example.com" },
    ],
    relatedQuestions: ["What are your office hours?", "Where are you located?"],
  },
  {
    id: "7",
    question: "Request a quote",
    answer: "Please fill out our quote request form with your project details.",
    hasLinks: true,
    links: [{ text: "Quote request form", url: "/quote" }],
    relatedQuestions: ["How much do your services cost?", "What services do you offer?"],
  },
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: "0",
      type: "bot",
      text: "Hello! How can I help you today? Feel free to ask me anything or select from the suggested questions below.",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [relatedQuestions, setRelatedQuestions] = useState([
    "What services do you offer?",
    "How much do your services cost?",
    "How can I contact you?",
  ])

  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Find answer from database
  const findAnswer = (question) => {
    // First try exact match
    const exactMatch = qnaDatabase.find((item) => item.question.toLowerCase() === question.toLowerCase())

    if (exactMatch) return exactMatch

    // Then try partial match
    return qnaDatabase.find((item) => item.question.toLowerCase().includes(question.toLowerCase()))
  }

  // Handle sending a message
  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      text: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Find and add bot response
    const qnaItem = findAnswer(text)

    setTimeout(() => {
      if (qnaItem) {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: qnaItem.answer,
          hasLinks: qnaItem.hasLinks,
          hasButtons: qnaItem.hasButtons,
          links: qnaItem.links,
          buttons: qnaItem.buttons,
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
            text: "I'm sorry, I don't have information on that topic. Please try asking something else or select from the suggested questions below.",
          },
        ])
      }
    }, 500) // Small delay to simulate thinking
  }

  // Handle button actions
  const handleButtonAction = (action) => {
    const actionQuestion = qnaDatabase.find((item) => item.id === action || item.question === action)

    if (actionQuestion) {
      handleSendMessage(actionQuestion.question)
    } else {
      // Handle specific actions
      if (action === "request_quote") {
        handleSendMessage("Request a quote")
      }
    }
  }

  // Custom Material UI styles using inline styling for components
  const muiStyles = {
    chatToggleButton: {
      backgroundColor: "#1976d2",
      color: "white",
      width: "56px",
      height: "56px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#1565c0",
      },
    },
    chatPaper: {
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
    },
    userMessage: {
      backgroundColor: "#1976d2",
      color: "white",
      borderBottomRightRadius: "4px",
    },
    botMessage: {
      backgroundColor: "white",
      borderBottomLeftRadius: "4px",
    },
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
          className={`${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"} transition-all duration-300`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          color="primary"
          size="large"
          sx={muiStyles.chatToggleButton}
        >
          <ChatIcon fontSize="inherit" />
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
            className="absolute bottom-[70px] right-0 w-[360px] max-w-[90vw] max-h-[80vh] rounded-xl overflow-hidden"
          >
            <Paper sx={muiStyles.chatPaper} className="flex flex-col h-[500px] max-h-[80vh]">
              {/* Chat header */}
              <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <ChatIcon className="text-blue-600" />
                  <Typography variant="h6">Business Support</Typography>
                </div>
                <IconButton onClick={() => setIsOpen(false)} aria-label="Close chat" size="small">
                  <CloseIcon />
                </IconButton>
              </div>

              <Divider />

              {/* Messages area */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className={`mb-4 ${message.type === "user" ? "flex justify-end" : "flex justify-start"}`}
                    >
                      <Paper
                        elevation={1}
                        sx={message.type === "user" ? muiStyles.userMessage : muiStyles.botMessage}
                        className="max-w-[80%] px-4 py-3 rounded-xl shadow-sm"
                      >
                        <Typography variant="body1">{message.text}</Typography>

                        {/* Links in message */}
                        {message.hasLinks && message.links && (
                          <div className="mt-2 flex flex-col gap-1">
                            {message.links.map((link, index) => (
                              <Link href={link.url} key={index} className="no-underline">
                                <Button size="small" endIcon={<LaunchIcon />} variant="text" color="primary">
                                  {link.text}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Buttons in message */}
                        {message.hasButtons && message.buttons && (
                          <div className="mt-2 flex flex-col gap-1">
                            {message.buttons.map((button, index) => (
                              <Button
                                key={index}
                                onClick={() => handleButtonAction(button.action)}
                                variant="outlined"
                                color="primary"
                                size="small"
                                className="self-start"
                              >
                                {button.text}
                              </Button>
                            ))}
                          </div>
                        )}
                      </Paper>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Related questions */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <Typography variant="caption" color="textSecondary" className="block mb-2 text-gray-500">
                  Suggested Questions:
                </Typography>
                <List dense className="p-0">
                  {relatedQuestions.map((question, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="py-1 px-0 rounded hover:bg-blue-50 transition-colors"
                    >
                      <ListItemIcon className="min-w-[32px]">
                        <ArrowRightIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={question} primaryTypographyProps={{ variant: "body2", noWrap: true }} />
                    </ListItem>
                  ))}
                </List>
              </div>

              <Divider />

              {/* Input area */}
              <div className="flex items-center gap-2 p-4 bg-white md:flex-row flex-col">
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Type your question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(inputValue)
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="md:w-auto w-full h-10 whitespace-nowrap"
                >
                  Send
                </Button>
              </div>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
