import { motion } from "framer-motion";
import aiImg from "../assets/projects/ai.png";
import shopImg from "../assets/projects/shop.png";
import internshipImg from "../assets/projects/internship.png";

const projects = [
  {
    title: "AI Interview System",
    desc: "A full AI-powered mock interview system that analyzes answers, generates questions, and evaluates performance.",
    tags: ["Next.js", "AI", "Tailwind", "API"],
    image: aiImg,
    live: "https://ai-inteview.vercel.app/",
  },

  {
    title: "Kashmiri Shop Portal",
    desc: "A complete e-commerce platform for Kashmiri products with product catalog, cart system, and admin management.",
    tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
    image: shopImg, // replace later with real image
    live: "https://shopportalkashmiri.vercel.app/",
  },
  {
    title: "Internship & Assessment Portal",
    desc: "Role-based internship management platform with mentor dashboard, student tracking, and skill assessment modules.",
    tags: ["MERN", "Dashboard", "Role-Based", "Assessment"],
    image: internshipImg, // replace later with real image
    live: "https://internshipportal-nine.vercel.app/",
  },

  {
    title: "Hotel Management System",
    desc: "Role-based hotel management platform with admin dashboard, booking tracking, and booking system.",
    tags: ["MERN", "Dashboard", "Role-Based", "Booking"],
    image: hotelImg, // replace later with real image
    live: "https://internshipportal-nine.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold mb-20 text-indigo-900"
      >
        Our Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-3xl border border-white/20 bg-gradient-to-b from-[#0f172a] to-[#020617] p-4 shadow-2xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
                >
                  View Live 👁
                </button>

                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                >
                  Git
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
