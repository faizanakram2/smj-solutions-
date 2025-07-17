import React from "react";
import { motion } from "framer-motion";

// Importing images from src/Assets
import fixitImg from "../Assets/Screenshot 2025-07-17 at 11.25.30 pm.png";
import blogImg from "../Assets/ai-content-generators.webp";
import cryptoImg from "../Assets/crypto.png";
import taskImg from "../Assets/CV-TaskManager.jpg";

const projects = [
  {
    title: "FixIt App",
    description:
      "FixIt is a mobile-first app that helps users find reliable local repair technicians. Features include live tracking, in-app chat, and real-time job status. Built using React Native, Firebase, and Node.js, with an admin panel in React + TailwindCSS.",
    tags: ["React Native", "Node.js", "Firebase", "TailwindCSS", "MongoDB"],
    image: fixitImg,
  },
  {
    title: "AI Blog Generator",
    description:
      "A smart tool that generates SEO-optimized blog posts from user prompts. Uses OpenAI API, built with React and Express. Helps writers save time and boost content productivity.",
    tags: ["React", "Express", "OpenAI API", "MongoDB", "TailwindCSS"],
    image: blogImg,
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency dashboard with live price updates, historical trends, and user portfolios. Integrated with CoinGecko API and built using React + Redux.",
    tags: ["React", "Redux", "CoinGecko API", "Chart.js", "TailwindCSS"],
    image: cryptoImg,
  },
  {
    title: "Task Manager Pro",
    description:
      "Build a full-stack task management system designed specifically for construction projects and site work coordination.",
    tags: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
    image: taskImg,
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#11BAB2] mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[#032B44]">Our</span> Projects
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center mb-24 gap-12`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full shadow-xl rounded-2xl overflow-hidden h-[300px]">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 + 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#11BAB2] mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 text-lg mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#f0fafa] text-[#11BAB2] text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
