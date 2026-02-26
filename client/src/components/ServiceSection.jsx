import { motion } from "framer-motion";

const services = [
  "Custom Software Development",
  "Web Application Development",
  "SaaS Product Development",
  "ERP & CRM Systems",
];

export default function ServicesSection() {
  return (
    <section className="py-28 text-blue-900 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold mb-14"
      >
        Our Core IT Services
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.04 }}
            className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold text-black">{service}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
