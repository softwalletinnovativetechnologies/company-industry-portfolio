import { motion } from "framer-motion";

const techStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "AWS",
  "Firebase",
  "REST APIs",
  "WordPress",
];

export default function TechStackSection() {
  return (
    <section className="py-28 text-indigo-900 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold mb-14"
      >
        Technology Stack We Use
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {techStack.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-black"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
