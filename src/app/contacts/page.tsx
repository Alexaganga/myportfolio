"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md"; // Real email icon
import { FaGithub, FaLinkedin, FaXTwitter, FaTiktok, FaTelegram, FaWhatsapp } from "react-icons/fa6"; // Updated icons for X (FaXTwitter)
import Head from "next/head";

const Contact: FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Me | Alex Mustapha</title>
        <meta name="description" content="Get in touch with Alex Mustapha, a full-stack developer passionate about building innovative solutions. Reach out via email, phone, or social media." />
        <meta name="keywords" content="contact alex mustapha, full-stack developer, hire developer, tech enthusiast" />
        <meta name="author" content="Alex Mustapha" />
        <meta property="og:title" content="Contact Me | Alex Mustapha" />
        <meta property="og:description" content="Get in touch with Alex Mustapha, a full-stack developer passionate about building innovative solutions. Reach out via email, phone, or social media." />
        <meta property="og:image" content="/images/alex1.jpg" /> {/* Replace with your profile image */}
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Me | Alex Mustapha" />
        <meta name="twitter:description" content="Get in touch with Alex Mustapha, a full-stack developer passionate about building innovative solutions. Reach out via email, phone, or social media." />
        <meta name="twitter:image" content="/images/alex1.jpg" /> {/* Replace with your profile image */}
      </Head>
      <motion.section
        id="contact"
        className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 text-white text-center min-h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-pulse">
          Let&#39;s Connect 🤝✨
        </h2>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          I&#39;m Alex, a tech enthusiast who loves building innovative solutions. Whether it&#39;s a project, collaboration, or just a chat, feel free to reach out! 😊
        </p>
        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Email Button */}
          <a
            href="mailto:alexagangamoustapha430@gmail.com?subject=Hello%20Alex&body=I%20would%20like%20to%20connect%20with%20you."
            className="bg-white text-indigo-800 px-6 py-3 rounded-full shadow-lg text-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:bg-indigo-100"
          >
            <MdEmail className="text-2xl" /> {/* Email icon */}
            <span>Email Me 📩</span>
          </a>
          {/* Phone Contact */}
          <p className="text-xl font-semibold">
            Or call me:{" "}
            <a
              href="tel:+254741138844"
              className="text-cyan-400 underline tracking-wide hover:text-cyan-300 transition-colors duration-300"
            >
              +254 7411 388 844
            </a>
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6">
            {[
              { href: "https://github.com/", icon: <FaGithub />, label: "GitHub", color: "#171515" }, // GitHub Black
              { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn", color: "#0A66C2" }, // LinkedIn Blue
              { href: "https://x.com", icon: <FaXTwitter />, label: "X", color: "#1D9BF0" }, // X (formerly Twitter)
              { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok", color: "#010101" }, // TikTok Black
              { href: "https://wa.me/+254741138844", icon: <FaWhatsapp />, label: "WhatsApp", color: "#25D366" }, // WhatsApp Green
              { href: "https://t.me/yourusername", icon: <FaTelegram />, label: "Telegram", color: "#0088CC" }, // Telegram Blue
            ].map(({ href, icon, label, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-5xl transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/50 group"
                style={{ color }} // Use real company colors
              >
                {icon}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
        {/* Fun Fact Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-4">
            Fun Fact 🎉☕
          </h4>
          <p className="text-lg sm:text-xl text-gray-300">
            When I&#39;m not coding, you&#39;ll probably find me sipping coffee ☕️ or exploring new tech trends 📚. Life&#39;s too short for boring apps! 😄
          </p>
        </motion.div>
        {/* 3D Emojis Section */}
        <div className="mt-12 flex justify-center space-x-4">
          {[["🤖", "AI Enthusiast"], ["🚀", "Launching Ideas"], ["💻", "Tech Lover"], ["📚", "Learning Always"]].map(
            ([emoji, label], index) => (
              <div
                key={index}
                className="relative text-6xl text-cyan-400 hover:text-white hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group"
              >
                <span>{emoji}</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </motion.section>
    </>
  );
};
export default Contact;