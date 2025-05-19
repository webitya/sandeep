'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Company logos
const companyLogos = [
  { name: "Company 1", logo: "/team1.svg" },
  { name: "Company 2", logo: "/team2.webp" },
  { name: "Company 3", logo: "/team3.png" },
  { name: "Company 4", logo: "/team4.webp" },
  { name: "Company 5", logo: "/team5.png" },
  { name: "Company 6", logo: "/team15.webp" },
  { name: "Company 7", logo: "/team16.png" },
  { name: "Company 8", logo: "/team17.png" },
  { name: "Company 9", logo: "/team6.png" },
  { name: "Company 10", logo: "/team7.png" },
  { name: "Company 11", logo: "/team8.png" },
  { name: "Company 12", logo: "/team9.png" },
  { name: "Company 13", logo: "/team10.png" },
  { name: "Company 14", logo: "/team11.png" },
  { name: "Company 15", logo: "/team12.png" },
  { name: "Company 16", logo: "/team13.png" },
];

const HomePageCompany = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="companies1" className="py-4 pb-6 bg-gradient-to-tr from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-4xl font-extrabold mb-4">Trusted by 100+ Leading Companies</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Join the growing list of organizations scaling faster with the right revenue team — across SaaS, 
          Manufacturing, B2B Services, and more.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer z-0" />
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className="object-contain max-w-[70%] max-h-[70%] z-10"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageCompany;
