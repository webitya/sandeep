'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Company logos data
const companyLogos = [
  { name: "Company 1", logo: "/team1.svg", color: "#2B3C73" },
  { name: "Company 2", logo: "/team2.webp", color: "white" },
  { name: "Company 3", logo: "/team3.png", color: "white" },
  { name: "Company 4", logo: "/team4.webp", color: "white" },
  { name: "Company 5", logo: "/team5.png", color: "white" },
  { name: "Company 6", logo: "/team15.webp", color: "white" },
  { name: "Company 7", logo: "/team16.png", color: "white" },
  { name: "Company 8", logo: "/team17.png", color: "white" },
  { name: "Company 10", logo: "/team6.png", color: "white" },
  { name: "Company 11", logo: "/team7.png", color: "white" },
  { name: "Company 12", logo: "/team8.png", color: "white" },
  { name: "Company 13", logo: "/team9.png", color: "white" },
  { name: "Company 14", logo: "/team10.png", color: "white" },
  { name: "Company 15", logo: "/team11.png", color: "white" },
  { name: "Company 16", logo: "/team12.png", color: "white" },
  { name: "Company 17", logo: "/team13.png", color: "white" },
];

const HomePageCompany = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const getBackgroundColor = (color) => {
    return color === "white" ? "#2B3C73" : color;
  };

  return (
    <div className="py-6 pb-10 bg-gradient-to-r from-blue-800 to-blue-900">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center text-white mb-4">
        Trusted by 100+ Leading Companies
      </h1>
      <p className="text-center text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
        Join the growing list of organizations scaling faster with the right revenue team — across SaaS, 
        Manufacturing, B2B Services, and more.
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center py-6 px-4"
              style={{
                backgroundColor: getBackgroundColor(company.color),
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Gradient Animation on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl" />

              {/* Logo */}
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageCompany;
