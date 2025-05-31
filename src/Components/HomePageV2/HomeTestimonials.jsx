"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin, TrendingUp } from "lucide-react"

export default function HomeTestimonials() {
  const testimonials = [
    {
      quote: "The Sales Syllabus Academy program completely transformed my approach to leadership. Within 6 months of completing the program, I was promoted to Head of Sales at my company with a 180% salary increase.",
      name: "Rahul Sharma",
      title: "Head of Sales",
      company: "Tech Solutions Inc.",
      image: "/placeholder.svg",
      rating: 5,
      results: "180% salary increase",
      linkedin: "#",
    },
    {
      quote: "Unlike other programs that focus on theory, Sales Syllabus Academy gave me practical frameworks I could apply immediately. The ROI was evident within weeks, and our team's performance improved by 250%.",
      name: "Priya Patel",
      title: "Marketing Director",
      company: "Global Brands Ltd.",
      image: "/placeholder.svg",
      rating: 5,
      results: "250% team performance boost",
      linkedin: "#",
    },
    {
      quote: "As a founder, I needed to develop my leadership team quickly. The program provided exactly what we needed - practical, results-focused training that improved our bottom line by ₹2.5 Cr in the first year.",
      name: "Vikram Mehta",
      title: "Founder & CEO",
      company: "Growth Ventures",
      image: "/placeholder.svg",
      rating: 5,
      results: "₹2.5 Cr revenue impact",
      linkedin: "#",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  const prevTestimonial = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)

  useEffect(() => {
    const interval = setInterval(() => nextTestimonial(), 8000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-800 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Leaders Who’ve <span className="text-blue-600">Transformed</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from professionals achieving leadership excellence.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-md rounded-xl p-6 md:p-10 border border-gray-200"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />

                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
                      "{testimonials[current].quote}"
                    </blockquote>

                    <div className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonials[current].results}
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-4">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                      />
                      <a
                        href={testimonials[current].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-2 -right-2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>

                    <h4 className="text-lg font-semibold">{testimonials[current].name}</h4>
                    <p className="text-blue-600 text-sm">{testimonials[current].title}</p>
                    <p className="text-gray-500 text-sm">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      current === index ? "bg-blue-500 w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Logos
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-4">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-base font-medium">
            <span>Microsoft</span>
            <span>Google</span>
            <span>Amazon</span>
            <span>Flipkart</span>
            <span>Zomato</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
