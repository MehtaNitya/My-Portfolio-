"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Excel", "Power BI", "Git", "GitHub", "MS SQL Server", "Postman"],
  },
  {
    category: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Player", "Adaptability"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Skills</span>
        </h1>

        <motion.div
          className="grid md:grid-cols-2 gap-8 w-full max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl transition-transform duration-300 shadow-lg shadow-purple-500/5 border border-white/5"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                {section.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-gray-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
