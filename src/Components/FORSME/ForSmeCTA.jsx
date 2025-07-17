import Link from "next/link"
import { ArrowForward, Phone, CheckCircleOutline } from "@mui/icons-material"

export default function ForSmeCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Fix Your Sales & Marketing?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of SME founders who transformed their businesses
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact-us"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow"
          >
            Apply Now
            <ArrowForward className="w-5 h-5" />
          </Link>
          <Link
            href="/contact-us"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-2 border-blue-400 hover:border-blue-300"
          >
            <Phone className="w-5 h-5" />
            Book Discovery Call
          </Link>
        </div>

        {/* Sub-Text */}
        <div className="mt-8 text-blue-100 text-sm flex justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-1">
            <CheckCircleOutline className="w-4 h-4" />
            365-Day Accelerator
          </div>
          <div className="flex items-center gap-1">
            <CheckCircleOutline className="w-4 h-4" />
            Expert Support
          </div>
          <div className="flex items-center gap-1">
            <CheckCircleOutline className="w-4 h-4" />
            Proven System
          </div>
        </div>
      </div>
    </section>
  )
}
