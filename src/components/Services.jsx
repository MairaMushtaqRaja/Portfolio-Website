import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const services = [
  {
    title: "Web Design",
    description:
      "Crafting responsive, modern, and visually appealing web designs tailored to your brand.",
    icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing seamless and intuitive user interfaces that enhance user experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  },
  {
    title: "Problem Solving",
    description:
      "Analyzing and solving complex coding challenges with efficient, clean solutions.",
    icon: "https://cdn-icons-png.flaticon.com/512/2541/2541972.png",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden"
    >
      {/* animated purple blob */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20 z-0"
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
        <h2 className="text-5xl font-extrabold mb-14 text-purple-400">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareColor="white"
              className="rounded-3xl"
            >
              <motion.div
                className={`bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 flex flex-col items-center shadow-xl cursor-pointer transition-transform duration-300 h-[320px] ${
                  active === idx ? "scale-105 rotate-3" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(idx)}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-purple-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {service.description}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
