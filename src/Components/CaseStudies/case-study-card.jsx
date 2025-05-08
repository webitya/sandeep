"use client"

import { Chip } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import BarChartIcon from "@mui/icons-material/BarChart"

export default function CaseStudyCard({ caseStudy, onClick }) {
  const getIndustryColor = (industry) => {
    switch (industry) {
      case "Finance":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Healthcare":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "E-commerce":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Education":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Manufacturing":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "Technology":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
      case "Retail":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col h-full"
      onClick={onClick}
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${caseStudy.imageUrl || "/placeholder.svg?height=400&width=600"})` }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className={getIndustryColor(caseStudy.industry) + " px-2 py-1 rounded text-xs font-medium"}>
            {caseStudy.industry}
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{caseStudy.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <CalendarTodayIcon className="h-4 w-4 mr-1" fontSize="inherit" />
          <span>{caseStudy.duration}</span>
        </div>

        {caseStudy.results && (
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <BarChartIcon className="h-4 w-4 text-blue-600 mr-1" fontSize="inherit" />
              <span className="text-sm font-medium text-gray-700">Key Results:</span>
            </div>
            <ul className="pl-5 text-sm text-gray-600">
              {caseStudy.results.slice(0, 2).map((result, index) => (
                <li key={index} className="list-disc">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-6 pb-6 mt-auto">
        <button
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
        >
          View Case Study <ArrowForwardIcon className="ml-1 h-4 w-4" fontSize="inherit" />
        </button>
      </div>
    </div>
  )
}
