"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace the placeholders below with your actual EmailJS credentials:
      // 1. Go to https://www.emailjs.com → Account → API Keys for Public Key
      // 2. Create an Email Service  → get your Service ID
      // 3. Create an Email Template → get your Template ID
      await emailjs.sendForm(
        "service_kebm7pf",
        "template_1s0e48p",
        formRef.current!,
        "w2QInKFK-tOwebZJD"
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-gray-400 mb-16 text-center max-w-md">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you!
        </p>


        <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* LEFT: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
              <div className="flex items-center gap-4 text-gray-400">
                <FaEnvelope className="text-purple-400 h-5 w-5 shrink-0" />
                <a href="mailto:mehtanitya123@gmail.com" className="hover:text-white transition-colors">
                  mehtanitya123@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <FaGithub className="text-purple-400 h-5 w-5 shrink-0" />
                <a href="http://github.com/MehtaNitya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/MehtaNitya
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <FaLinkedin className="text-purple-400 h-5 w-5 shrink-0" />
                <a href="http://www.linkedin.com/in/nitya01/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/nitya01
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations. Whether you&apos;re a company looking to hire or a developer wanting to connect, feel free to reach out!
              </p>

            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl flex flex-col gap-5 shadow-lg shadow-purple-500/5"
            >
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-green-400 text-sm font-medium bg-green-400/10 border border-green-400/20 py-3 px-4 rounded-xl">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </p>

              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-medium bg-red-400/10 border border-red-400/20 py-3 px-4 rounded-xl">
                  ❌ Failed to send. Please check your EmailJS configuration or try emailing directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-accent text-white rounded-xl font-semibold hover:scale-[1.02] hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
