import { motion } from "framer-motion";
import landing from "../assets/images/landing.png";
import blog from "../assets/images/blog.png";
import career from "../assets/images/career.png";
import coffee from "../assets/images/coffee.png";
import doctor from "../assets/images/doctor.png";
import todo from "../assets/images/todo.png";

const projects = [
  {
    title: "Landing SaaS Page",
    description: "High-converting landing page for a SaaS product with modern animations and responsive layout.",
    image: landing,
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://landing-saas-page.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/Landing-SAAS-Page",
  },
  {
    title: "TO DO App",
    description: "Update your daily tasks seamlessly with this app.",
    image: todo,
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://crud-app-mauve-nine.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/CRUD-App",
  },
  {
    title: "Career Coaching Platform",
    description: "Connect job seekers with career coaches with smooth booking.",
    image: career,
    tech: ["React", "Tailwind CSS", "Firebase"],
    liveLink: "https://careercoaching-iota.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/Sensai",
  },
  {
    title: "Doctor UI",
    description: "UI dashboard for doctors to manage patients and appointments seamlessly.",
    image: doctor,
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://doctor-booking-ui-app.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/Doctor-Booking-UI-App",
  },
  {
    title: "Coffee Shop",
    description: "Modern e-commerce coffee ordering web app.",
    image: coffee,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://coffee-shop-website-nine-kappa.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/Coffee-Shop-Website",
  },
  {
    title: "Blogging App",
    description: "Modern blogging platform with markdown and images.",
    image: blog,
    tech: ["React", "Express", "MongoDB"],
    liveLink: "https://blog-app-rouge-kappa.vercel.app/",
    codeLink: "https://github.com/MairaMushtaqRaja/Blog-App",
  },
];

export default function MyWork() {
  return (
    <section
      id="work"
      className="relative py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden"
    >
      {/* purple blur blob */}
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
          My Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-purple-600/20 hover:border-purple-400 shadow-xl p-4 flex flex-col transition-transform duration-500 hover:scale-105 hover:rotate-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-36 w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-600 rounded-full shadow"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-purple-500 text-purple-500 rounded-xl hover:bg-purple-500 hover:text-white transition-colors duration-300"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
