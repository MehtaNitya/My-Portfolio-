"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-gradient">Experience</span>
        </h1>

        <div className="w-full max-w-4xl relative border-l-2 border-purple-500/30 ml-4 md:ml-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-8 relative group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-6 flex h-5 w-5 rounded-full bg-purple-500 ring-4 ring-[#0a0a0f] ring-opacity-100 group-hover:scale-125 transition-transform" />

            <div className="glass p-8 rounded-2xl shadow-lg shadow-purple-500/5 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaLaptopCode className="text-purple-400" /> Practical Exposure
                </h3>
                <span className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-gray-300 w-fit">
                  Present
                </span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Currently pursuing B.Tech CSE with practical exposure through real-world projects and industry training. I have hands-on experience in full-stack development and machine learning projects, focusing on building scalable web applications and data-driven solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
