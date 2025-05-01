'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const AboutUsCallToAction = () => {
  return (
    <div className="bg-[#F4F6FA] text-center md:py-20 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#2A3E52]">
          Let’s Grow Together
        </h2>
        <p className="text-lg text-[#4A4A4A] mb-8">
          If you're building a sales or marketing team, training your next-gen leaders,
          or just tired of trial-and-error growth — let’s talk.
        </p>
        <div className="flex justify-center">
          <Link href="/contact-us" passHref>
            <Button
              variant="contained"
              startIcon={<MailOutlineIcon />}
              className="!bg-[#357ABD] hover:!bg-[#2C6AAA] !text-white font-medium px-6 py-3 rounded-md shadow-sm normal-case transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCallToAction;
