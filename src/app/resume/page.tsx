"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          My <span className="text-gradient">Resume</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl flex flex-col items-center gap-8"
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-accent text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
          >
            <FaDownload className="animate-bounce" /> Download Resume
          </a>

          <div className="w-full h-[600px] md:h-[800px] glass rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-purple-500/5 relative flex items-center justify-center">
            {/* 
              Embedded PDF Viewer 
              Using object tag as standard approach for embedding PDFs
            */}
            <object
              data="/resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="bg-[#111116] z-10"
            >
              {/* Fallback if PDF plugin is not supported or file is missing */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-400 absolute inset-0 z-0">
                <p className="mb-4 text-lg">Unable to display PDF directly.</p>
                <p className="text-sm">Please ensure <code className="text-purple-400">resume.pdf</code> is placed in your <code className="text-purple-400">/public</code> folder.</p>
                <a href="/resume.pdf" download className="mt-4 text-blue-400 hover:text-blue-300 underline">
                  Download it here instead
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
