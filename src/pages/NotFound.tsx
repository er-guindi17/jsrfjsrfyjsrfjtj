import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
          }
        }}
        className="text-center relative z-10"
      >
        {/* Icono animado (solo entrada) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <Bot className="w-20 h-20 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
        </motion.div>

        {/* Código de error */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-7xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Mensaje */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          Oops... página no encontrada
        </motion.p>

        {/* Botón */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="relative inline-block px-8 py-3 text-lg font-semibold rounded-xl overflow-hidden group no-underline"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-300 group-hover:scale-110 rounded-xl" />
            <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <span className="relative text-white">Volver al inicio</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
