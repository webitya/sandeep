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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Career Support</h2>
            <p className="text-lg text-gray-700 mb-8">
              Even if your first attempt at a leadership role doesn't succeed, we stay with you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">
              You'll get career guidance, interview support, and access to leadership opportunities for up to 2 years,
              including:
            </h3>

            <div className="space-y-4 mb-8">
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

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">Our Commitment is Simple:</h4>
              <p className="text-gray-700">
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
