"use client"

import { motion } from "framer-motion"
import { Box, Container, Typography, Stack, Avatar, Paper, Divider } from "@mui/material"

export default function HomeProgramArchitecture() {
  const steps = [
    {
      number: "01",
      title: "Diagnostic & Goal Mapping",
      description: "Personalized assessment to identify your leadership strengths and growth areas",
    },
    {
      number: "02",
      title: "Strategy Modules (Simulation + Cases)",
      description: "Hands-on learning through real business scenarios and strategic frameworks",
    },
    {
      number: "03",
      title: "Sprint Assignments with Mentorship",
      description: "Apply your learning with guided support from industry experts",
    },
    {
      number: "04",
      title: "Placement Preparation",
      description: "Targeted coaching to position you for leadership roles",
    },
    {
      number: "05",
      title: "Career Launch + Ongoing Support",
      description: "Transition into your new role with continued guidance",
    },
  ]

  return (
    <Box component="section" py={12} sx={{ background: "linear-gradient(to bottom, #f9fafb, #e0e7ff)" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" mb={1}>
            Program Architecture
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" mb={6}>
            Inside the Learning Journey
          </Typography>
        </motion.div>

        <Stack spacing={0} sx={{ position: "relative" }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", position: "relative", mb: 3 }}>
                {/* Vertical connector line */}
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 28,
                      top: 60,
                      width: "2px",
                      height: "calc(100% - 60px)",
                      bgcolor: "primary.main",
                      opacity: 0.3,
                    }}
                  />
                )}

                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    width: 56,
                    height: 56,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    mr: 3,
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </Avatar>

                <Paper
                  elevation={3}
                  sx={{
                    p: 2.5,
                    backdropFilter: "blur(8px)",
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: 3,
                    flexGrow: 1,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
