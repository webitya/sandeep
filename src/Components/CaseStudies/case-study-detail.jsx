"use client"

import { useState } from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import PeopleIcon from "@mui/icons-material/People"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import PublicIcon from "@mui/icons-material/Public"
import GetAppIcon from "@mui/icons-material/GetApp"
import ShareIcon from "@mui/icons-material/Share"
import RelatedCaseStudies from "./related-case-studies"

export default function CaseStudyDetail({ caseStudy, onBack }) {
  const [activeTab, setActiveTab] = useState("overview")

  if (!caseStudy) return null

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${caseStudy.imageUrl || "/placeholder.svg?height=800&width=1200"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <button
              className="absolute top-4 left-4 bg-white/90 hover:bg-white border-none rounded-md px-3 py-1.5 text-sm font-medium flex items-center"
              onClick={onBack}
            >
              <ArrowBackIcon className="h-4 w-4 mr-1" /> Back to Case Studies
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                ${caseStudy.industry === "Finance" ? "bg-green-100 text-green-800" : ""}
                ${caseStudy.industry === "Healthcare" ? "bg-blue-100 text-blue-800" : ""}
                ${caseStudy.industry === "E-commerce" ? "bg-purple-100 text-purple-800" : ""}
                ${caseStudy.industry === "Education" ? "bg-yellow-100 text-yellow-800" : ""}
                ${caseStudy.industry === "Manufacturing" ? "bg-orange-100 text-orange-800" : ""}
                ${caseStudy.industry === "Technology" ? "bg-indigo-100 text-indigo-800" : ""}
                ${caseStudy.industry === "Retail" ? "bg-pink-100 text-pink-800" : ""}
              `}
              >
                {caseStudy.industry}
              </span>
              {caseStudy.tags &&
                caseStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 text-gray-800 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{caseStudy.title}</h1>
            <p className="text-lg text-gray-200 max-w-3xl">{caseStudy.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="w-full">
              <div className="w-full justify-start mb-8 bg-gray-100 p-1 rounded-md flex">
                <button
                  onClick={() => handleTabChange("overview")}
                  className={`flex-1 md:flex-none px-3 py-1.5 rounded-md text-sm font-medium ${
                    activeTab === "overview" ? "bg-white shadow" : "hover:bg-gray-200"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => handleTabChange("challenge")}
                  className={`flex-1 md:flex-none px-3 py-1.5 rounded-md text-sm font-medium ${
                    activeTab === "challenge" ? "bg-white shadow" : "hover:bg-gray-200"
                  }`}
                >
                  Challenge
                </button>
                <button
                  onClick={() => handleTabChange("solution")}
                  className={`flex-1 md:flex-none px-3 py-1.5 rounded-md text-sm font-medium ${
                    activeTab === "solution" ? "bg-white shadow" : "hover:bg-gray-200"
                  }`}
                >
                  Solution
                </button>
                <button
                  onClick={() => handleTabChange("results")}
                  className={`flex-1 md:flex-none px-3 py-1.5 rounded-md text-sm font-medium ${
                    activeTab === "results" ? "bg-white shadow" : "hover:bg-gray-200"
                  }`}
                >
                  Results
                </button>
                {caseStudy.testimonial && (
                  <button
                    onClick={() => handleTabChange("testimonial")}
                    className={`flex-1 md:flex-none px-3 py-1.5 rounded-md text-sm font-medium ${
                      activeTab === "testimonial" ? "bg-white shadow" : "hover:bg-gray-200"
                    }`}
                  >
                    Testimonial
                  </button>
                )}
              </div>

              {activeTab === "overview" && (
                <div className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <CalendarTodayIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Project Duration</h3>
                      </div>
                      <p className="text-gray-600">{caseStudy.duration}</p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <PeopleIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Client</h3>
                      </div>
                      <p className="text-gray-600">{caseStudy.client}</p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <PublicIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Industry</h3>
                      </div>
                      <p className="text-gray-600">{caseStudy.industry}</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <p className="text-gray-700 mb-6">{caseStudy.overview || caseStudy.description}</p>

                    {caseStudy.fullDescription && (
                      <div className="mb-6">
                        <p className="text-gray-700">{caseStudy.fullDescription}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies &&
                        caseStudy.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "challenge" && (
                <div className="mt-0">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-gray-700 mb-6">{caseStudy.challenge}</p>

                    {caseStudy.challengeDetails && (
                      <div className="mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Challenges</h3>
                        <ul className="space-y-2">
                          {caseStudy.challengeDetails.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "solution" && (
                <div className="mt-0">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                    <p className="text-gray-700 mb-6">{caseStudy.solution}</p>

                    {caseStudy.solutionDetails && (
                      <div className="mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Components</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {caseStudy.solutionDetails.map((detail, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                              <h4 className="font-semibold text-blue-800 mb-2">{detail.title}</h4>
                              <p className="text-gray-700 text-sm">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.implementation && (
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Approach</h3>
                        <p className="text-gray-700">{caseStudy.implementation}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "results" && (
                <div className="mt-0">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                        <h3 className="text-lg font-medium text-green-800 mb-3">Key Metrics</h3>
                        <ul className="space-y-3">
                          {caseStudy.results &&
                            caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{result}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {caseStudy.businessImpact && (
                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                          <h3 className="text-lg font-medium text-blue-800 mb-3">Business Impact</h3>
                          <ul className="space-y-3">
                            {caseStudy.businessImpact.map((impact, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {caseStudy.roi && (
                      <div className="bg-gray-50 p-5 rounded-lg mb-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-3">Return on Investment</h3>
                        <p className="text-gray-700">{caseStudy.roi}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "testimonial" && caseStudy.testimonial && (
                <div className="mt-0">
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                    <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 py-2 mb-4">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-900">{caseStudy.testimonial.author}</p>
                        <p className="text-sm text-gray-600">{caseStudy.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Case Study Information</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Services Provided</p>
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.services &&
                      caseStudy.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {service}
                        </span>
                      ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Project Timeline</p>
                  <p className="text-gray-700">{caseStudy.timeline || caseStudy.duration}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Team Size</p>
                  <p className="text-gray-700">{caseStudy.teamSize || "Not specified"}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4 pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Share this case study</h4>
                <div className="flex space-x-2">
                  <button className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium flex items-center justify-center hover:bg-gray-50">
                    <ShareIcon className="h-4 w-4 mr-1" /> Share
                  </button>
                  <button className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium flex items-center justify-center hover:bg-gray-50">
                    <GetAppIcon className="h-4 w-4 mr-1" /> Download
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4 pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Need a similar solution?</h4>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
          <RelatedCaseStudies currentCaseId={caseStudy.id} industry={caseStudy.industry} />
        </div>
      </div>
    </div>
  )
}
