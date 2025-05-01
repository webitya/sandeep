"use client"
import dynamic from 'next/dynamic';

const AboutUsPage = dynamic(() => import('@/Components/AboutUs'), {
  ssr: false, // Disable SSR for this component
});

const AboutUs = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export default AboutUs;
