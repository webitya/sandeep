"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, Globe, Users } from "lucide-react"

export default function Case4() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-3 font-medium text-sm ${
            activeTab === "overview" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`px-4 py-3 font-medium text-sm ${
            activeTab === "details" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Project Details
        </button>
        <button
          onClick={() => setActiveTab("results")}
          className={`px-4 py-3 font-medium text-sm ${
            activeTab === "results" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Results
        </button>
      </div>

      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Global E-Learning Platform</h2>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Completed</span>
            </div>

            <p className="text-gray-600">
              A comprehensive e-learning platform designed to deliver educational content to students worldwide, with
              support for multiple languages, payment systems, and learning formats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Timeline</h3>
                </div>
                <p className="text-gray-600 text-sm">8 months</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Reach</h3>
                </div>
                <p className="text-gray-600 text-sm">Global (12 languages)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Users</h3>
                </div>
                <p className="text-gray-600 text-sm">Students, Educators, Administrators</p>
              </div>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Platform Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Project Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Challenge</h3>
                <p className="text-gray-600">
                  An educational institution needed to expand its reach globally by creating an online learning platform
                  that could deliver courses to students worldwide. The platform needed to support multiple languages,
                  payment methods, and provide an engaging learning experience across different devices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">
                  We developed a scalable, cloud-based e-learning platform with a focus on accessibility,
                  internationalization, and interactive learning experiences. The platform includes course creation
                  tools, student progress tracking, assessment capabilities, and robust analytics for educators.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Content Delivery</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Video lectures with transcripts</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Interactive quizzes and assignments</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Downloadable resources</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">User Experience</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Responsive design for all devices</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Offline access to downloaded content</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Progress tracking and bookmarking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Global Features</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Support for 12 languages</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Multiple currency payment processing</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Region-specific content delivery</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Administration</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Comprehensive analytics dashboard</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">User management and permissions</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Content management system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "results" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-800 mb-2">Platform Growth</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Over 500,000 registered students in first year</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Expanded to 12 languages from initial 3</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Course library grew from 50 to 300+ courses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">95% platform uptime during peak usage periods</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Educational Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">87% course completion rate (industry avg: 65%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">92% of students reported improved knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Partnerships with 15 universities worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">42% of students accessed content on mobile devices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Client Testimonial</h3>
              <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                "This platform has revolutionized how we deliver education globally. The technical capabilities,
                combined with the intuitive user experience, have allowed us to reach students we never could before.
                The analytics have also given us unprecedented insights into learning patterns and content
                effectiveness."
              </blockquote>
              <p className="text-gray-700 font-medium mt-2">- Director of Digital Learning, Educational Institution</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
