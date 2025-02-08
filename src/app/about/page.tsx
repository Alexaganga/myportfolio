"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/alex1.jpg",
  // Add more images here if needed
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white font-sans">
      {/* Main Content */}
      <section className="flex-grow p-6 sm:p-12 lg:p-24">
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-8 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me 🤖✨
        </motion.h2>

        {/* Profile Section */}
        <div className="mt-6 flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotateY-180"
            whileHover={{ scale: 1.2, rotateY: 180 }}
            onClick={nextImage}
          >
            <Image
              src={images[currentImage]}
              alt="Profile"
              width={256}
              height={256}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi there! I’m Alex, a{" "}
            <span className="text-teal-400 font-semibold">full-stack developer</span> who loves creating cool stuff 🚀
            with{" "}
            <span className="text-yellow-300 font-semibold">Node.js, React, and cloud computing</span>. My goal is to
            build apps that are both fun and functional—because why not have the best of both worlds? 😊
          </motion.p>
        </div>

        {/* Skills Section */}
        <motion.h3
          className="text-3xl sm:text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What I Do 💻🌐
        </motion.h3>
        <ul className="list-none pl-0 mt-4 space-y-4 text-lg sm:text-xl max-w-2xl mx-auto">
          {[
            { skill: "JavaScript, TypeScript, Node.js, Express.js 🌟", color: "from-blue-500 to-cyan-500" },
            { skill: "React.js, Next.js, Vue.js, Svelte 🚀", color: "from-green-500 to-lime-500" },
            { skill: "MongoDB, Firebase, PostgreSQL, Redis 🗄️", color: "from-yellow-500 to-orange-500" },
            { skill: "AWS, Azure, Google Cloud Platform (GCP) ☁️", color: "from-red-500 to-pink-500" },
            { skill: "Docker, Kubernetes, CI/CD Pipelines 🐳", color: "from-purple-500 to-indigo-500" },
            { skill: "GraphQL, REST APIs, WebSocket 📡", color: "from-teal-500 to-emerald-500" },
            { skill: "Tailwind CSS, Bootstrap, Material-UI ✨", color: "from-amber-500 to-yellow-500" },
            { skill: "Machine Learning (TensorFlow, PyTorch) 🤖", color: "from-pink-500 to-fuchsia-500" },
            { skill: "Blockchain Development (Solidity, Web3.js) 🔗", color: "from-indigo-500 to-violet-500" },
            { skill: "DevOps, Microservices Architecture 🏗️", color: "from-cyan-500 to-sky-500" },
          ].map(({ skill, color }, index) => (
            <motion.li
              key={index}
              className={`relative inline-block px-6 py-3 bg-gradient-to-r ${color} rounded-full shadow-lg text-white font-semibold text-lg sm:text-xl hover:scale-105 transition-all duration-300 ease-in-out`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>

        {/* Fun Fact Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-4">
            Fun Fact 🎉☕
          </h4>
          <p className="text-lg sm:text-xl text-gray-300">
            When I’m not coding, you’ll probably find me sipping coffee ☕ or exploring new tech trends 📚. Life’s too
            short for boring apps! 😄
          </p>
        </motion.div>

        {/* 3D Emoji Effects */}
        <div className="mt-12 flex justify-center space-x-6">
          {[["🤖", "AI Enthusiast"], ["🚀", "Launching Ideas"], ["📚", "Learning Always"], ["💡", "Creative Thinker"]].map(
            ([emoji, label], index) => (
              <motion.div
                key={index}
                className="relative text-6xl text-yellow-400 hover:text-white hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group"
                whileHover={{ rotateY: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <span>{emoji}</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}