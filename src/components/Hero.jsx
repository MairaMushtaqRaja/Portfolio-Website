import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden"
    >
      {/* animated background behind code box */}
      <motion.div
        className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-[150px] opacity-20 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* left side text */}
      <motion.div
        className="flex flex-col gap-6 max-w-xl z-10 md:pl-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-purple-400">
          Hi, I’m <span className="text-cyan-300">Maira Mushtaq</span>
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "Full Stack Developer",
            2000,
            "React Js",
            2000,
            "Node Js",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl font-semibold text-cyan-300"
        />
        <p className="text-gray-300 leading-relaxed">
          I craft responsive, scalable, and modern web applications with a clean
          code style and user–centered design approach.
        </p>
        <div className="flex gap-4 mt-6 flex-wrap">
          <a
            href="#work"
            className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-purple-500/50 transition font-semibold"
          >
            View My Work
          </a>
          <a
            href="/Maira_Mushtaq_Resume.pdf"
            download="Maira_Mushtaq_Resume.pdf"
            className="flex items-center gap-2 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full transition font-semibold"
          >
            <FaDownload className="w-4 h-4" />
            Download My CV
          </a>
        </div>
      </motion.div>

      {/* right side animated code preview */}
      <motion.div
        className="relative w-full max-w-lg bg-[#0f172a] text-left rounded-3xl shadow-2xl overflow-hidden border border-purple-600 z-10 mt-10 md:mt-0 md:ml-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* code header */}
        <div className="flex gap-2 items-center px-4 py-2 bg-[#1e293b] border-b border-purple-600 rounded-t-3xl">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-auto text-purple-400 text-xs">Portfolio.jsx</span>
        </div>

        {/* animated typing code */}
        <div className="p-6 font-mono text-base text-green-400 leading-relaxed">
          <TypeAnimation
            sequence={[
              `const developer = {`,
              1500,
              `  name: "Maira",`,
              1500,
              `  role: "Full Stack Developer",`,
              1500,
              `  skills: ["React", "Node.js", "Tailwind"],`,
              1500,
              `};`,
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
