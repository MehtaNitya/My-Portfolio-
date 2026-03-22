import PageTransition from "@/components/PageTransition";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* LEFT CARD */}
          <div className="glass p-8 rounded-2xl flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">Personal Info</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaMapMarkerAlt className="text-purple-500 h-6 w-6" />
                <span><strong className="text-white">Location:</strong> Punjab, India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaGraduationCap className="text-purple-500 h-6 w-6" />
                <span><strong className="text-white">Education:</strong> B.Tech IT – Lovely Professional University</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaLaptopCode className="text-purple-500 h-6 w-6" />
                <span><strong className="text-white">Specialization:</strong> Software Development & Data Analytics</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <FaLightbulb className="text-yellow-500" /> Interests
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                <li>Exploring emerging technologies</li>
                <li>Continuous learning</li>
                <li>Productivity and focus improvement</li>
              </ul>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="glass p-8 rounded-2xl flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Professional Summary</h2>
              <p className="text-gray-400 leading-relaxed">
                Motivated Computer Science student with hands-on experience in full-stack development and machine learning projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Academic Background & Experience</h2>
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing B.Tech IT with practical exposure through real-world projects and industry training.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Career Goals</h2>
              <p className="text-gray-400 leading-relaxed">
                To become a proficient full-stack developer and data-driven problem solver.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Strengths & Approach</h2>
              <p className="text-gray-400 leading-relaxed">
                Strong problem-solving ability, adaptability, and collaborative mindset with focus on writing clean and scalable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
