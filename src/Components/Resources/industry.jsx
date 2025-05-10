"use client"

import React, { useState, useEffect } from "react"
import {
  Building2Icon,
  BriefcaseIcon,
  LightbulbIcon,
  LaptopIcon,
  ShoppingBagIcon,
  TruckIcon,
  ChevronRightIcon,
  SearchIcon,
  ArrowRightIcon,
  DownloadIcon,
  BarChart3Icon,
  UsersIcon,
  ClockIcon,
  CheckCircle2Icon,
} from "./icons"

// Industry data
const industryData = {
  technology: {
    title: "Technology",
    description: "Innovative solutions for tech companies",
    icon: LaptopIcon,
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    content:
      "We provide cutting-edge solutions for technology companies looking to stay ahead of the curve. Our services include software development, cloud migration, and digital transformation strategies.",
    stats: [
      { label: "Projects Completed", value: "200+", percentage: 85 },
      { label: "Client Satisfaction", value: "98%", percentage: 98 },
      { label: "Growth Rate", value: "35%", percentage: 35 },
    ],
    features: [
      "Custom software development",
      "Cloud infrastructure optimization",
      "DevOps implementation",
      "AI and machine learning integration",
      "Cybersecurity solutions",
    ],
    caseStudies: [
      {
        title: "Cloud Migration for SaaS Platform",
        result: "40% reduction in operational costs",
        duration: "3 months",
      },
    ],
  },
  finance: {
    title: "Finance",
    description: "Secure systems for financial institutions",
    icon: BriefcaseIcon,
    color: "from-emerald-500 to-green-600",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    content:
      "Our financial solutions prioritize security, compliance, and efficiency. We help banks, insurance companies, and fintech startups implement robust systems that protect sensitive data while improving customer experience.",
    stats: [
      { label: "Secure Transactions", value: "$2B+", percentage: 92 },
      { label: "Compliance Rate", value: "100%", percentage: 100 },
      { label: "Cost Reduction", value: "28%", percentage: 28 },
    ],
    features: [
      "Fraud detection systems",
      "Regulatory compliance solutions",
      "Digital banking platforms",
      "Investment management tools",
      "Blockchain integration",
    ],
    caseStudies: [
      {
        title: "Fraud Detection System for Online Banking",
        result: "85% improvement in threat detection",
        duration: "6 months",
      },
    ],
  },
  healthcare: {
    title: "Healthcare",
    description: "Patient-centered healthcare solutions",
    icon: LightbulbIcon,
    color: "from-red-500 to-rose-600",
    textColor: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    content:
      "We develop healthcare solutions that improve patient outcomes and streamline administrative processes. Our HIPAA-compliant systems help medical facilities focus on what matters most: patient care.",
    stats: [
      { label: "Patient Records", value: "1M+", percentage: 80 },
      { label: "Efficiency Increase", value: "42%", percentage: 42 },
      { label: "Implementation Time", value: "-30%", percentage: 70 },
    ],
    features: [
      "Electronic health record systems",
      "Telemedicine platforms",
      "Medical billing automation",
      "Patient engagement portals",
      "Healthcare analytics",
    ],
    caseStudies: [
      {
        title: "Telemedicine Platform for Regional Hospital",
        result: "65% increase in rural patient access",
        duration: "4 months",
      },
    ],
  },
  retail: {
    title: "Retail",
    description: "Omnichannel retail experiences",
    icon: ShoppingBagIcon,
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    content:
      "Our retail solutions bridge the gap between online and offline shopping experiences. We help retailers create seamless customer journeys that drive loyalty and increase sales across all channels.",
    stats: [
      { label: "Sales Increase", value: "45%", percentage: 45 },
      { label: "Customer Retention", value: "+38%", percentage: 38 },
      { label: "Inventory Accuracy", value: "99.8%", percentage: 99 },
    ],
    features: [
      "E-commerce platforms",
      "Inventory management systems",
      "Customer loyalty programs",
      "Point-of-sale solutions",
      "Personalized marketing tools",
    ],
    caseStudies: [
      {
        title: "Omnichannel Platform for Fashion Retailer",
        result: "52% increase in cross-channel sales",
        duration: "5 months",
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    description: "Optimized production processes",
    icon: TruckIcon,
    color: "from-amber-500 to-orange-600",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    content:
      "We help manufacturing companies optimize their production processes through automation, IoT integration, and data analytics. Our solutions reduce waste, improve quality control, and increase operational efficiency.",
    stats: [
      { label: "Production Increase", value: "32%", percentage: 32 },
      { label: "Defect Reduction", value: "78%", percentage: 78 },
      { label: "Energy Savings", value: "25%", percentage: 25 },
    ],
    features: [
      "IoT-enabled equipment monitoring",
      "Predictive maintenance systems",
      "Supply chain optimization",
      "Quality control automation",
      "Resource planning tools",
    ],
    caseStudies: [
      {
        title: "IoT Implementation for Automotive Manufacturer",
        result: "78% reduction in unplanned downtime",
        duration: "8 months",
      },
    ],
  },
  realestate: {
    title: "Real Estate",
    description: "Property management solutions",
    icon: Building2Icon,
    color: "from-cyan-500 to-teal-600",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    content:
      "Our real estate solutions streamline property management, tenant communication, and maintenance scheduling. We help property managers and real estate companies provide better service while reducing administrative overhead.",
    stats: [
      { label: "Properties Managed", value: "10K+", percentage: 90 },
      { label: "Maintenance Time", value: "-45%", percentage: 45 },
      { label: "Tenant Satisfaction", value: "92%", percentage: 92 },
    ],
    features: [
      "Property management platforms",
      "Virtual tour technologies",
      "Smart building integration",
      "Tenant portal solutions",
      "Real estate analytics",
    ],
    caseStudies: [
      {
        title: "Smart Building System for Commercial Properties",
        result: "32% reduction in energy costs",
        duration: "7 months",
      },
    ],
  },
}

// Custom Progress component
const Progress = ({ value = 0, className = "" }) => {
  return (
    <div className={`relative h-4 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

// Custom Button component
const Button = ({ children, className = "", variant = "default", size = "default", onClick = () => {} }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100",
    ghost: "bg-transparent hover:bg-slate-100",
    link: "text-slate-900 underline-offset-4 hover:underline bg-transparent",
  }

  const sizes = {
    default: "h-10 py-2 px-4 rounded-md text-sm",
    sm: "h-8 px-3 rounded-md text-xs",
    lg: "h-12 px-6 rounded-md text-base",
    icon: "h-10 w-10 rounded-full",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

// Custom Badge component
const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-slate-900 text-white",
    outline: "text-slate-800 border border-slate-200 bg-transparent",
    secondary: "bg-slate-100 text-slate-900",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default function Industry() {
  const [activeTab, setActiveTab] = useState("technology")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredIndustries, setFilteredIndustries] = useState(Object.keys(industryData))
  const [selectedView, setSelectedView] = useState("overview") // overview, features, case-studies
  const [isComparing, setIsComparing] = useState(false)
  const [compareList, setCompareList] = useState([])
  const [animateStats, setAnimateStats] = useState(false)

  // Filter industries based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredIndustries(Object.keys(industryData))
    } else {
      const filtered = Object.keys(industryData).filter(
        (key) =>
          industryData[key].title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          industryData[key].description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          industryData[key].content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredIndustries(filtered)

      // If current active tab is not in filtered results, select the first one
      if (filtered.length > 0 && !filtered.includes(activeTab)) {
        setActiveTab(filtered[0])
      }
    }
  }, [searchTerm, activeTab])

  // Animate stats when tab changes
  useEffect(() => {
    setAnimateStats(false)
    const timer = setTimeout(() => {
      setAnimateStats(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab, selectedView])

  // Handle compare toggle
  const toggleCompare = (industry) => {
    if (compareList.includes(industry)) {
      setCompareList(compareList.filter((item) => item !== industry))
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, industry])
      }
    }
  }

  return (
    <section className="pt-20 pb-5 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">


        {/* Search and Compare Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Search industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-sm text-slate-500">Compare Industries:</span>
            <Button
              variant={isComparing ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setIsComparing(!isComparing)
                if (!isComparing) {
                  setCompareList([activeTab])
                } else {
                  setCompareList([])
                }
              }}
              className={isComparing ? "bg-slate-800 hover:bg-slate-700" : ""}
            >
              {isComparing ? "Exit Compare" : "Compare"}
            </Button>
          </div>
        </div>

        {/* Compare Mode */}
        {isComparing ? (
          <div className="mb-8">
            <div className="bg-slate-100 p-4 rounded-lg mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-slate-700">Comparing:</span>
                {compareList.map((industry) => (
                  <Badge key={industry} className={`bg-gradient-to-r ${industryData[industry].color} text-white`}>
                    {industryData[industry].title}
                    <button className="ml-1 hover:opacity-80" onClick={() => toggleCompare(industry)}>
                      ×
                    </button>
                  </Badge>
                ))}
                {compareList.length < 3 && (
                  <span className="text-xs text-slate-500">
                    {compareList.length === 0
                      ? "Select up to 3 industries to compare"
                      : `Add ${3 - compareList.length} more`}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredIndustries.map((industry) => (
                <div
                  key={industry}
                  className={`bg-white rounded-lg shadow-sm border ${
                    compareList.includes(industry)
                      ? industryData[industry].borderColor +
                        " ring-2 ring-offset-2 " +
                        industryData[industry].borderColor
                      : "border-slate-200"
                  } transition-all hover:shadow-md`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${industryData[industry].bgColor}`}>
                          {React.createElement(industryData[industry].icon, {
                            className: `h-5 w-5 ${industryData[industry].textColor}`,
                          })}
                        </div>
                        <h3 className="font-semibold">{industryData[industry].title}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCompare(industry)}
                        className={
                          compareList.includes(industry)
                            ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                            : "text-slate-500"
                        }
                      >
                        {compareList.includes(industry) ? "Remove" : "Compare"}
                      </Button>
                    </div>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{industryData[industry].content}</p>

                    <div className="space-y-3">
                      {industryData[industry].stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="font-medium">{stat.label}</span>
                            <span className="font-bold">{stat.value}</span>
                          </div>
                          <Progress value={animateStats ? stat.percentage : 0} className="h-1.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Industry Tabs */}
            <div className="w-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex overflow-auto pb-2 justify-start h-auto space-x-2">
                  {filteredIndustries.map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-full border border-slate-200 transition-all ${
                        activeTab === key ? "text-black" : "bg-white hover:bg-slate-50"
                      }`}
                      style={{
                        background:
                          activeTab === key
                            ? `linear-gradient(to right, ${industryData[key].color.replace("from-", "").replace("to-", "")})`
                            : "",
                      }}
                    >
                      {React.createElement(industryData[key].icon, {
                        className: "h-4 w-4",
                      })}
                      <span className="text-sm font-medium whitespace-nowrap">{industryData[key].title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* View Selector */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-slate-100 p-1 rounded-lg">
                  <button
                    className={`px-4 py-2 text-sm rounded-md transition-all ${selectedView === "overview" ? "bg-white shadow-sm font-medium" : "text-slate-600 hover:text-slate-900"}`}
                    onClick={() => setSelectedView("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-md transition-all ${selectedView === "features" ? "bg-white shadow-sm font-medium" : "text-slate-600 hover:text-slate-900"}`}
                    onClick={() => setSelectedView("features")}
                  >
                    Features
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-md transition-all ${selectedView === "case-studies" ? "bg-white shadow-sm font-medium" : "text-slate-600 hover:text-slate-900"}`}
                    onClick={() => setSelectedView("case-studies")}
                  >
                    Case Studies
                  </button>
                </div>
              </div>

              {/* Content for each industry */}
              {Object.keys(industryData).map((key) => (
                <div key={key} className={`mt-0 ${activeTab === key ? "block" : "hidden"}`}>
                  {selectedView === "overview" && (
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div
                          className={`bg-gradient-to-br ${industryData[key].color} text-white p-8 md:p-12 rounded-t-lg md:rounded-l-lg md:rounded-tr-none relative overflow-hidden`}
                        >
                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                          <div className="relative z-10">
                            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-lg mb-6">
                              {React.createElement(industryData[key].icon, { className: "h-8 w-8" })}
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{industryData[key].title}</h3>
                            <p className="text-white/90 mb-8 text-lg">{industryData[key].content}</p>

                            <div className="grid grid-cols-3 gap-4">
                              {industryData[key].stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                  <div className="text-2xl font-bold">{stat.value}</div>
                                  <div className="text-xs text-white/80">{stat.label}</div>
                                  <div className="relative h-1 mt-2 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                      className="absolute top-0 left-0 h-full bg-white transition-all duration-1000 ease-out"
                                      style={{ width: animateStats ? `${stat.percentage}%` : "0%" }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-8 md:p-12 bg-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="text-xl font-semibold">Why Choose Our Solution</h4>
                            <Badge variant="outline" className="font-normal">
                              Industry Leader
                            </Badge>
                          </div>

                          <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full ${industryData[key].bgColor} flex items-center justify-center ${industryData[key].textColor}`}
                              >
                                <CheckCircle2Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="font-medium">Strategic Consulting</h5>
                                <p className="text-sm text-slate-600">
                                  Expert guidance tailored to your industry challenges
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full ${industryData[key].bgColor} flex items-center justify-center ${industryData[key].textColor}`}
                              >
                                <CheckCircle2Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="font-medium">Custom Development</h5>
                                <p className="text-sm text-slate-600">
                                  Tailored solutions designed for your specific needs
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full ${industryData[key].bgColor} flex items-center justify-center ${industryData[key].textColor}`}
                              >
                                <CheckCircle2Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="font-medium">Implementation Support</h5>
                                <p className="text-sm text-slate-600">
                                  Seamless integration with your existing systems
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full ${industryData[key].bgColor} flex items-center justify-center ${industryData[key].textColor}`}
                              >
                                <CheckCircle2Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="font-medium">Ongoing Maintenance</h5>
                                <p className="text-sm text-slate-600">
                                  Continuous support to ensure optimal performance
                                </p>
                              </div>
                            </li>
                          </ul>

                          <div className="mt-8 pt-6 border-t border-slate-100">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <h5 className="font-medium">Ready to transform your business?</h5>
                                <p className="text-sm text-slate-500">Get a customized solution today</p>
                              </div>
                              <Button
                                className={`bg-gradient-to-r ${industryData[key].color} hover:opacity-90 text-white`}
                              >
                                Request Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedView === "features" && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                          <ul className="space-y-4">
                            {industryData[key].features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <div
                                  className={`flex-shrink-0 w-8 h-8 rounded-full ${industryData[key].bgColor} flex items-center justify-center ${industryData[key].textColor}`}
                                >
                                  {idx + 1}
                                </div>
                                <span className="text-slate-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 pt-6 border-t border-slate-100">
                            <Button variant="outline" className="w-full">
                              Download Feature Sheet <DownloadIcon className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className={`bg-white rounded-lg shadow-sm border-l-4 ${industryData[key].borderColor}`}>
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <BarChart3Icon className={`h-5 w-5 ${industryData[key].textColor}`} />
                              <h4 className="font-semibold">Performance Metrics</h4>
                            </div>
                            <div className="space-y-4">
                              {industryData[key].stats.map((stat, idx) => (
                                <div key={idx} className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">{stat.label}</span>
                                    <span className="font-bold">{stat.value}</span>
                                  </div>
                                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${industryData[key].color} transition-all duration-1000 ease-out`}
                                      style={{ width: animateStats ? `${stat.percentage}%` : "0%" }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className={`bg-white rounded-lg shadow-sm border-l-4 ${industryData[key].borderColor}`}>
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <UsersIcon className={`h-5 w-5 ${industryData[key].textColor}`} />
                              <h4 className="font-semibold">Target Audience</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-600">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                <span>Enterprise organizations</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                <span>Mid-size businesses</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                <span>Growing startups</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className={`bg-white rounded-lg shadow-sm border-l-4 ${industryData[key].borderColor}`}>
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <ClockIcon className={`h-5 w-5 ${industryData[key].textColor}`} />
                              <h4 className="font-semibold">Implementation Timeline</h4>
                            </div>
                            <div className="relative pt-1">
                              <div className="flex mb-2 items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-slate-100 text-slate-600">
                                    Average: 3-6 months
                                  </span>
                                </div>
                              </div>
                              <div className="flex h-2 mb-4 overflow-hidden rounded bg-slate-100">
                                <div style={{ width: "30%" }} className="bg-slate-300"></div>
                                <div
                                  style={{ width: "40%" }}
                                  className={`bg-gradient-to-r ${industryData[key].color}`}
                                ></div>
                                <div style={{ width: "30%" }} className="bg-slate-200"></div>
                              </div>
                              <div className="flex text-xs justify-between">
                                <span>Discovery</span>
                                <span>Implementation</span>
                                <span>Optimization</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedView === "case-studies" && (
                    <div className="space-y-8">
                      <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/3">
                            <div
                              className={`w-full aspect-video rounded-lg bg-gradient-to-br ${industryData[key].color} flex items-center justify-center`}
                            >
                              {React.createElement(industryData[key].icon, { className: "h-16 w-16 text-white" })}
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <Badge
                              className={`mb-4 ${industryData[key].bgColor} ${industryData[key].textColor} border-none`}
                            >
                              Case Study
                            </Badge>
                            <h3 className="text-2xl font-bold mb-4">{industryData[key].caseStudies[0].title}</h3>
                            <p className="text-slate-600 mb-6">
                              A leading company in the {industryData[key].title.toLowerCase()} sector faced challenges
                              with outdated systems and inefficient processes. Our team implemented a comprehensive
                              solution that addressed their specific needs and transformed their operations.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                              <div className="bg-white p-4 rounded-lg border border-slate-100">
                                <div className="text-lg font-bold">{industryData[key].caseStudies[0].result}</div>
                                <div className="text-xs text-slate-500">Business Impact</div>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-slate-100">
                                <div className="text-lg font-bold">{industryData[key].caseStudies[0].duration}</div>
                                <div className="text-xs text-slate-500">Implementation Time</div>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-slate-100">
                                <div className="text-lg font-bold">ROI in 6 months</div>
                                <div className="text-xs text-slate-500">Return on Investment</div>
                              </div>
                            </div>

                            <Button
                              className={`bg-gradient-to-r ${industryData[key].color} hover:opacity-90 text-white`}
                            >
                              Read Full Case Study <ChevronRightIcon className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                          <div className="p-6">
                            <h4 className="font-semibold mb-2">The Challenge</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              The client struggled with legacy systems that couldn't scale with their growing business
                              needs, resulting in data silos and inefficient workflows.
                            </p>
                            <div
                              className={`w-full h-1 bg-gradient-to-r ${industryData[key].color} rounded-full`}
                            ></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                          <div className="p-6">
                            <h4 className="font-semibold mb-2">Our Approach</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              We developed a custom solution that integrated with their existing infrastructure while
                              modernizing critical components for improved performance.
                            </p>
                            <div
                              className={`w-full h-1 bg-gradient-to-r ${industryData[key].color} rounded-full`}
                            ></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                          <div className="p-6">
                            <h4 className="font-semibold mb-2">The Results</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              The implementation led to significant improvements in operational efficiency, cost
                              reduction, and enhanced customer satisfaction.
                            </p>
                            <div
                              className={`w-full h-1 bg-gradient-to-r ${industryData[key].color} rounded-full`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Industry?</h3>
            <p className="text-slate-300 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white !text-slate-900 hover:bg-white">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View All Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
