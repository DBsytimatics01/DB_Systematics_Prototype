import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-blue-500">CoreSynq</span>
      </motion.h1>

      <motion.button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go to Dashboard
      </motion.button>
    </div>
  );
}
