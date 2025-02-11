"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import "@/app/globals.css"; // Ensure the correct path

const images = ["/images/alex1.jpg"]; // Replace with your profile image(s)
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a scalable e-commerce platform using React, Node.js, and MongoDB. Implemented payment gateway integration and user authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/example",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed an AI-powered chatbot using TensorFlow and Flask. Integrated NLP for natural language understanding.",
    techStack: ["TensorFlow", "Flask", "Python", "NLP"],
    github: "https://github.com/example",
  },
  {
    title: "Task Management App",
    description:
      "Created a task management app using Next.js and Firebase. Implemented real-time updates and user roles.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/example",
  },
  {
    title: "Weather Dashboard",
    description:
      "Built a weather dashboard using Python and OpenWeather API. Visualized data with charts and graphs.",
    techStack: ["Python", "Flask", "Chart.js"],
    github: "https://github.com/example",
  },
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
        {/* Case Studies Section */}
        <motion.h3
          className="text-3xl sm:text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Case Studies 📊
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {projects.map(({ title, description, techStack, github }, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h4 className="text-xl font-bold text-cyan-400 mb-2">{title}</h4>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
        {/* Tech Stack & Skills Section */}
        <motion.h3
          className="text-3xl sm:text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tech Stack & Skills 💻
        </motion.h3>
        <div className="mt-6">
          {/* Frontend */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Frontend Development</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", color: "#61DAFB" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg", color: "#000000" },
                { name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/vue-dot-js.svg", color: "#4FC08D" },
                { name: "Svelte", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/svelte.svg", color: "#FF3E00" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg", color: "#38B2AC" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg", color: "#7952B3" },
              ].map(({ name, icon, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image src={icon} alt={`${name} Icon`} width={40} height={40} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
                  <p className="mt-2 text-sm text-gray-300">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Backend */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Backend Development</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/node-dot-js.svg", color: "#339933" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg", color: "#000000" },
                { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/django.svg", color: "#092E20" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/flask.svg", color: "#000000" },
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/springboot.svg", color: "#6DB33F" },
              ].map(({ name, icon, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image src={icon} alt={`${name} Icon`} width={40} height={40} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
                  <p className="mt-2 text-sm text-gray-300">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Databases */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Databases</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg", color: "#47A248" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg", color: "#336791" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg", color: "#4479A1" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg", color: "#DC382D" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg", color: "#FFCA28" },
              ].map(({ name, icon, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image src={icon} alt={`${name} Icon`} width={40} height={40} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
                  <p className="mt-2 text-sm text-gray-300">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* DevOps & Cloud */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">DevOps & Cloud</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazonaws.svg", color: "#FF9900" },
                { name: "Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftazure.svg", color: "#0078D4" },
                { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecloud.svg", color: "#4285F4" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg", color: "#2496ED" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/kubernetes.svg", color: "#326CE5" },
              ].map(({ name, icon, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image src={icon} alt={`${name} Icon`} width={40} height={40} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
                  <p className="mt-2 text-sm text-gray-300">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Live Counter Section */}
        <motion.h3
          className="text-3xl sm:text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Achievements 🏆
        </motion.h3>
        <div className="flex flex-wrap gap-8 mt-6 justify-center">
          {[
            { label: "Years of Experience", value: 5 },
            { label: "Projects Completed", value: 20 },
            { label: "Happy Clients", value: 15 },
          ].map(({ label, value }, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h4 className="text-4xl font-bold text-cyan-400">{value}+</h4>
              <p className="text-gray-300">{label}</p>
            </motion.div>
          ))}
        </div>
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
      </section>
    </div>
  );
}