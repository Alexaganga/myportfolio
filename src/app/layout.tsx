"use client";
import Link from "next/link";
import "./globals.css"; // Ensure this file exists and contains the required styles
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; // Import the "X" icon

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-10 flex flex-col items-center relative z-10">
          {/* Page Transition Animation */}
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white p-4 shadow-lg fixed w-full top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-wide text-yellow-300 font-display cursor-pointer"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 12px #FFD700",
            rotate: [0, 2, 0], // Subtle rotation effect
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Alex Mustapha
        </motion.h1>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 text-lg font-semibold">
            {[
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/contacts", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-4 py-2 bg-gray-800 text-gray-200 rounded-md overflow-hidden shadow-md transition-all duration-300 group"
                >
                  <span className="relative z-10 text-sm md:text-base font-medium">
                    {label}
                  </span>
                  {/* 3D Hover Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                    layoutId={`hover-${href}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

function Footer() {
  const socialIcons = [
    { href: "https://github.com", icon: <FaGithub />, color: "#ffffff" }, // GitHub White
    { href: "https://linkedin.com", icon: <FaLinkedin />, color: "#0A66C2" }, // LinkedIn Blue
    { href: "https://x.com", icon: <RiTwitterXFill />, color: "#ffffff" }, // X White
    { href: "https://www.tiktok.com", icon: <FaTiktok />, color: "#FE2C55" }, // TikTok Pink
    { href: "https://wa.me/", icon: <FaWhatsapp />, color: "#25D366" }, // WhatsApp Green
  ];
  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 text-center py-8 px-6 shadow-inner w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm font-semibold">&copy; 2025 Alex Mustapha. All rights reserved.</p>
      <div className="mt-6 flex justify-center space-x-6">
        {socialIcons.map(({ href, icon, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-2 rounded-full bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center"
            whileHover={{
              scale: 1.2,
              boxShadow: `0px 0px 15px ${color}`, // Glow effect matching icon color
            }}
            style={{
              color: color,
            }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}