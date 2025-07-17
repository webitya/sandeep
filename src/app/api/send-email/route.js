import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  const { name, email, contactNumber, professionalType, preferredDateTime, message } = await request.json()

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("EMAIL_USER or EMAIL_PASS environment variables are not set.")
    return NextResponse.json({ error: "Server configuration error: Email credentials missing." }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Email to Admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Admin's email
    subject: `New Skills Test Enquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0056b3;">New Skills Test Enquiry Received!</h2>
        <p>A new user has submitted an enquiry for the Sales & Marketing Skills Test. Here are the details:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
          <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
          <li style="margin-bottom: 10px;"><strong>Contact Number:</strong> ${contactNumber}</li>
          <li style="margin-bottom: 10px;"><strong>Professional Type:</strong> ${professionalType}</li>
          <li style="margin-bottom: 10px;"><strong>Preferred Date & Time:</strong> ${preferredDateTime}</li>
          ${message ? `<li style="margin-bottom: 10px;"><strong>Additional Message:</strong> ${message}</li>` : ""}
        </ul>
        <p>Please reach out to them promptly to coordinate the test schedule.</p>
        <p style="font-size: 0.9em; color: #777;">This email was sent automatically from your enquiry form.</p>
      </div>
    `,
  }

  // Email to User (Thank You)
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // User's email
    subject: `🚀 Your Skills Test Enquiry - We're on it!`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4CAF50; color: white; padding: 25px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Your Enquiry!</h1>
          <p style="font-size: 16px; opacity: 0.9;">We're excited to help you unlock your potential.</p>
        </div>
        <div style="padding: 30px;">
          <p>Dear ${name},</p>
          <p>We've successfully received your request to take our Sales & Marketing Skills Test. This is a fantastic step towards understanding and enhancing your capabilities!</p>
          <p style="background-color: #f0f8ff; border-left: 4px solid #2196F3; padding: 15px; margin-top: 20px; font-size: 15px;">
            <strong>A quick note:</strong> Our team is currently experiencing a high volume of requests, so there might be a slight delay in our response. We appreciate your patience and understanding as we work diligently to connect with everyone.
          </p>
          <p>In the meantime, feel free to prepare by reflecting on your sales and marketing experiences. We look forward to speaking with you!</p>
          <p style="margin-top: 30px;">Best regards,</p>
          <p><strong>The [Your Company Name] Team</strong></p>
        </div>
        <div style="background-color: #f8f8f8; color: #777; padding: 20px; text-align: center; font-size: 12px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
          <p>&copy; ${new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
          <p>This is an automated email, please do not reply.</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions) // Send to user
    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ error: "Failed to send one or more emails." }, { status: 500 })
  }
}
