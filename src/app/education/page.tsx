"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech CSE",
    institution: "Lovely Professional University",
    year: "2023–Present",
    grade: "CGPA: 7.35",
  },
  {
    degree: "Intermediate",
    institution: "Kamla Nehru Public School",
    year: "Completed",
    grade: "72.6%",
  },
  {
    degree: "Matriculation",
    institution: "Kamla Nehru Public School",
    year: "Completed",
    grade: "88.9%",
  },
];

export default function Education() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Education</span>
        </h1>

        <div className="w-full max-w-4xl relative border-l-2 border-purple-500/30 xl:translate-x-[20%] ml-4 md:ml-0">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 ml-8 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-6 flex h-5 w-5 rounded-full bg-purple-500 ring-4 ring-[#0a0a0f] ring-opacity-100 group-hover:scale-125 transition-transform" />

              <div className="glass p-8 rounded-2xl shadow-lg shadow-purple-500/5 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <FaGraduationCap className="text-purple-400" /> {item.degree}
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-purple-300 w-fit whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-gray-300 mb-2">
                  {item.institution}
                </h4>
                
                <p className="text-gray-400 text-sm font-medium">
                  {item.degree === "B.Tech CSE" ? "Current " : "Final "} 
                  Score: <span className="text-white">{item.grade}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
