import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden"
    >
      {/* purple-cyan animated blob */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-[150px] opacity-20 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* center heading */}
        <h2 className="text-5xl font-extrabold text-purple-400 text-center">
          Who I Am
        </h2>

        {/* text + timeline + code */}
        <div className="flex flex-col md:flex-row w-full gap-10 justify-between items-start">
          
          {/* left text + timeline */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              I’m Maira, a passionate Full Stack Developer with a love for crafting
              interactive and responsive user experiences. From concept to deployment,
              I focus on delivering modern, scalable, and maintainable solutions.
            </p>

            {/* timeline */}
            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl border border-purple-600/40 p-4 shadow hover:shadow-purple-600 transition"
              >
                <div className="absolute left-[-10px] top-4 w-4 h-4 bg-purple-500 rounded-full border-2 border-white animate-ping" />
                <h5 className="text-lg font-semibold">BS Information Technology</h5>
                <p className="text-gray-400 text-sm">University of Gujrat, 2023</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl border border-purple-600/40 p-4 shadow hover:shadow-purple-600 transition"
              >
                <div className="absolute left-[-10px] top-4 w-4 h-4 bg-purple-500 rounded-full border-2 border-white animate-ping" />
                <h5 className="text-lg font-semibold">Frontend Developer Intern</h5>
                <p className="text-gray-400 text-sm">Total Soft Solutions, 2024</p>
              </motion.div>
            </div>
          </div>

          {/* right code animation */}
          <motion.div
            className="relative w-full max-w-md bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden border border-purple-600"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* fake code header */}
            <div className="flex gap-2 items-center px-4 py-2 bg-[#1e293b] border-b border-purple-600">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-auto text-purple-400 text-xs">About.jsx</span>
            </div>

            {/* animated typing code */}
            <div className="p-4 font-mono text-sm text-green-400 leading-relaxed bg-black/30 rounded-b-xl">
              <TypeAnimation
                sequence={[
                  `const maira = {`,
                  1500,
                  `  role: "Full Stack Developer",`,
                  1500,
                  `  skills: ["React", "Node.js", "Tailwind"],`,
                  1500,
                  `  experience: "2+ years",`,
                  1500,
                  `};`,
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
