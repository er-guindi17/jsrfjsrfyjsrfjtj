import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Bot className="w-20 h-20 text-purple-400" />
        </motion.div>

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops... página no encontrada</p>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
