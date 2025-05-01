// components/AboutExperience.tsx
"use client";

import React from "react";
import {
  PersonOutline,
  VisibilityOutlined,
  RocketLaunchOutlined,
  LinkedIn,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const AboutUsExperience = () => {
  return (
    <section className="bg-gray-100 px-4 md:px-8 pt-0 md:pt-20">
      <h2 className="text-4xl text-[#4C6DC7] font-bold text-center py-10 mb-10">
        Our Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Experience */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col text-center h-full">
          <PersonOutline className="text-5xl text-[#6200EA] mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">7+ Years of Experience</h3>
          <p className="text-gray-700">
            With over 7 years of expertise, we deliver integrated sales and marketing strategies paired with high-precision execution. Over time, we have refined our frameworks to create a precise and effective solution that addresses sales and marketing challenges for organizations worldwide.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col text-center h-full">
          <VisibilityOutlined className="text-5xl text-[#E6377A] mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">B2B Expertise</h3>
          <p className="text-gray-700">
            B2B expertise involves strategies and processes that enable businesses to effectively market, sell, and manage products or services to other businesses. It combines market insight, lead generation, relationship-building, and data-driven decision-making to foster strong client partnerships and drive growth.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col text-center h-full">
          <RocketLaunchOutlined className="text-5xl text-[#802A98] mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">10x ROI</h3>
          <p className="text-gray-700">
            Experience exponential growth with a proven 10x ROI formula—empowering your brand with targeted strategies and measurable results.
            Drive your success with our expert team, turning every investment into 10x value through innovative, data-led marketing.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex justify-center">
          <Image
            src="/sandeep.jpg"
            alt="Founder"
            width={200}
            height={200}
            className="rounded-full border-4 border-[#4C6DC7] shadow-lg object-cover"
          />
        </div>
        <div className="md:col-span-8">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-[#6200EA]">
              Founder: Sandeep Gupta
            </h3>
            <p className="text-gray-700 mb-4">
              Sandeep Gupta, the visionary behind our company, brings extensive expertise in sales and Marketing Strategy. His leadership and innovative approach have been key in shaping our solutions to drive measurable growth for our clients.
            </p>
            <div className="text-center">
              <Link href="https://www.linkedin.com/in/sandeep-gupta-31baa82b/" target="_blank">
                <LinkedIn className="text-[#E6377A] hover:text-[#802A98] text-3xl transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsExperience;
