import Link from "next/link"
import { ArrowForward, Phone, TrendingUp, TrendingDown, ThumbUp } from "@mui/icons-material"

export default function ForSmeHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Struggling with Sales & Marketing?
              <br />
              <span className="text-blue-600">Get a Proven System to Scale Your SME.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              A 90-day accelerator to help founders build lead engines, boost conversion, and fix sales challenges — with expert support and execution help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply-for-program"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Apply for the Program</span>
                <ArrowForward className="w-5 h-5" />
              </Link>
              <Link
                href="/book-discovery-call"
                className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-md font-semibold transition-all flex items-center justify-center space-x-2 border border-blue-200"
              >
                <Phone className="w-5 h-5" />
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Card */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 space-y-5 w-full max-w-md mx-auto relative overflow-hidden">
              {/* Top-Right Badge (Inside Card) */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md z-10">
                <TrendingUp className="text-white w-5 h-5" />
              </div>

              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600 w-7 h-7" />
                <h3 className="text-lg font-bold text-gray-900 ml-2">Your SME Growth Snapshot</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-red-50 p-3 rounded-md">
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <TrendingDown className="text-red-500" />
                    <span>Before: Low Conversions</span>
                  </div>
                  <div className="w-20 h-2 bg-red-200 rounded-full">
                    <div className="w-4 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-green-50 p-3 rounded-md">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <ThumbUp className="text-green-500" />
                    <span>After: High Conversions</span>
                  </div>
                  <div className="w-20 h-2 bg-green-200 rounded-full">
                    <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-md p-4 text-center">
                <p className="text-xs text-gray-600">Success Rate</p>
                <p className="text-3xl font-bold text-blue-600">90%+</p>
                <p className="text-xs text-gray-500">SMEs Scale Successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
