"use client";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function BusinessInsight() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 px-4 sm:px-8 md:px-20">
      <div className="w-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
            <WarningAmberIcon fontSize="medium" />
          </div>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug tracking-tight">
            "Most business leaders fail not because they don’t work hard — but because they repeat avoidable mistakes."
          </h2>
        </div>

        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            Founders and sales leaders are often left to learn through trial and error — wasting time, money, and momentum. Traditional education teaches outdated theory. Real business is messy, fast, and unforgiving.
          </p>
          <p>
            At <span className="font-semibold text-blue-700">Sales Syllabus</span>, we change how leaders learn — by studying real business scenarios that worked <span className="italic">(and didn’t)</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
