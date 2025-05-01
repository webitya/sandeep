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
import AboutOurServicesSection from './AboutOurServices';
import AboutWhyChooseUs from './AboutWhyChooseUs';
import AboutUsExperience from './AboutUsExperience';
import AboutUsTimelineComponent from './AboutUsTimeline';
import AboutUsCallToAction from './AboutUsCTA';

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
      {/* Mobile Toggle Button */}
      <IconButton
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white shadow-md lg:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-20 left-0 h-[calc(100%-5rem)] w-52 bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:block overflow-y-auto`}
        role="navigation"
        aria-label="About Us Navigation"
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 w-full text-left text-sm px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === id
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="text-blue-500">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-52' : 'ml-0'} lg:ml-52`}>
        <AboutUsHeroSection />
        <section id="who-we-are" className="mb-0 scroll-mt-0"><AboutUsWhoWeAre /></section>
        <section id="our-vision" className="mb-0 scroll-mt-0">
          <AboutUsOurVision />
          <AboutUsWhatWeDo />
          <AboutUsWhoWeWorkWith />
        </section>
        <section id="our-services" className="mb-0 scroll-mt-0"><AboutOurServicesSection /></section>
        <section id="why-choose-us" className="mb-0 scroll-mt-0"><AboutWhyChooseUs /></section>
        <section id="experience" className="mb-0 scroll-mt-0"><AboutUsExperience /></section>
        <section id="timeline" className="mb-0 scroll-mt-0"><AboutUsTimelineComponent /></section>
        <section id="call-to-action" className="mb-0 scroll-mt-0"><AboutUsCallToAction /></section>
        <FooterEl />
      </main>
    </>
  );
}
