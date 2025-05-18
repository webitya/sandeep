"use client"

import { motion } from "framer-motion"
import { CloudDownload } from "@mui/icons-material"
import Image from "next/image"

export default function ResourceCard({ resource, onDownload }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
    >
      <div className="relative h-40">
        <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
        <button
          onClick={() => onDownload(resource)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium flex items-center justify-center transition-all duration-300"
        >
          <CloudDownload className="mr-2" />
          Download
        </button>
      </div>
    </motion.div>
  )
}
