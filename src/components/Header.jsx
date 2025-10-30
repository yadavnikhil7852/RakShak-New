// Header.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw, LogIn } from "lucide-react";

export default function Header({ step, onBack, onReset, onLogin }) {
  const steps = ["Splash", "Role", "Dashboard"];
  const index = steps.indexOf(
    step === "home" ? "Dashboard" : step[0].toUpperCase() + step.slice(1)
  );
  const progress = ((index + 1) / steps.length) * 100;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full flex items-center justify-between bg-white/70 backdrop-blur-md border-b px-4 py-2 z-50 shadow"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-lg font-bold shadow">
          RakSHak
        </div>
        <span className="text-xs text-gray-500 hidden sm:block">Disaster Relief</span>
      </div>

      {/* Progress Bar */}
      <div className="hidden sm:flex flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLogin}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          <LogIn size={16} />
          <span className="hidden sm:inline">Login</span>
        </motion.button>

        {step !== "splash" && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-2 bg-gray-100 text-gray-700 rounded-full shadow hover:bg-gray-200"
          >
            <ArrowLeft size={18} />
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onReset}
          className="p-2 bg-red-100 text-red-600 rounded-full shadow hover:bg-red-200"
        >
          <RotateCcw size={18} />
        </motion.button>
      </div>
    </motion.header>
  );
}
