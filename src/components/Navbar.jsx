import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "skills", "about", "services", "work", "contact"];

    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-purple-500 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <motion.div
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-purple-400 text-2xl font-extrabold tracking-wide cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Maira.
        </motion.div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8 text-white uppercase text-sm font-semibold tracking-wide">
          {["Home", "Skills", "About", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-purple-400 ${
                activeSection === item.toLowerCase()
                  ? "after:w-full text-purple-400"
                  : "after:w-0 hover:after:w-full"
              } after:transition-all after:duration-300`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:scale-105 transition transform duration-300 shadow"
          >
            Let’s Connect
          </a>
        </div>

        {/* mobile button */}
        <button
          className="md:hidden text-purple-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-black/80 text-white p-6 absolute w-full top-full left-0 flex flex-col gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Skills", "About", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setMenuOpen(false);
              }}
              className={`${
                activeSection === item.toLowerCase() ? "text-purple-400" : ""
              } transition-colors`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-center shadow"
          >
            Let’s Connect
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
