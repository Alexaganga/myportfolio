"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans p-8 sm:p-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-[-1]">
        {/* Animated Gradient */}
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-black animate-gradient"></div>
        {/* Floating Shapes */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full bg-cyan-500 opacity-50`}
              style={{
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100, 0],
                x: [0, Math.random() * 100, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center space-y-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* 3D Welcome Message */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 10px #ffffff, 0px 0px 20px #ff00ff",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Welcome!
        </motion.h2>

        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg bg-gray-700">
          <Image
            src="/profile.jpg" // Replace with your profile image
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
          {/* Glowing Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500 opacity-75"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Hi, I'm Alex Mustapha 🚀
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-300 font-medium">
          Full-Stack Developer | Building Scalable Web Solutions
        </p>

        {/* Download Resume Button */}
        <div className="flex gap-4 mt-6">
          <a
            href="/resume.pdf" // Replace with the path to your resume file
            download="Alex-Mustapha-Resume.pdf"
            className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 relative overflow-hidden"
          >
            {/* Neon Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// CSS for Animated Gradient
const styles = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 10s ease infinite;
}
`;