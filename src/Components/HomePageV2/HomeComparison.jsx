"use client";
import { motion } from "framer-motion";
import { Lightbulb, DataObject, TrendingUp } from "@mui/icons-material";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f8fbff] to-[#e6f0f8] py-10 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" mx-auto rounded-xl bg-white/30 border border-white/60 backdrop-blur-md shadow-lg p-8 md:p-12"
      >
        <h2 className="text-3xl md:text-4xl  text-gray-900 mb-8 text-center">
          Why Choose Us Over ISB, IIM, or Harvard?
        </h2>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start space-x-4"
          >
            <Lightbulb className="text-yellow-500 mt-1" fontSize="medium" />
            <p className="text-lg text-gray-800">
              <strong>Built by consultants,</strong> not professors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start space-x-4"
          >
            <DataObject className="text-blue-500 mt-1" fontSize="medium" />
            <p className="text-lg text-gray-800">
              <strong>Powered by real-time business data,</strong> not outdated frameworks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start space-x-4"
          >
            <TrendingUp className="text-green-500 mt-1" fontSize="medium" />
            <p className="text-lg text-gray-800">
              <strong>Designed for working professionals</strong> seeking ROI, not just credentials
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center text-xl text-gray-700 italic"
        >
          “Learn. Earn. Lead—with Sales Syllabus Academy.”
        </motion.p>
      </motion.div>
    </section>
  );
}
