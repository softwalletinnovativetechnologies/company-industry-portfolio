import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight"
        >
          Softwallet Innovative
          <br />
          Technologies Pvt. Ltd.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-900 text-lg tracking-wide"
        >
          <b>Srinagar, Jammu & KASHMIR, INDIA</b>
        </motion.p>
      </motion.div>
    </section>
  );
}
