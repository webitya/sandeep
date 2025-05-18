"use client"

import { useEffect, useState } from "react"

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Subtle animated gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-r from-transparent via-blue-50/40 to-transparent z-0" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div
          className={`lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Who We Are</h2>

          <div
            className={`space-y-4 transition-opacity duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-lg leading-relaxed text-slate-700 max-w-xl mx-auto lg:mx-0">
              We are a <span className="font-semibold">sales and marketing</span> consulting company with over 7 years
              of experience helping businesses solve one of their biggest challenges — the sales and marketing talent
              crunch.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 max-w-xl mx-auto lg:mx-0">
              Having worked with 100+ clients across diverse industries, we have developed a proven, data-driven
              approach to building and managing high-performing sales and marketing teams that deliver maximum return on
              investment.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 max-w-xl mx-auto lg:mx-0">
              Our comprehensive solution combines strategic sales planning, KPI design, performance tracking systems,
              and skill gap analysis to ensure every team we build is aligned, accountable, and continuously improving.
            </p>
          </div>
        </div>

        {/* SVG Illustration Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div
            className={`w-[350px] h-[350px] rounded-lg shadow-xl overflow-hidden bg-white p-6 transition-opacity duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <SalesMarketingSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

function SalesMarketingSVG() {
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background Elements */}
      <rect x="0" y="0" width="800" height="800" fill="#f8fafc" />
      <circle cx="400" cy="400" r="300" fill="#f1f5f9" />

      {/* Growth Chart */}
      <g transform="translate(150, 500) scale(0.8)">
        {/* Chart Base */}
        <rect x="0" y="0" width="600" height="4" fill="#94a3b8" />
        <rect x="0" y="-300" width="4" height="300" fill="#94a3b8" />

        {/* Chart Grid Lines */}
        <line x1="0" y1="-75" x2="600" y2="-75" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="-150" x2="600" y2="-150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </line>
        <line x1="0" y1="-225" x2="600" y2="-225" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
        </line>

        {/* Chart Bars with Animation */}
        <rect x="50" y="0" width="60" height="0" fill="#bfdbfe" rx="4">
          <animate attributeName="height" from="0" to="80" dur="1s" fill="freeze" begin="0.2s" />
          <animate attributeName="y" from="0" to="-80" dur="1s" fill="freeze" begin="0.2s" />
        </rect>
        <rect x="150" y="0" width="60" height="0" fill="#93c5fd" rx="4">
          <animate attributeName="height" from="0" to="120" dur="1s" fill="freeze" begin="0.4s" />
          <animate attributeName="y" from="0" to="-120" dur="1s" fill="freeze" begin="0.4s" />
        </rect>
        <rect x="250" y="0" width="60" height="0" fill="#60a5fa" rx="4">
          <animate attributeName="height" from="0" to="180" dur="1s" fill="freeze" begin="0.6s" />
          <animate attributeName="y" from="0" to="-180" dur="1s" fill="freeze" begin="0.6s" />
        </rect>
        <rect x="350" y="0" width="60" height="0" fill="#3b82f6" rx="4">
          <animate attributeName="height" from="0" to="220" dur="1s" fill="freeze" begin="0.8s" />
          <animate attributeName="y" from="0" to="-220" dur="1s" fill="freeze" begin="0.8s" />
        </rect>
        <rect x="450" y="0" width="60" height="0" fill="#2563eb" rx="4">
          <animate attributeName="height" from="0" to="280" dur="1s" fill="freeze" begin="1s" />
          <animate attributeName="y" from="0" to="-280" dur="1s" fill="freeze" begin="1s" />
        </rect>

        {/* Value Labels */}
        <text x="80" y="-90" textAnchor="middle" fill="#0f172a" fontSize="20" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="1.2s" />
          20%
        </text>
        <text x="180" y="-130" textAnchor="middle" fill="#0f172a" fontSize="20" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="1.3s" />
          30%
        </text>
        <text x="280" y="-190" textAnchor="middle" fill="#0f172a" fontSize="20" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="1.4s" />
          45%
        </text>
        <text x="380" y="-230" textAnchor="middle" fill="#0f172a" fontSize="20" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="1.5s" />
          55%
        </text>
        <text x="480" y="-290" textAnchor="middle" fill="#0f172a" fontSize="20" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="1.6s" />
          70%
        </text>

        {/* Growth Line with Animation */}
        <path d="M80 -80 L80 -80" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round">
          <animate
            attributeName="d"
            values="
              M80 -80 L80 -80;
              M80 -80 L180 -120;
              M80 -80 L180 -120 L280 -180;
              M80 -80 L180 -120 L280 -180 L380 -220;
              M80 -80 L180 -120 L280 -180 L380 -220 L480 -280"
            dur="2s"
            fill="freeze"
            begin="1.2s"
          />
        </path>

        {/* Data Points with Pulse Animation */}
        <circle cx="80" cy="-80" r="0" fill="#0f172a">
          <animate attributeName="r" from="0" to="8" dur="0.5s" fill="freeze" begin="1.2s" />
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1.7s" />
          <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="1.7s" />
        </circle>
        <circle cx="180" cy="-120" r="0" fill="#0f172a">
          <animate attributeName="r" from="0" to="8" dur="0.5s" fill="freeze" begin="1.3s" />
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1.8s" />
          <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="1.8s" />
        </circle>
        <circle cx="280" cy="-180" r="0" fill="#0f172a">
          <animate attributeName="r" from="0" to="8" dur="0.5s" fill="freeze" begin="1.4s" />
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1.9s" />
          <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="1.9s" />
        </circle>
        <circle cx="380" cy="-220" r="0" fill="#0f172a">
          <animate attributeName="r" from="0" to="8" dur="0.5s" fill="freeze" begin="1.5s" />
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="2s" />
          <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="480" cy="-280" r="0" fill="#0f172a">
          <animate attributeName="r" from="0" to="8" dur="0.5s" fill="freeze" begin="1.6s" />
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="2.1s" />
          <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="2.1s" />
        </circle>

        {/* Trend Indicator */}
        <path
          d="M520 -280 L550 -310 L580 -280"
          stroke="#10b981"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
        >
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="2.2s" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,10; 0,0; 0,10"
            dur="3s"
            repeatCount="indefinite"
            begin="2.3s"
          />
        </path>
        <text x="550" y="-320" textAnchor="middle" fill="#10b981" fontSize="22" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="2.2s" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,10; 0,0; 0,10"
            dur="3s"
            repeatCount="indefinite"
            begin="2.3s"
          />
          +15%
        </text>
      </g>

      {/* Business People Icons */}
      <g transform="translate(250, 200) scale(0.6)">
        {/* Person 1 */}
        <circle cx="100" cy="100" r="50" fill="#cbd5e1" />
        <circle cx="100" cy="70" r="25" fill="#94a3b8" />
        <rect x="75" y="100" width="50" height="80" fill="#cbd5e1" rx="10" />

        {/* Person 2 */}
        <circle cx="250" cy="100" r="50" fill="#bfdbfe" />
        <circle cx="250" cy="70" r="25" fill="#60a5fa" />
        <rect x="225" y="100" width="50" height="80" fill="#bfdbfe" rx="10" />

        {/* Person 3 */}
        <circle cx="400" cy="100" r="50" fill="#cbd5e1" />
        <circle cx="400" cy="70" r="25" fill="#94a3b8" />
        <rect x="375" y="100" width="50" height="80" fill="#cbd5e1" rx="10" />

        {/* Connection Lines */}
        <line
          x1="150"
          y1="100"
          x2="200"
          y2="100"
          stroke="#0f172a"
          strokeWidth="4"
          strokeDasharray="40"
          strokeDashoffset="40"
        >
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" fill="freeze" begin="1.5s" />
        </line>
        <line
          x1="300"
          y1="100"
          x2="350"
          y2="100"
          stroke="#0f172a"
          strokeWidth="4"
          strokeDasharray="40"
          strokeDashoffset="40"
        >
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" fill="freeze" begin="1.7s" />
        </line>
      </g>

      {/* Marketing Icons */}
      <g transform="translate(600, 250) scale(0.5)">
        {/* Megaphone */}
        <path d="M50,100 L150,50 L150,150 Z" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" />
        <rect x="150" y="50" width="30" height="100" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" />
        <path d="M180,75 C250,50 250,150 180,125" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" />

        {/* Sound Waves */}
        <path
          d="M220,100 C240,80 240,120 220,100"
          fill="none"
          stroke="#0f172a"
          strokeWidth="4"
          strokeDasharray="100"
          strokeDashoffset="100"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            begin="2s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M240,100 C270,70 270,130 240,100"
          fill="none"
          stroke="#0f172a"
          strokeWidth="4"
          strokeDasharray="150"
          strokeDashoffset="150"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="150"
            to="0"
            dur="1.5s"
            fill="freeze"
            begin="2s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* KPI Elements */}
      <g transform="translate(150, 150) scale(0.4)">
        {/* Target */}
        <circle cx="100" cy="100" r="80" fill="#fee2e2" stroke="#ef4444" strokeWidth="4" />
        <circle cx="100" cy="100" r="60" fill="#fecaca" stroke="#ef4444" strokeWidth="4" />
        <circle cx="100" cy="100" r="40" fill="#fca5a5" stroke="#ef4444" strokeWidth="4" />
        <circle cx="100" cy="100" r="20" fill="#ef4444" stroke="#ef4444" strokeWidth="4" />

        {/* Arrow */}
        <path
          d="M200,100 L120,100 L140,80 M120,100 L140,120"
          fill="none"
          stroke="#0f172a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        >
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1s" fill="freeze" begin="2.5s" />
        </path>
      </g>
    </svg>
  )
}
