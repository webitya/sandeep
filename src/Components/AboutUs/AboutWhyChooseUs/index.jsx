'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Storage,
  Groups,
  ShowChart,
  Psychology,
  SupportAgent,
} from '@mui/icons-material';

const reasons = [
  {
    icon: <Storage className="text-4xl text-purple-500" />,
    title: 'Data-Driven Approach',
    description:
      'We leverage data to create strategies that are effective, measurable, and aligned with your business goals.',
  },
  {
    icon: <Groups className="text-4xl text-blue-500" />,
    title: 'Expert Team',
    description:
      'Our team of experienced professionals brings deep expertise in sales and digital marketing.',
  },
  {
    icon: <ShowChart className="text-4xl text-green-500" />,
    title: 'Proven Results',
    description: 'We have a track record of delivering tangible outcomes that drive growth.',
  },
  {
    icon: <Psychology className="text-4xl text-orange-500" />,
    title: 'Tailored Strategies',
    description: 'Our solutions are customized to fit the unique needs of your business.',
  },
  {
    icon: <SupportAgent className="text-4xl text-red-500" />,
    title: 'Client-Centric Approach',
    description:
      'We prioritize transparency, communication, and a collaborative relationship.',
  },
];

const AboutWhyChooseUs = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          With a commitment to excellence and a focus on achieving superior results, we pride
          ourselves on delivering premium services tailored to your specific needs.
        </p>

        {/* Framer Motion Carousel */}
        <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] lg:min-w-[30%] bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{reason.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
