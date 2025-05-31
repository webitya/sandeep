"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin } from "lucide-react"
import { TrendingUp } from "lucide-react"

export default function HomeTestimonials() {
  const testimonials = [
    {
      quote:
        "The Sales Syllabus Academy program completely transformed my approach to leadership. Within 6 months of completing the program, I was promoted to Head of Sales at my company with a 180% salary increase.",
      name: "Rahul Sharma",
      title: "Head of Sales",
      company: "Tech Solutions Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "180% salary increase",
      linkedin: "#",
    },
    {
      quote:
        "Unlike other programs that focus on theory, Sales Syllabus Academy gave me practical frameworks I could apply immediately. The ROI was evident within weeks, and our team's performance improved by 250%.",
      name: "Priya Patel",
      title: "Marketing Director",
      company: "Global Brands Ltd.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "250% team performance boost",
      linkedin: "#",
    },
    {
      quote:
        "As a founder, I needed to develop my leadership team quickly. The program provided exactly what we needed - practical, results-focused training that improved our bottom line by ₹2.5 Cr in the first year.",
      name: "Vikram Mehta",
      title: "Founder & CEO",
      company: "Growth Ventures",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "₹2.5 Cr revenue impact",
      linkedin: "#",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leaders Who've
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Transformed
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from professionals who took the leap to leadership excellence
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Quote Section */}
                  <div className="md:col-span-2">
                    <Quote className="w-12 h-12 text-blue-400 mb-6" />

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-100">
                      "{testimonials[current].quote}"
                    </blockquote>

                    {/* Results Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonials[current].results}
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-6">
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        className="w-24 h-24 rounded-full border-4 border-white/20"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2">{testimonials[current].name}</h4>
                    <p className="text-blue-300 font-medium mb-1">{testimonials[current].title}</p>
                    <p className="text-gray-400">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? "bg-blue-400 w-8" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">Flipkart</div>
            <div className="text-2xl font-bold">Zomato</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
