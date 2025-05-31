"use client"

import { motion } from "framer-motion"
import { Shield, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export default function RevenuePilotHero() {
  const guarantees = [
    { icon: <Shield className="w-5 h-5" />, text: "100% Success Guarantee" },
    { icon: <Target className="w-5 h-5" />, text: "Role-Ready Leaders" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Immediate Impact" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Guaranteed Sales Leadership Solution
              </motion.div>

              <motion.div
                className="text-6xl mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                💼
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  RevenuePilot
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl mb-8 text-green-100 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Trained Sales Leader to Pilot Your Growth.
                <span className="text-yellow-400 font-bold"> Guaranteed.</span>
              </motion.p>

              <motion.div
                className="bg-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                  The Sales Head Your Growth Deserves
                </h2>
                <p className="text-green-100 leading-relaxed">
                  Hiring a Head of Sales shouldn't feel like a gamble. With RevenuePilot, we help you recruit, onboard,
                  and empower a fully-trained sales leader—one who knows how to grow revenue, lead teams, and drive
                  execution from day one.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                    <div className="text-green-400 mr-2">{guarantee.icon}</div>
                    <span className="text-sm font-medium">{guarantee.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Get Your Sales Leader
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  View Success Stories
                </button>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6">What You Get</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Trained Sales Leader</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>12-Month Development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>9-Month Post-Hire Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Replacement Guarantee</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                    <div className="text-sm text-gray-300">Success Guarantee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
