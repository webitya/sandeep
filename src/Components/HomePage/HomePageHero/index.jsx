'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
} from '@mui/material';

export default function HomePageHeroSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'your_service_id', // replace with your EmailJS service ID
        'your_template_id', // replace with your EmailJS template ID
        form.current,
        'your_public_key' // replace with your EmailJS public key
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-50 flex justify-center items-center via-white to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-800">
            India’s Only Performance-First Talent Platform for Revenue Teams.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We help businesses from <span className="text-blue-700 font-semibold">₹1 Cr</span> to
            <span className="text-blue-700 font-semibold"> ₹1,000 Cr</span> to <strong>recruit</strong>, <strong>train</strong>, and <strong>grow</strong> sales and marketing talent to scale your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition"
            >
              <RocketLaunchIcon fontSize="small" />
              GET STARTED
            </a>
            <a
              href="/about-us"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              LEARN MORE
            </a>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/80 backdrop-blur-md border border-blue-100 p-6 rounded-2xl shadow-xl"
          >
            <Typography variant="h6" className="mb-4 text-gray-800 font-semibold">
              Quick Inquiry
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
              gap={2}
            >
              <TextField
                label="Name"
                name="name"
                required
                fullWidth
                size="small"
              />
              <TextField
                label="Business Email"
                name="email"
                type="email"
                required
                fullWidth
                size="small"
              />
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                required
                fullWidth
                size="small"
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                label="Hiring Requirement"
                name="hiring_requirement"
                required
                select
                fullWidth
                size="small"
                sx={{ gridColumn: 'span 2' }}
              >
                <MenuItem value="Sales and marketing Leadership team">
                  Sales and marketing Leadership team
                </MenuItem>
                <MenuItem value="Client facing Team">
                  Client facing Team
                </MenuItem>
              </TextField>
              <TextField
                label="Count"
                name="count"
                required
                select
                fullWidth
                size="small"
              >
                {[...Array(10)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
                <MenuItem value="10+">10+</MenuItem>
              </TextField>
              <TextField
                label="Budget"
                name="budget"
                required
                select
                fullWidth
                size="small"
              >
                <MenuItem value="10 to 15 lakhs">10 to 15 lakhs</MenuItem>
                <MenuItem value="15 to 25 lakhs">15 to 25 lakhs</MenuItem>
                <MenuItem value="25+ lakhs">25+ lakhs</MenuItem>
              </TextField>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, fontWeight: 'bold', py: 1.2 }}
            >
              DROP YOUR ENQUIRY
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
