"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  interface Shape {
    width: string;
    height: string;
    top: string;
    left: string;
    animationOffset: number;
    duration: number;
  }

  const [floatingShapes, setFloatingShapes] = useState<Shape[]>([]);

  useEffect(() => {
    // Generate shapes only on client-side
    const shapes = Array.from({ length: 10 }, () => ({
      width: `${Math.random() * 10 + 5}rem`,
      height: `${Math.random() * 10 + 5}rem`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationOffset: Math.random() * 100,
      duration: Math.random() * 10 + 5,
    }));
    setFloatingShapes(shapes);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans p-8 sm:p-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-black animate-gradient"></div>

        {/* Floating Shapes */}
        <div className="absolute inset-0">
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-cyan-500 opacity-50"
              initial={{
                width: shape.width,
                height: shape.height,
                top: shape.top,
                left: shape.left,
                opacity: 0,
              }}
              animate={{
                y: [0, shape.animationOffset, 0],
                x: [0, shape.animationOffset, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center space-y-6 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
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

        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Hi, I'm Alex Mustapha 🚀
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-medium">
          Full-Stack Developer | Building Scalable Web Solutions
        </p>

        <div className="flex gap-4 mt-6">
        <a
  href="/resume.pdf" // Ensure this path is correct
  download="Alex-Mustapha-Resume.pdf"
  className="group relative px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 overflow-hidden"
>
  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
  <span className="relative z-10">Download Resume</span>
</a>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  );
}