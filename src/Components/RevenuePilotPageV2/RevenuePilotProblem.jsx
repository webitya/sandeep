"use client";

import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RevenuePilotProblem() {
  const problems = [
    "70% fail to deliver results",
    "High salary, low ROI",
    "Weak people management & domain leadership",
    "No structured upskilling path for mid-career leaders",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#e6f0f8] via-[#f4f6f8] to-[#e9edf0]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚫 The Industry’s Leadership Gap</h2>
            <p className="text-lg text-gray-700">
              Most SMEs hire sales leaders with high hopes—but results often fall short:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems Section */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-red-700 mb-6">Common Pitfalls</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CancelIcon className="text-red-600 mr-3 mt-1" />
                    <p className="text-gray-800">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solution Section */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-green-700 mb-6">Our Solution: Trained Sales Leadership</h3>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  There’s no IIM or Harvard for SME Sales Heads. So we built one.
                </p>
                <div className="flex items-start">
                  <CheckCircleIcon className="text-green-600 mr-3 mt-1" />
                  <p className="text-gray-800">
                    Our Sales Syllabus blends strategic learning, talent grooming, and alignment with your business
                    model—ensuring your sales leader is fully prepared for real-world growth execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
