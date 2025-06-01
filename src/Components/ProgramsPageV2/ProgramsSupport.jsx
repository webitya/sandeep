"use client"

import { motion } from "framer-motion"
import { RefreshCw, Users, Briefcase } from "lucide-react"

export default function ProgramsSupport() {
  const supportFeatures = [
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      text: "Multiple interview cycles (we support 2nd, 3rd attempts if needed)",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "Strategic role-matching with our hiring partners",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      text: "Ongoing mentorship to help you succeed in your new role",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Comprehensive Career Support
            </h2>
            <p className="text-lg text-gray-700">
              Even if your first attempt at a leadership role doesn't succeed, we stay with you.
            </p>
          </div>

          {/* Two-column grid layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start bg-white/40 backdrop-blur-xl border border-white/30 p-10 rounded-2xl shadow-xl">
            {/* Left column: Features */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                You'll get career guidance, interview support, and access to leadership opportunities for up to 2 years, including:
              </h3>

              <div className="space-y-6">
                {supportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {feature.icon}
                    <p className="ml-3 text-gray-700">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right column: Commitment Box */}
            <div className="bg-green-100/40 border border-green-300/30 p-6 rounded-xl backdrop-blur-md h-full">
              <h4 className="font-bold text-xl mb-3 text-green-800">Our Commitment is Simple:</h4>
              <p className="text-gray-800">
                Your success is not defined by a certificate—it's measured by your transformation into a high-impact
                leader, placed in a role where you thrive.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
