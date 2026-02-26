import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-28 text-indigo-900 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold mb-16"
      >
        About Our Company
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3 text-indigo-900">Vision</h3>
          <p className="text-gray-800 leading-relaxed">
            To become a globally trusted technology partner empowering
            businesses through smart digital innovation.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3 text-indigo-900">Mission</h3>
          <p className="text-gray-800 leading-relaxed">
            To design and deliver high-quality, scalable and cost-effective
            software solutions tailored to real-world business challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
