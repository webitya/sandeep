"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RevenuePilotHero() {
  const guarantees = [
    { icon: <Shield className="w-5 h-5" />, text: "100% Success Guarantee" },
    { icon: <Target className="w-5 h-5" />, text: "Role-Ready Leaders" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Immediate Impact" },
  ];

  return (
    <section className="relative min-h-screen bg-white text-gray-900 overflow-hidden border-t py-5 border-gray-200">
      <div className="relative container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Empower Your Growth with a Trained Sales Leader.
                <span className="text-blue-600 font-bold"> Guaranteed.</span>
              </motion.p>

              <motion.div
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
                  Strategic Sales Leadership from Day One
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Say goodbye to hiring uncertainties. With RevenuePilot, you gain a professionally trained sales head ready to drive revenue, lead teams, and implement strategy from day one.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-md p-3">
                    <div className="text-blue-500 mr-2">{guarantee.icon}</div>
                    <span className="text-sm font-medium text-gray-800">{guarantee.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/contact-us">
                <button className="group bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center">
                  Get Your Sales Leader
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>

                <Link href="/case-studies">
                <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition duration-300 border border-gray-300">
                  View Success Stories
                </button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-md">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-900">What You Get</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">Trained Sales Leader</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">12-Month Development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">9-Month Post-Hire Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">Replacement Guarantee</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-500">Success Guarantee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
