import { Business, TrendingUp } from "@mui/icons-material"
import Link from "next/link"

export default function ForSmeFounder() {
  return (
    <section className="py-24 px-4 bg-slate-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center shadow-lg">
                <Business className="w-10 h-10 text-blue-800" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by Sales Consulting Expert – Sandeep Gupta
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Quick background on Sales Syllabus and 100+ SMEs helped
              </p>
              <Link
                href="/success-stories"
                className="text-blue-600 hover:text-blue-800 underline font-medium transition"
              >
                View success stories →
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <TrendingUp className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">100+</div>
                <div className="text-sm text-gray-600">SMEs Helped</div>
              </div>
            </div>

            <blockquote className="text-lg italic text-gray-700 leading-relaxed">
              "I've been in your shoes. This program solves what I wished I had as an SME founder."
            </blockquote>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Sandeep Gupta</strong>
                <br />
                Founder, Sales Syllabus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
