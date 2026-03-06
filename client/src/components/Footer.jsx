import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-xl bg-white/10 border-t border-white/20 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm text-gray-900">
          © {new Date().getFullYear()} Softwallet Innovative Technologies Pvt.
          Ltd.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://softwalletinnovativetechnologies.cloud/",
              "_blank",
            )
          }
          className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-indigo-900 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
        >
        </motion.button>
      </div>
    </footer>
  );
}
