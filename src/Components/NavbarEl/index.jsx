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
    // { label: 'Our Programs', href: '/programs' },
    // { label: 'For SME', href: '/for-sme' },
   
    // { label: 'Faqs', href: '/faqs' },
   
    
  ];

  const menus1 = [
      { label: 'Revenue Pilot', href: '/revenue-pilot' },
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
   <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
                Our Programs <ExpandMore fontSize="small" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 z-50">
                  <div className="flex flex-col space-y-1">
                    <Link href="/programs" className="text-sm text-gray-700 hover:text-blue-600">Next Phase</Link>
                    <Link href="/for-sme" className="text-sm text-gray-700 hover:text-blue-600">For Founders</Link>
                  </div>
                </div>
              )}
            </div>
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
                    <Link href="/case-studies" className="text-sm text-gray-700 hover:text-blue-600">Success Story</Link>
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
            {/* <Link href="https://calendly.com/salessyllabus" target="_blank">
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: '#007BFF', textTransform: 'none', fontWeight: 600 }}
                endIcon={<EditNote />}
              >
                Book Appointment
              </Button>
            </Link> */}
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
