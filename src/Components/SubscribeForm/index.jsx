'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';

const SubscribeForm = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!audience) {
      setStatus('Please select an audience type.');
      return;
    }

    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_evnh226', // 🔁 Replace with your EmailJS Service ID
        'template_43ycn0v', // 🔁 Replace with your Template ID
        form.current,
        'aHWw0G5vVDW9ORqW2' // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('Subscribed successfully!');
          setEmail('');
          setAudience('');
        },
        (error) => {
          console.error(error);
          setStatus('Subscription failed. Try again.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mt-4 w-full max-w-md">
      <FormControl size="small" fullWidth required>
        <InputLabel id="audience-label">Subscribe As</InputLabel>
        <Select
          labelId="audience-label"
          name="user_type"
          value={audience}
          label="Subscribe As"
          onChange={(e) => setAudience(e.target.value)}
        >
          <MenuItem value="Organization">For Organization</MenuItem>
          <MenuItem value="Professional">For Working Professional</MenuItem>
        </Select>
      </FormControl>

      <TextField
        name="user_email"
        label="Enter your email"
        type="email"
        size="small"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Subscribe Now
      </Button>

      {status && (
        <Typography variant="body2" className="text-gray-600 mt-1">
          {status}
        </Typography>
      )}
    </form>
  );
};

export default SubscribeForm;
