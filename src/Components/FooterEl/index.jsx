'use client';
import React from 'react';
import Link from 'next/link';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import SubscribeForm from '../SubscribeForm';


const FooterEl = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Us + Subscribe */}
        <FooterColumn title="About Us">
          <p className="text-sm mb-4">
            Sales Syllabus is a premium business consulting firm specializing in building and managing high performance sales and marketing teams using a scientific approach.
          </p>
          <Link href="/about-us" target="_blank">
            <Button variant="contained" color="primary" size="small" className="rounded-md">
              Learn More
            </Button>
          </Link>

          {/* ✅ Subscribe Section */}
          <div className="mt-6">
            <h6 className="text-base font-semibold mb-2">Subscribe to Our Updates</h6>
            <SubscribeForm />
          </div>
        </FooterColumn>

        {/* Services */}
        <FooterColumn title="Our Links">
          {[
            ['Home', '/'],
            ['About Us', '/about-us'],
            ['Our Programs', '/our-programs'],
            ['Revenue Pilot', '/revenue-pilot'],
            ['Contact Us', '/contact-us'],
           
          ].map(([label, path]) => (
            <FooterLink key={label} href={path}>{label}</FooterLink>
          ))}
        </FooterColumn>

        {/* Get In Touch */}
        <FooterColumn title="Resources">
          {[
            ['Free Resources', '/free-resources'],
            ['Blogs', '/blogs'],
            ['Case Studies', '/case-studies'],
            // ['FAQs', '/faqs'],
            // ['Contact Us', '/contact-us'],
            //  ['HomePage V2', '/homepageV2'],
            // ['About Us V2', '/about'],
            // ['Our Programs V2', '/programs'],
            // ['Revenue Pilot V2', '/revenue-pilot'],
          ].map(([label, path]) => (
            <FooterLink key={label} href={path}>{label}</FooterLink>
          ))}
        </FooterColumn>

        {/* Contact Info */}
        <FooterColumn title="Contact Us">
          <p><strong>Address:</strong> D Block, Jayshree Green City, Argora, Ranchi</p>
          <p><strong>Phone:</strong> +91 6200207379</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:sandeep@salessyllabus.com" className="text-blue-600 hover:underline">
              sandeep@salessyllabus.com
            </a>
          </p>
          <div className="mt-4">
            <h5 className="font-semibold mb-2">Connect With Us</h5>
            <div className="flex gap-3 text-blue-600">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/in/sandeep-gupta-31baa82b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><YouTubeIcon /></a>
            </div>
          </div>
        </FooterColumn>
      </div>

      <div className="bg-gray-200 text-center py-4 text-xs">
        © 2024 Sales Syllabus. All rights reserved.
       
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => (
  <div>
    <h5 className="text-lg font-semibold mb-4">{title}</h5>
    <div className="space-y-2">{children}</div>
  </div>
);

const FooterLink = ({ href, children }) => (
  <div>
    <Link href={href} target="_blank" className="text-gray-700 hover:text-blue-600 transition duration-150">
      {children}
    </Link>
  </div>
);

export default FooterEl;
