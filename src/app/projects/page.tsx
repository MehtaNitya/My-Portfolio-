"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "DevPortfolio Builder",
    description: "Production-style React portfolio builder with live preview, inline editing, theme switching, drag-and-drop section ordering, local persistence, AI-assisted draft generation, device preview mode, and static HTML export.",
    tech: ["HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/MehtaNitya/DevPortfolio-Builder",
  },
  {
    title: "CRUD Application using Spring Boot",
    description: "Developed RESTful CRUD application using MVC architecture. Integrated database with JPA and tested APIs using Postman.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "REST API"],
    github: "https://github.com/MehtaNitya/CRUD-springboot",
  },
  {
    title: "Predictive Analysis – Hair Fall Prediction",
    description: "Built an ML model to predict hair fall risk. Performed Exploratory Data Analysis (EDA) and robust model evaluation.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/MehtaNitya/Predictive-Analysis",
  },
  {
    title: "Entertainment-Engine",
    description: "Built an interactive web app with a responsive UI. Optimized UI/UX and ensured cross-device compatibility.",
    tech: ["HTML", "CSS", "JavaScript", "REST APIs"],
    github: "https://github.com/MehtaNitya/Entertainment-Engine",
  },
  {
    title: "Portfolio Builder",
    description: "Built a startup-grade React portfolio builder with Tailwind CSS and Framer Motion, featuring real-time live preview, inline editing, drag-and-drop section management, responsive theming, local persistence, AI-assisted content generation, and static HTML export.",
    tech: ["HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/MehtaNitya/Portfolio-Builder",
  },
  {
    title: "Power BI Dashboard Project",
    description: "Built a Power BI dashboard to visualize sales data. Performed data cleaning and created interactive visualizations.",
    tech: ["Power BI", "Data Visualization", "Data Cleaning"],
    github: "https://github.com/MehtaNitya/Power-BI-Dashboard-Project",
  },
  {
    title: "Joke Generator",
    description: "Built a joke generator using HTML, CSS, and JavaScript. Integrated with a joke API to fetch and display jokes.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/MehtaNitya/Joke-Generator",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h1>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-purple-500/5 transition-all duration-300 border border-white/5 relative group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md font-medium border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="h-5 w-5" /> Code
                </a>
                <a
                  href={project.github} // Optional: If a live link exists, replace this. Using github for both as fallback.
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
