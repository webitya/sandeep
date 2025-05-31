"use client"

import { motion } from "framer-motion"
import { Building2, Building } from "lucide-react"

export default function ProgramsTracks() {
  const tracks = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "SME Leadership Sprint",
      goal: "Become Head of Department in a high-growth SME",
      roles: ["Head of Sales", "Marketing Head", "Business Lead"],
      idealFor: "Professionals who want to lead across departments and make high-impact decisions",
      whyItWorks: "Prepares you for entrepreneurial leadership by making you business-aware and cross-functional.",
      color: "blue",
    },
    {
      icon: <Building className="w-12 h-12 text-green-600" />,
      title: "Corporate Leadership Sprint",
      goal: "Step into senior leadership roles in structured enterprises",
      roles: ["VP – Sales", "Marketing Director", "Business Unit Head"],
      idealFor: "Professionals aiming for strategic roles with scale, systems, and visibility",
      whyItWorks: "Designed for future CXOs through strategic exposure and top-management insights.",
      color: "green",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Track</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              className={`bg-${track.color}-50 border border-${track.color}-200 p-8 rounded-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                {track.icon}
                <h3 className="font-bold text-2xl ml-4">{track.title}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Goal:</h4>
                  <p className="text-gray-700">{track.goal}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className={`bg-${track.color}-100 text-${track.color}-800 px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Ideal For:</h4>
                  <p className="text-gray-700">{track.idealFor}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Why It Works:</h4>
                  <p className="text-gray-700">{track.whyItWorks}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
