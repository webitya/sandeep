'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconButton, Button } from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  EditNote,
  Explore
} from '@mui/icons-material';
import CustomDrawer from '../DrawerEl';

const NavbarEl3 = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [hoverRevenue, setHoverRevenue] = useState(false);
  const [hoverLearning, setHoverLearning] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' }
    
  ];

  const menus1 = [
    { label: 'Marketing Support', href: '/marketing-support' },
    { label: 'Faqs', href: '/faqs' },
    { label: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="mx-auto flex items-center justify-between px-2 py-0 sm:px-4">
          <Link href="/">
            <img src="/logobbyy.svg" alt="brand-logo" className="w-24" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 items-center">
            {menus.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600`}
              >
                {item.label}
              </Link>
            ))}

            {/* All Services Dropdown start here */}
            {/* <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
                All Services <ExpandMore fontSize="small" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-[680px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 z-50 animate-fadeIn">
                  <div>
                    <h1
                      className="text-base font-semibold flex items-center gap-1 cursor-pointer relative"
                      onMouseEnter={() => setHoverRevenue(true)}
                      onMouseLeave={() => setHoverRevenue(false)}
                    >
                      Revenue Acceleration Consulting
                      <Explore fontSize="small" className="text-gray-400" />
                      {hoverRevenue && (
                        <span className="absolute top-8 left-0 w-72 text-xs bg-white p-2 shadow-md rounded text-gray-500 z-50">
                          All knowledge is derived from real-time experience and executed market data, ensuring fewer mistakes.
                        </span>
                      )}
                    </h1>
                    <div className="flex flex-col mt-2 space-y-1">
                      <Link href="/lead-generation-process-setup" className="hover:text-blue-600 text-sm text-gray-700">Lead Generation Process Setup</Link>
                      <Link href="/strategic-account-management" className="hover:text-blue-600 text-sm text-gray-700">Strategic Account Management</Link>
                      <Link href="/market-analysis" className="hover:text-blue-600 text-sm text-gray-700">Market Analysis</Link>
                      <Link href="/marketing-communication" className="hover:text-blue-600 text-sm text-gray-700">Marketing Communication Strategy</Link>
                      <Link href="/community-building" className="hover:text-blue-600 text-sm text-gray-700">Community Building</Link>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-base font-semibold mb-2">Sales and Marketing Team Management</h1>
                    <Link
                      href="/learning-centre"
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      onMouseEnter={() => setHoverLearning(true)}
                      onMouseLeave={() => setHoverLearning(false)}
                    >
                      Learning Centre
                      <Explore fontSize="small" className="text-gray-400" />
                      {hoverLearning && (
                        <span className="absolute top-8 left-0 w-72 text-xs bg-white p-2 shadow-md rounded text-gray-500 z-50">
                          Knowledge hub with updated learning resources built with real market knowledge and insights.
                        </span>
                      )}
                    </Link>
                    <div className="flex flex-col mt-2 space-y-1">
                      <Link href="/academy" className="text-sm text-gray-700 hover:text-blue-600">Academy</Link>
                      <Link href="/war-room" className="text-sm text-gray-700 hover:text-blue-600">Sales & Marketing War Room</Link>
                      <Link href="/Sales-framework" className="text-sm text-gray-700 hover:text-blue-600">Reporting Framework Development</Link>
                    </div>
                  </div>

                  <div className="col-span-2 border-t pt-4">
                    <h1 className="text-base font-semibold mb-2">Sales Team Building Solution</h1>
                    <div className="flex flex-col space-y-1">
                      <Link href="/sales-ready-manpower" className="text-sm text-gray-700 hover:text-blue-600">Sales-Ready Manpower</Link>
                      <Link href="/leadership-hiring-and-mentoring" className="text-sm text-gray-700 hover:text-blue-600">Leadership Hiring & Mentoring</Link>
                      <Link href="/master-class" className="text-sm text-gray-700 hover:text-blue-600">Master Class</Link>
                      <Link href="/interview" className="text-sm text-gray-700 hover:text-blue-600">Interview as a Service</Link>
                      <Link href="/Marketing-support" className="text-sm text-gray-700 hover:text-blue-600">Marketing Support</Link>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
               {/* All Services Dropdown end  here */}

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
                Resources <ExpandMore fontSize="small" />
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 z-50">
                  <div className="flex flex-col space-y-1">
                    <Link href="/case-studies" className="text-sm text-gray-700 hover:text-blue-600">Case Studies</Link>
                    <Link href="/free-resources" className="text-sm text-gray-700 hover:text-blue-600">Free Resources</Link>
                    <Link href="/blogs" className="text-sm text-gray-700 hover:text-blue-600">Blogs</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Static Links */}
            {menus1.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link href="/academic" target="_blank">
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: '#007BFF', textTransform: 'none', fontWeight: 600 }}
                endIcon={<EditNote />}
              >
                Academic
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="block sm:hidden">
            <IconButton onClick={toggleDrawer} className="text-blue-600">
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </nav>

      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavbarEl3;
