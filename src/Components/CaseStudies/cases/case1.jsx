"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, FileText } from "lucide-react"

export default function Case1() {
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
              <h2 className="text-2xl font-bold text-gray-800">E-Commerce Platform Redesign</h2>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Completed</span>
            </div>

            <p className="text-gray-600">
              A complete overhaul of an outdated e-commerce platform for a retail client, focusing on improving user
              experience, mobile responsiveness, and conversion rates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Timeline</h3>
                </div>
                <p className="text-gray-600 text-sm">3 months</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Industry</h3>
                </div>
                <p className="text-gray-600 text-sm">Retail / E-commerce</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Services</h3>
                </div>
                <p className="text-gray-600 text-sm">UX/UI Design, Development</p>
              </div>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
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
                  The client's existing e-commerce platform was outdated, difficult to navigate, and not
                  mobile-friendly. This resulted in high bounce rates, abandoned carts, and declining sales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">
                  We conducted extensive user research and competitive analysis to redesign the entire shopping
                  experience. The new platform features a clean, intuitive interface, advanced search and filtering,
                  streamlined checkout, and responsive design for all devices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Stripe</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Algolia</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Sanity CMS</span>
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
                <h3 className="text-lg font-medium text-green-800 mb-2">Performance Improvements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">50% increase in page load speed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mobile traffic increased by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Server costs reduced by 40%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">28% increase in conversion rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">42% reduction in cart abandonment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">65% increase in average order value</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Client Testimonial</h3>
              <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                "The redesigned platform has completely transformed our online business. The user experience is
                exceptional, and the results speak for themselves with significant increases in sales and customer
                satisfaction."
              </blockquote>
              <p className="text-gray-700 font-medium mt-2">- Marketing Director, Client Company</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
