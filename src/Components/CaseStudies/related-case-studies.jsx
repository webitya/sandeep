"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "./data/case-studies"

export default function RelatedCaseStudies({ currentCaseId, industry }) {
  const [relatedCases, setRelatedCases] = useState([])

  useEffect(() => {
    // Find related case studies based on industry or tags
    const related = caseStudies.filter((cs) => cs.id !== currentCaseId && cs.industry === industry).slice(0, 3)

    setRelatedCases(related)
  }, [currentCaseId, industry])

  if (relatedCases.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedCases.map((caseStudy) => (
        <div
          key={caseStudy.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${caseStudy.imageUrl || "/placeholder.svg?height=300&width=500"})` }}
          ></div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{caseStudy.description}</p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Case Study <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
