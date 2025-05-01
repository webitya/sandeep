'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const AboutUsCallToAction = () => {
  return (
    <div className="bg-blue-600 text-white text-center md:py-20 py-10 px-4 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Let’s Grow Together
        </h2>
        <p className="text-lg mb-6">
          If you're building a sales or marketing team, training your next-gen leaders,
          or just tired of trial-and-error growth — let’s talk.
        </p>
        <div className="flex justify-center">
          <Link href="/contact-us" passHref>
            <Button
              variant="contained"
              startIcon={<MailOutlineIcon />}
              className="!bg-green-500 hover:!bg-green-600 !text-white font-semibold px-6 py-3 normal-case"
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
