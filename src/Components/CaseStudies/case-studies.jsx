"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Case1 from "./cases/case1"
import Case2 from "./cases/case2"
import Case3 from "./cases/case3"
import Case4 from "./cases/case4"

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0)

  const cases = [
    { id: 0, title: "Case Study 1", component: <Case1 /> },
    { id: 1, title: "Case Study 2", component: <Case2 /> },
    { id: 2, title: "Case Study 3", component: <Case3 /> },
    { id: 3, title: "Case Study 4", component: <Case4 /> },
  ]

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? cases.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveTab((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Case Studies</h2>
          <p className="text-gray-600">Explore our recent projects and success stories</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            {cases.map((caseItem, index) => (
              <button
                key={caseItem.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === index ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {caseItem.title}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            <button onClick={handlePrev} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={handleNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 min-h-[400px]">{cases[activeTab].component}</div>
      </div>
    </section>
  )
}
