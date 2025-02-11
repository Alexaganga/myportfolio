"use client";
import { motion } from "framer-motion";
import "@/app/globals.css"; // Ensure the correct path
import Head from "next/head";

const projects = [
  {
    title: "AI-Powered Chatbot 🤖",
    description:
      "A conversational AI chatbot built with TensorFlow.js for real-time customer support.",
    github: "https://github.com/example/chatbot",
    caseStudy: {
      problem: "Businesses needed a scalable solution for handling customer queries without human intervention.",
      solution: "Developed an AI-powered chatbot using TensorFlow.js and Flask. Integrated NLP for natural language understanding.",
      techStack: ["TensorFlow.js", "Flask", "Python", "NLP"],
    },
  },
  {
    title: "NFT Marketplace 🎨",
    description:
      "A decentralized NFT marketplace powered by Ethereum and Web3.js.",
    github: "https://github.com/example/nft-marketplace",
    caseStudy: {
      problem: "Artists lacked a platform to sell their digital art securely and transparently.",
      solution: "Built a decentralized NFT marketplace using Ethereum smart contracts and Web3.js.",
      techStack: ["Ethereum", "Web3.js", "Solidity", "React"],
    },
  },
  {
    title: "E-Commerce Dashboard 📊",
    description:
      "A dynamic dashboard for managing e-commerce analytics using React and Chart.js.",
    github: "https://github.com/example/ecommerce-dashboard",
    caseStudy: {
      problem: "E-commerce managers needed a tool to visualize sales and inventory data.",
      solution: "Created a dynamic dashboard using React and Chart.js to display real-time analytics.",
      techStack: ["React", "Chart.js", "Node.js", "MongoDB"],
    },
  },
  {
    title: "Todo Planner App ✅",
    description:
      "A minimalist todo planner app built with Next.js and Firebase for seamless task management.",
    github: "https://github.com/example/todo-planner",
    caseStudy: {
      problem: "Users needed a simple yet powerful app to manage daily tasks.",
      solution: "Developed a todo planner app with Next.js and Firebase for real-time updates.",
      techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    },
  },
  {
    title: "Social Media Analytics Tool 📈",
    description:
      "A tool for analyzing social media trends using Python, Flask, and D3.js.",
    github: "https://github.com/example/social-media-analytics",
    caseStudy: {
      problem: "Marketers lacked insights into social media trends and user behavior.",
      solution: "Built a tool using Python, Flask, and D3.js to analyze and visualize social media data.",
      techStack: ["Python", "Flask", "D3.js", "PostgreSQL"],
    },
  },
  {
    title: "Music Streaming Platform 🎵",
    description:
      "A music streaming platform with user authentication and playlist management using Node.js and MongoDB.",
    github: "https://github.com/example/music-streaming",
    caseStudy: {
      problem: "Users wanted a customizable music streaming platform with playlist management.",
      solution: "Developed a music streaming platform with Node.js, MongoDB, and JWT for authentication.",
      techStack: ["Node.js", "MongoDB", "JWT", "React"],
    },
  },
];

export default function Projects() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>My Projects | Alex Mustapha</title>
        <meta
          name="description"
          content="Explore my portfolio of innovative projects, including AI chatbots, NFT marketplaces, and more. Built with cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="portfolio, projects, full-stack developer, AI chatbot, NFT marketplace, e-commerce dashboard"
        />
        <meta property="og:title" content="My Projects | Alex Mustapha" />
        <meta
          property="og:description"
          content="Explore my portfolio of innovative projects, including AI chatbots, NFT marketplaces, and more. Built with cutting-edge technologies."
        />
        <meta property="og:image" content="/images/alex1.jpg" /> {/* Replace with your profile image */}
        <meta property="og:url" content="https://yourwebsite.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Projects | Alex Mustapha" />
        <meta
          name="twitter:description"
          content="Explore my portfolio of innovative projects, including AI chatbots, NFT marketplaces, and more. Built with cutting-edge technologies."
        />
        <meta name="twitter:image" content="/images/alex1.jpg" /> {/* Replace with your profile image */}
      </Head>

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
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-yellow-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-teal-500 to-pink-500 px-4 py-2 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
                >
                  View on GitHub →
                </a>

                {/* Case Study Button */}
                {project.caseStudy && (
                  <button
                    onClick={() => alert(JSON.stringify(project.caseStudy, null, 2))}
                    className="mt-4 inline-block bg-gray-700 px-4 py-2 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
                  >
                    Case Study →
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}