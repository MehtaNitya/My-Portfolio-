"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { data } from "framer-motion/client";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";


const certificationsData = [
  {
    title: "Build Generative AI Apps",
    date: "Sep 2025",
    org: "Infosys",
    link: "https://drive.google.com/file/d/1_FCojmhT5b8fgg4OoZ789As0cpkOzgdX/view?usp=sharing",
  },
  {
    title: "NoSQL and DBaaS 101",
    date: "Aug 2025",
    org: "IBM",
    link: "https://drive.google.com/file/d/1mEpR6lOug_b6xSboxMjfCWRDGVdWfdY4/view?usp=sharing",
  },
  {
    title: "Software Engineer Intern",
    date: "Mar 2026",
    org: "Hakerrank",
    link: "https://www.hackerrank.com/certificates/4f7f3fbcddf8",
  },
  {
    title: "Python (Basic)",
    date: "Mar 2026",
    org: "Hakerrank",
    link: "https://www.hackerrank.com/certificates/6eb52d7f765f",
  },
  {
    title: "SQL (Basic) ",
    date: "Mar 2026",
    org: "Hakerrank",
    link: "https://www.hackerrank.com/certificates/2c9882066bd7",
  },
  {
    title: "Training Full Stack",
    date: "July 2025",
    org: "IBM(Allsoft Solution)",
    link: "https://drive.google.com/file/d/1JV-X8VylWzQInxAFOrId9oat8VZNM5Ax/view?usp=sharing"
  },
  {
    title: "ChatGPT-4 Prompt Engineering:",
    date: "August 2025",
    org: "Infosy",
    link: "https://drive.google.com/file/d/1sGchX6lRgP6vIORO8b6r4qDEOkZot_a7/view?usp=sharing"
  },
  {
    title: "Project Management 101",
    date: "March 2026",
    org: "simplilearn",
    link: "https://drive.google.com/file/d/1W0Lmvp7UdnCYAt0xGVqwkoR3wgbzR3_R/view?usp=sharing",
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
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Certifications() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Certifications</span>
        </h1>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="glass p-6 rounded-2xl flex flex-col items-start gap-4 transition-transform duration-300 shadow-lg shadow-purple-500/5 group"
            >
              <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <FaAward className="h-6 w-6" />
              </div>

              <div className="flex flex-col w-full h-full justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight flex items-center justify-between group-hover:text-purple-400 transition-colors">
                    {cert.title}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-400 transition-colors"
                        title="View Certificate"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {cert.org}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded-md text-gray-400">
                    {cert.date}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
