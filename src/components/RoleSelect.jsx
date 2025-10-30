import React from "react";
import { motion } from "framer-motion";

export default function RoleSelect({ onSelect }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 pt-20 overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-red-300/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-52 h-52 bg-green-300/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/80 p-10 rounded-3xl shadow-2xl text-center w-11/12 max-w-md backdrop-blur-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          👥 Choose Your Role
        </h2>

        <div className="space-y-6">
          {/* Victim */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("victim")}
            className="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-2xl shadow-lg transition flex justify-between items-center"
          >
            <span className="flex items-center gap-2">🆘 I Need Help</span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-lg">
              Victim
            </span>
          </motion.button>

          {/* Volunteer */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("volunteer")}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg transition flex justify-between items-center"
          >
            <span className="flex items-center gap-2">🤝 I Want to Help</span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-lg">
              Volunteer
            </span>
          </motion.button>

          {/* Guest */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("guest")}
            className="w-full py-4 px-6 bg-gray-200 text-gray-700 rounded-2xl shadow hover:shadow-lg transition flex justify-between items-center"
          >
            <span className="flex items-center gap-2">👀 Explore as Guest</span>
            <span className="text-xs bg-gray-400/20 px-3 py-1 rounded-lg">
              Guest 
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
