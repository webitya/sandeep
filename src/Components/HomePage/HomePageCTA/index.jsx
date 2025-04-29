'use client';

import Link from 'next/link';
import { Button, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';

export default function HomePageCTA() {
  return (
    <Box className="bg-blue-600 text-white text-center py-12 px-6">
      <Typography variant="h4" className="font-bold mb-4">
        Contact Us Today
      </Typography>
      <Typography variant="body1" className="text-lg !my-6">
        Let’s build your sales success with real-world insights and sales-ready talent.
      </Typography>
      <Box className="flex justify-center gap-4 flex-wrap">
        <Link href="https://calendly.com/salessyllabus" target="_blank">
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#2563eb',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#e5e7eb',
              },
              paddingX: 3,
              paddingY: 1.2,
              borderRadius: 2,
              textTransform: 'none',
            }}
          >
            Book a Consultation
          </Button>
        </Link>
        <Link href="/free-resources" target="_blank">
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#2563eb',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#e5e7eb',
              },
              paddingX: 3,
              paddingY: 1.2,
              borderRadius: 2,
              textTransform: 'none',
            }}
          >
            Download Free Resource
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
