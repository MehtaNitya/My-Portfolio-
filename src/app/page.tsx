"use client";

import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12 md:py-0 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* LEFT: Content */}
        <div className="flex-1 w-full space-y-8 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hello, I&apos;m <span className="text-gradient">Nitya</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
              Software Developer <span className="mx-2 text-purple-500">•</span> Data Analytics Enthusiast
            </h2>
            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Passionate about building scalable applications and data-driven solutions using modern technologies and machine learning techniques.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center md:justify-start">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-accent text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full glass font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex space-x-6 items-center pt-4">
            <a href="http://github.com/MehtaNitya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform p-2">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-7 w-7" />
            </a>
            <a href="http://www.linkedin.com/in/nitya01/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-transform p-2">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-7 w-7" />
            </a>
          </div>

          {/* BOTTOM STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 w-full max-w-lg border-t border-white/10 mt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">6+</span>
              <span className="text-sm text-gray-400">Projects Built</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-sm text-gray-400">Technologies</span>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="text-3xl font-bold">2+</span>
              <span className="text-sm text-gray-400">Domains</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="flex-1 w-full order-1 md:order-2 flex justify-center md:justify-end mb-12 md:mb-0 relative">
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-purple-500 to-blue-500 glow group">
            {/* Note: In production, user will supply public/profile.jpg. Adding fallback here, Next Image will fail if file doesn't exist so we use a standard div placeholder for dev until they add it */}
            <div className="w-full h-full rounded-full bg-[#111116] flex items-center justify-center overflow-hidden relative">
              <Image
                src="/image.png"
                alt="Nitya Profile"
                fill
                className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
