"use client"

import { useState } from "react"
import { BarChart3, CheckCircle, Clock, FileText, Users } from "lucide-react"

export default function Case2() {
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
              <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard Redesign</h2>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Completed</span>
            </div>

            <p className="text-gray-600">
              A comprehensive redesign of a SaaS analytics dashboard to improve data visualization, user experience, and
              decision-making capabilities for enterprise clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Timeline</h3>
                </div>
                <p className="text-gray-600 text-sm">4 months</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Industry</h3>
                </div>
                <p className="text-gray-600 text-sm">SaaS / Business Intelligence</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Target Users</h3>
                </div>
                <p className="text-gray-600 text-sm">Enterprise Data Analysts</p>
              </div>
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
                  The client's existing analytics dashboard was cluttered, slow, and difficult to navigate. Users
                  struggled to find important metrics and generate meaningful reports, leading to low adoption rates and
                  customer churn.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">
                  We conducted extensive user research with data analysts and decision-makers to understand their
                  workflows and pain points. The redesigned dashboard features customizable widgets, advanced filtering,
                  improved data visualization, and streamlined report generation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customizable dashboard with drag-and-drop widgets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced filtering and segmentation capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Interactive data visualizations with drill-down functionality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated report generation and scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "results" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">User Engagement</span>
                    <div className="flex items-center">
                      <span className="text-blue-700 font-medium mr-2">+68%</span>
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Report Generation</span>
                    <div className="flex items-center">
                      <span className="text-blue-700 font-medium mr-2">+42%</span>
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Dashboard Load Time</span>
                    <div className="flex items-center">
                      <span className="text-green-700 font-medium mr-2">-75%</span>
                      <BarChart3 className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-800 mb-2">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customer retention improved by 32%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support tickets related to dashboard reduced by 45%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Enterprise plan upgrades increased by 28%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Net Promoter Score improved from 34 to 72</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
