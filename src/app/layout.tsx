"use client";
import Link from "next/link";
import "@/app/globals.css"; // Ensure the correct path
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaSearch, // Import FaSearch here
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; // Import the "X" icon

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans flex flex-col min-h-screen overflow-x-hidden relative">
        {/* Parallax Background */}
        <div className="parallax-background absolute inset-0 z-0"></div>
        {/* Sticky Header */}
        <Header />
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center relative z-10">
          {/* Page Transition Animation */}
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        {/* Scrollable Footer */}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white p-6 shadow-lg fixed w-full top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-5xl sm:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 font-display cursor-pointer flex items-center space-x-4"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 30px #FFD700",
            rotate: [0, 2, 0], // Subtle rotation effect
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>Alex Mustapha</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-xl font-semibold">
            {[
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/contacts", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative inline-flex items-center px-8 py-4 overflow-hidden text-base font-medium text-white border-2 border-transparent rounded-full group hover:border-white hover:text-indigo-500 transform transition-all duration-500"
                >
                  {/* 3D Hover Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"
                    whileHover={{ rotateX: 30, rotateY: 30 }}
                  ></motion.span>
                  <span className="relative z-10 font-bold tracking-wider">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-6 py-4 pl-12 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

function Footer() {
  const socialIcons = [
    { href: "https://github.com/Alexaganga", icon: <FaGithub />, color: "#ffffff" }, // GitHub White
    { href: "https://linkedin.com", icon: <FaLinkedin />, color: "#0A66C2" }, // LinkedIn Blue
    { href: "http://x.com/AgangaAlex", icon: <RiTwitterXFill />, color: "#ffffff" }, // X White
    { href: "https://www.tiktok.com/@alexmoustapha?lang=en", icon: <FaTiktok />, color: "#FE2C55" }, // TikTok Pink
    { href: "https://wa.me/254741138844", icon: <FaWhatsapp />, color: "#25D366" }, // WhatsApp Green
    { href: "https://t.me/Moustapha705", icon: <FaTelegram />, color: "#0088cc" }, // Telegram Blue
  ];
  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 text-center py-8 px-6 shadow-inner w-full relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-6">
        {socialIcons.map(({ href, icon, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl p-4 rounded-full bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              boxShadow: `0px 0px 20px ${color}`, // Glow effect matching icon color
            }}
            style={{
              color: color,
            }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
      {/* Copyright & Legal Info */}
      <div className="text-sm text-gray-500">
        <p>&copy; 2025 Alex Mustapha. Coding your Dreams To Reality.</p>
      </div>
    </motion.footer>
  );
}