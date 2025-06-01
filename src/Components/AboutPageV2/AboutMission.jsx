'use client'

import { motion } from "framer-motion"
import { Target, TrendingUp, Users } from "lucide-react"

export default function AboutMission() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#F9FAFB] via-[#F1F5F9] to-white text-gray-800 overflow-hidden">
      {/* Gradient Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[22rem] h-[22rem] bg-blue-100 rounded-full top-8 left-10 blur-[120px] opacity-30" />
        <div className="absolute w-[18rem] h-[18rem] bg-indigo-100 rounded-full bottom-0 right-10 blur-[100px] opacity-20" />
      </div>

      <motion.div
        className=" mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl text-gray-900 mb-6">
            Why We Exist
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We saw a critical gap: experienced professionals were hitting growth ceilings—not due to lack of effort,
            but because they lacked access to the right strategic exposure, frameworks, and leadership clarity.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Problem + Solution */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-red-700 mb-2">The Problem</h3>
              <p className="text-gray-700">Traditional institutions teach theory, not business reality.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-green-700 mb-2">Our Solution</h3>
              <p className="text-gray-700">We teach what actually works in business today—with strategic relevance.</p>
            </div>
          </div>

          {/* Value Points */}
          <div className="space-y-8">
            {[{
              Icon: Target,
              title: "Strategic Exposure",
              desc: "Real-world frameworks built from live business consulting challenges.",
              color: "from-blue-500 to-blue-700"
            }, {
              Icon: TrendingUp,
              title: "Leadership Clarity",
              desc: "Clear thinking pathways to develop executive-level decision-making.",
              color: "from-indigo-500 to-indigo-700"
            }, {
              Icon: Users,
              title: "Practical Application",
              desc: "Business strategies you can apply immediately within your role or company.",
              color: "from-emerald-500 to-emerald-700"
            }].map(({ Icon, title, desc, color }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
