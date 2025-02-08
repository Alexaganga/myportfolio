"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Chatbot 🤖",
    description:
      "A conversational AI chatbot built with TensorFlow.js for real-time customer support.",
    link: "#",
  },
  {
    title: "NFT Marketplace 🎨",
    description:
      "A decentralized NFT marketplace powered by Ethereum and Web3.js.",
    link: "#",
  },
  {
    title: "E-Commerce Dashboard 📊",
    description:
      "A dynamic dashboard for managing e-commerce analytics using React and Chart.js.",
    link: "#",
  },
  {
    title: "Todo Planner App ✅",
    description:
      "A minimalist todo planner app built with Next.js and Firebase for seamless task management.",
    link: "#",
  },
  {
    title: "Social Media Analytics Tool 📈",
    description:
      "A tool for analyzing social media trends using Python, Flask, and D3.js.",
    link: "#",
  },
  {
    title: "Music Streaming Platform 🎵",
    description:
      "A music streaming platform with user authentication and playlist management using Node.js and MongoDB.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white font-sans">
      {/* Main Content */}
      <motion.section
        className="flex-grow py-16 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-yellow-300 to-pink-500">
          My Projects 🚀✨
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-teal-500 to-pink-500 px-4 py-2 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}