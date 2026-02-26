import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-700 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Let’s Build Your Next Enterprise Solution
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() =>
          window.open(
            "https://softwalletinnovativetechnologies.cloud/",
            "_blank",
          )
        }
        className="px-10 py-3 bg-white text-black font-semibold rounded-full shadow-xl"
      >
        Visit Company Website
      </motion.button>
    </section>
  );
}
