'use client';

import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimelineIcon from '@mui/icons-material/Timeline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AboutUsHeroSection from './AboutUsHero';
import FooterEl from '../FooterEl';
import AboutUsWhoWeAre from './AboutUsWhoWeAre';
import AboutUsOurVision from './AboutUsVision';
import AboutUsWhatWeDo from './AboutUsWhatWeDo';
import AboutUsWhoWeWorkWith from './AboutUsWorkWith';

// Demo nav links with icons
const navLinks = [
  { id: 'who-we-are', label: 'Who We Are', icon: <InfoIcon fontSize="small" /> },
  { id: 'our-vision', label: 'Our Vision', icon: <VisibilityIcon fontSize="small" /> },
  { id: 'our-services', label: 'Our Services', icon: <BuildIcon fontSize="small" /> },
  { id: 'why-choose-us', label: 'Why Choose Us', icon: <ThumbUpIcon fontSize="small" /> },
  { id: 'experience', label: 'Experience', icon: <EmojiEventsIcon fontSize="small" /> },
  { id: 'timeline', label: 'Our Journey', icon: <TimelineIcon fontSize="small" /> },
  { id: 'call-to-action', label: 'Contact Us', icon: <PhoneInTalkIcon fontSize="small" /> },
];

export default function AboutUsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        className="fixed top-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl lg:hidden"
        onClick={toggleSidebar}
        size="large"
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Sidebar */}
      <aside
        className={`fixed top-20 left-0 h-[calc(100%-5rem)] w-44 bg-white border-r border-gray-200 shadow-xl transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:block overflow-y-auto`}
      >
        <div className="h-full flex flex-col justify-start">
          <ul className="space-y-3 p-4">
            {navLinks.map(({ id, label, icon }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 text-sm px-3 py-2 rounded-md cursor-pointer transition-all duration-200 group ${
                  activeSection === id
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span className="text-blue-500">{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-44' : 'ml-0'
        } lg:ml-44`}
      >
        <AboutUsHeroSection/>
        <section id="who-we-are" className="mb-2 scroll-mt-2">
          <AboutUsWhoWeAre/>
        </section>
        <section id="our-vision" className="mb-2 scroll-mt-2">
              <AboutUsOurVision/>
              <AboutUsWhatWeDo/>
              {/* <A2AbWhatWeDoNutshell /> */}
              <AboutUsWhoWeWorkWith /> 
        </section>
        <section id="our-services" className="mb-20 scroll-mt-24">
          {/* <A2OurServicesSection /> */}
        </section>
        <section id="why-choose-us" className="mb-20 scroll-mt-24">
          {/* <AboutWhyChooseUs /> */}
        </section>
        <section id="experience" className="mb-20 scroll-mt-24">
          {/* <AboutExperience /> */}
        </section>
        <section id="timeline" className="mb-20 scroll-mt-24">
          {/* <TimelineComponent /> */}
        </section>
        <section id="call-to-action" className="mb-20 scroll-mt-24">
          {/* <CallToAction /> */}
        </section>
         <FooterEl/>
      </main>
    </>
  );
}
