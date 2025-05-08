"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, FileText, Smartphone } from "lucide-react"

export default function Case3() {
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
              <h2 className="text-2xl font-bold text-gray-800">Mobile Banking App</h2>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Completed</span>
            </div>

            <p className="text-gray-600">
              A modern, secure mobile banking application designed to provide customers with seamless access to their
              accounts, transactions, and financial services on the go.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Timeline</h3>
                </div>
                <p className="text-gray-600 text-sm">6 months</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Industry</h3>
                </div>
                <p className="text-gray-600 text-sm">Banking / Financial Services</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Platforms</h3>
                </div>
                <p className="text-gray-600 text-sm">iOS and Android</p>
              </div>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View App Screenshots <ArrowRight className="ml-2 h-4 w-4" />
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
                  The client, a regional bank, needed to modernize their digital banking experience to meet customer
                  expectations and compete with fintech startups. Their existing mobile app was outdated, had limited
                  functionality, and received poor user reviews.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">
                  We developed a comprehensive mobile banking solution with a focus on security, usability, and
                  performance. The app features biometric authentication, real-time transaction monitoring, budgeting
                  tools, and seamless integration with the bank's core systems.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Security</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Biometric authentication (Face ID/Touch ID)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">End-to-end encryption</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fraud detection and alerts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Account Management</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Real-time balance and transaction history</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Bill payments and transfers</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Check deposit via camera</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Financial Tools</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Spending categorization and analysis</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Budget creation and tracking</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Savings goals and progress tracking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Customer Support</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">In-app chat support</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Secure document upload</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Branch and ATM locator</span>
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
                <h3 className="text-lg font-medium text-green-800 mb-2">App Performance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Over 100,000 downloads in the first month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">4.8/5 average rating on app stores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">85% reduction in app crashes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">40% faster transaction processing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">62% increase in mobile banking adoption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">35% reduction in branch transaction costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">28% increase in customer satisfaction scores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">15% growth in new account openings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Client Testimonial</h3>
              <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                "The new mobile banking app has transformed how our customers interact with our bank. The intuitive
                design and robust feature set have exceeded our expectations and positioned us as a digital leader in
                our market."
              </blockquote>
              <p className="text-gray-700 font-medium mt-2">- Chief Digital Officer, Regional Bank</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
