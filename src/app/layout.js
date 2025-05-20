import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarEl3 from "@/Components/NavbarEl";
import FooterEl from "@/Components/FooterEl";
import ChatBot from "@/Components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sales Syllabus",
  description: "India’s Only Performance-First Talent Platform for Revenue Teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarEl3/>
        {children}
        {/* <FooterEl/> */}
        <ChatBot/>
      </body>
    </html>
  );
}
