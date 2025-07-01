import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Vercel"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
    },
  ];

  const skillIcons = {
    React: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    JavaScript: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    "Tailwind CSS": "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    HTML: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    CSS: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    "Node.js": "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    "Express.js": "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    Firebase: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    Git: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    GitHub: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    "VS Code": "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    Vercel: "data:image/png;base64,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",
    "Problem Solving": "data:image/jpeg;base64,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",
    Teamwork: "https://img.icons8.com/color/48/teamwork.png",
    Communication: "https://img.icons8.com/color/48/communication.png",
    Adaptability: "https://img.icons8.com/color/48/change.png",
  };

  return (
    <section  id="skills"className="relative py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden">
      {/* purple animated blob */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-14 text-purple-400">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareColor="white"
              className="rounded-3xl"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-purple-500/30 transition h-[350px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-2">{cat.title}</h3>
                <ul className="space-y-2 text-gray-300 text-left w-full">
                  {cat.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-purple-800/20 px-3 py-2 rounded shadow-inner"
                    >
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-5 h-5"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
