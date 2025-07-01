import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#120822] to-[#1b0f2f] py-10 text-white overflow-hidden">
      {/* purple animated blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[150px] opacity-20 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-4 relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4 text-2xl font-bold text-purple-400">
          <span>&lt;/&gt;</span> Maira
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/MairaMushtaqRaja"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-300 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/maira-mushtaq-26723b287/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-300 transition"
          >
            <Linkedin size={24} />
          </a>
         
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Maira Mushtaq. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
