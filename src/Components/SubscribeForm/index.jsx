'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';

const SubscribeForm = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'your_service_id', // 🔁 Replace with your EmailJS Service ID
        'your_template_id', // 🔁 Replace with your Template ID
        form.current,
        'your_public_key' // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('Subscribed successfully!');
          setEmail('');
        },
        (error) => {
          console.error(error);
          setStatus('Subscription failed. Try again.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 mt-4">
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
      <Button type="submit" variant="contained" color="primary">
        Subscribe Now
      </Button>
      {status && <p className="text-xs text-gray-600 mt-1">{status}</p>}
    </form>
  );
};

export default SubscribeForm;
