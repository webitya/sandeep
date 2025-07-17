"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowForward,
  Phone,
  TrendingUp,
  School,
  Star,
} from "@mui/icons-material";

export default function ForFounderScaleup() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 to-indigo-50 min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[220px] h-[220px] bg-rose-400 rounded-full opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] bg-violet-400 rounded-full opacity-20 blur-[110px]"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
                Founder Scaleup Program
              </span>
              <br />
              <span className="text-gray-900">
                Build a{" "}
                <span className="text-amber-600 font-bold">
                  Sales & Marketing Engine
                </span>{" "}
                That Works
              </span>
            </h1>

            <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
              A 90‑day accelerator to fix conversions, build lead systems, and
              scale predictably — all with expert support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact-us"
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-md text-sm"
              >
                <span>Apply Now</span>
                <ArrowForward className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-purple-200 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-lg w-full max-w-md space-y-5"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">
              What You’ll Gain
            </h3>

            <div className="flex items-start gap-3">
              <TrendingUp className="text-purple-700 w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Scale faster with strategic leadership
              </span>
            </div>

            <div className="flex items-start gap-3">
              <School className="text-purple-700 w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Harvard‑style business simulations
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Star className="text-amber-600 w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Mentorship from growth‑stage founders
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
