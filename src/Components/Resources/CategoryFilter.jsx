"use client"

import { motion } from "framer-motion"

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-md flex items-center ${
            selectedCategory === category.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-all duration-300`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </motion.button>
      ))}
    </div>
  )
}
