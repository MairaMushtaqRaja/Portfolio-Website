import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Connect() {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5udv9le",
        "template_mws0za2",
        form.current,
        "AhJ92N6BQgXaTbNoY"
      )
      .then(
        () => {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            setShowForm(false);
          }, 2000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Error sending message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#120822] to-[#1b0f2f] text-white overflow-hidden"
    >
      {/* purple blob */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-3xl mx-auto px-4 relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-4 text-purple-400">
          Let’s Connect
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          I’m always excited to hear about new projects and ideas. Let’s build
          something great together!
        </p>

        {/* social links */}
        <div className="flex justify-center gap-4 mb-8">
        
         
          <a
            href="https://github.com/MairaMushtaqRaja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-800 transition"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/maira-mushtaq-26723b287/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
          >
            <Linkedin />
          </a>
        </div>

        {/* open form button */}
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl hover:scale-105 transition-transform duration-300 font-semibold"
        >
          Open Contact Form
        </button>

        {/* the form */}
        {showForm && (
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-8 bg-white/10 backdrop-blur p-6 rounded-2xl border border-purple-600/20 shadow-xl flex flex-col gap-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="px-4 py-2 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-sm text-gray-300 underline"
            >
              Cancel
            </button>
          </motion.form>
        )}

        {/* animated popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
            >
              Message Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
