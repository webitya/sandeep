"use client";

import { motion } from "framer-motion";
import { 
  BusinessCenter, 
  CheckCircle, 
  Email, 
  Groups, 
  Insights, 
  LightbulbOutline, 
  MonetizationOn, 
  Phone, 
  Psychology, 
  School, 
  Share, 
  Speed, 
  TrendingUp 
} from "@mui/icons-material";
import FooterEl from "@/Components/FooterEl";

export default function RemoteMarketingTeam() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideIn = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-5 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-5 left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-10 left-1/3 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
        
              <motion.h1 
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6"
                variants={fadeIn}
              >
                Hire a Remote Marketing Team for Lead Generation & Brand Building
              </motion.h1>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-md text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule a Consultation</span>
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="bg-white text-blue-700 border-2 border-blue-200 px-8 py-3.5 rounded-md text-lg font-medium hover:border-blue-300 transition-all shadow-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                </motion.button>
              </motion.div>
            </motion.div>
            <div className="md:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Marketing Dashboard Illustration */}
                <svg className="w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Dashboard Background */}
                  <rect x="50" y="50" width="400" height="300" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
                  
                  {/* Header Bar */}
                  <rect x="50" y="50" width="400" height="40" rx="16" fill="#0056b3"/>
                  <circle cx="75" cy="70" r="8" fill="#ffffff"/>
                  <circle cx="100" cy="70" r="8" fill="#ffffff" fillOpacity="0.6"/>
                  <circle cx="125" cy="70" r="8" fill="#ffffff" fillOpacity="0.3"/>
                  
                  {/* Left Sidebar */}
                  <rect x="50" y="90" width="80" height="260" fill="#f1f5f9"/>
                  <rect x="65" y="110" width="50" height="8" rx="4" fill="#0056b3" fillOpacity="0.7"/>
                  <rect x="65" y="130" width="50" height="8" rx="4" fill="#64748b"/>
                  <rect x="65" y="150" width="50" height="8" rx="4" fill="#64748b"/>
                  <rect x="65" y="170" width="50" height="8" rx="4" fill="#64748b"/>
                  <rect x="65" y="190" width="50" height="8" rx="4" fill="#64748b"/>
                  
                  {/* Main Content Area - Graph */}
                  <rect x="150" y="110" width="280" height="120" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  
                  {/* Graph Lines */}
                  <path d="M170 190L210 160L250 180L290 140L330 120L370 150" stroke="#0056b3" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="170" cy="190" r="4" fill="#0056b3"/>
                  <circle cx="210" cy="160" r="4" fill="#0056b3"/>
                  <circle cx="250" cy="180" r="4" fill="#0056b3"/>
                  <circle cx="290" cy="140" r="4" fill="#0056b3"/>
                  <circle cx="330" cy="120" r="4" fill="#0056b3"/>
                  <circle cx="370" cy="150" r="4" fill="#0056b3"/>
                  
                  {/* Graph Area */}
                  <path d="M170 190L210 160L250 180L290 140L330 120L370 150L370 190L170 190Z" fill="#0056b3" fillOpacity="0.1"/>
                  
                  {/* Graph Title */}
                  <rect x="160" y="120" width="80" height="8" rx="4" fill="#0f172a"/>
                  
                  {/* Stats Cards */}
                  <rect x="150" y="250" width="130" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="165" y="265" width="60" height="8" rx="4" fill="#64748b"/>
                  <rect x="165" y="285" width="100" height="12" rx="6" fill="#0f172a"/>
                  <rect x="165" y="310" width="40" height="8" rx="4" fill="#22c55e"/>
                  
                  <rect x="300" y="250" width="130" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="315" y="265" width="60" height="8" rx="4" fill="#64748b"/>
                  <rect x="315" y="285" width="100" height="12" rx="6" fill="#0f172a"/>
                  <rect x="315" y="310" width="40" height="8" rx="4" fill="#ef4444"/>
                  
                  {/* Decorative Elements */}
                  <circle cx="400" cy="100" r="15" fill="#0056b3" fillOpacity="0.1"/>
                  <circle cx="430" cy="130" r="10" fill="#0056b3" fillOpacity="0.1"/>
                  <circle cx="410" cy="150" r="5" fill="#0056b3" fillOpacity="0.1"/>
                </svg>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm">Case Studies</div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center text-blue-600">
                    <TrendingUp className="mr-2" />
                    <span className="font-semibold">ROI Focused</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert remote marketing teams trained in real-world B2B scenarios. Our teams come equipped with:
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
              
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="text-blue-600 mb-6 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Insights className="text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-on Experience</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Trained with over 400+ case studies across various industries and business models.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
              
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="text-blue-600 mb-6 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <School className="text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deep Industry Knowledge</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Research-backed insights and strategies tailored to your specific market needs.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
              
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="text-blue-600 mb-6 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <TrendingUp className="text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Upskilling</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Our teams stay ahead with ongoing talent development and latest marketing trends.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
              
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="text-blue-600 mb-6 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Share className="text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Shared Resource Model</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Ideal for SMEs to cut costs while maintaining high-quality marketing operations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
              
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="text-blue-600 mb-6 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Psychology className="text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Analysis</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Continuous oversight and correction by seasoned marketing leaders.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Tailored Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Strategy That Fits You Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We tailor our approach based on your specific marketing challenges.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Strategy 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-xl text-white mb-4 md:mb-0 shadow-md">
                  <BusinessCenter className="text-3xl" />
                </div>
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-blue-700 mb-4 flex items-center"
                    variants={slideIn}
                  >
                    <span className="text-blue-500 mr-2">🔹</span>
                    Lack of Bandwidth
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-700 mb-6 italic border-l-4 border-blue-200 pl-4 bg-blue-50/50 py-2 rounded-r-md"
                    variants={slideIn}
                  >
                    "I don t have a dedicated marketing team. My sales team handles both ."
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg mb-6 border border-blue-100 shadow-sm"
                    variants={scaleUp}
                  >
                    <h4 className="text-xl font-semibold mb-3 text-blue-800">Strategy:</h4>
                    <p className="text-gray-700 mb-4">
                      Hire a trained remote team to handle:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-green-600 text-lg" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">LinkedIn, Google Ads, SEO</span>
                          <p className="text-gray-600 mt-1">Platform cost: ₹1L–₹3L/month, plus manpower</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-green-600 text-lg" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Targeted Email Marketing</span>
                          <p className="text-gray-600 mt-1">Low platform cost, high relevance in B2B, highly personalized outreach</p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Strategy 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-xl text-white mb-4 md:mb-0 shadow-md">
                  <Speed className="text-3xl" />
                </div>
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-blue-700 mb-4 flex items-center"
                    variants={slideIn}
                  >
                    <span className="text-blue-500 mr-2">🔹</span>
                    Poor Performance
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-700 mb-6 italic border-l-4 border-blue-200 pl-4 bg-blue-50/50 py-2 rounded-r-md"
                    variants={slideIn}
                  >
                    "I have a marketing team, but they are not performing."
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg mb-6 border border-blue-100 shadow-sm"
                    variants={scaleUp}
                  >
                    <h4 className="text-xl font-semibold mb-3 text-blue-800">Strategy:</h4>
                    <p className="text-gray-700">
                      Outsource to us for better ROI. We will audit, rebuild, and operate a high-performing demand generation system.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Strategy 3 */}
            <motion.div 
              className="bg-white p-8 rounded-xl !w-full shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6 flex-col md:flex-row !w-full">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-xl text-white mb-4 md:mb-0 shadow-md">
                  <MonetizationOn className="text-3xl" />
                </div>
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-blue-700 mb-4 flex items-center !w-full"
                    variants={slideIn}
                  >
                    <span className="text-blue-500 mr-2">🔹</span>
                    Weak Lead-to-Conversion Ratios
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-700 mb-6 italic border-l-4 border-blue-200 pl-4 bg-blue-50/50 py-2 rounded-r-md"
                    variants={slideIn}
                  >
                    "We re generating leads, but sales closures are low."
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 !w-full to-white p-6 rounded-lg mb-6 border border-blue-100 shadow-sm"
                    variants={scaleUp}
                  >
                    <h4 className="text-xl font-semibold mb-3 text-blue-800">Strategy:</h4>
                    <p className="text-gray-700 mb-4">
                      Strengthen value communication through content-led email campaigns:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                        <h5 className="font-semibold text-gray-800">Awareness</h5>
                        <p className="text-gray-600 mt-1">Educate and introduce</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                        <h5 className="font-semibold text-gray-800">Differentiation</h5>
                        <p className="text-gray-600 mt-1">Showcase competitive edge</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                        <h5 className="font-semibold text-gray-800">Success Stories</h5>
                        <p className="text-gray-600 mt-1">Share relevant case studies</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">4</div>
                        <h5 className="font-semibold text-gray-800">Full Value Communication</h5>
                        <p className="text-gray-600 mt-1">Highlight end-to-end impact</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">5</div>
                        <h5 className="font-semibold text-gray-800">ROI & Justification</h5>
                        <p className="text-gray-600 mt-1">Present financial value</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">6</div>
                        <h5 className="font-semibold text-gray-800">Best Practices</h5>
                        <p className="text-gray-600 mt-1">Share industry benchmarks</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        id="contact" 
        className="py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 z-0"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 p-5 rounded-full">
              <Phone className="text-5xl text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Lets Solve Your Marketing Bottlenecks</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Tell us which problem best describes your situation — and we will help you solve it with a trained team that delivers.
          </p>
          <motion.button 
            className="bg-white text-blue-600 px-10 py-4 rounded-md text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule a Free Strategy Call</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2 text-white">400+</div>
              <div className="text-white/80">Case Studies</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2 text-white">24/7</div>
              <div className="text-white/80">Expert Support</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2 text-white">3.5x</div>
              <div className="text-white/80">Average ROI</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
    <FooterEl/>
  </>
  );
}
