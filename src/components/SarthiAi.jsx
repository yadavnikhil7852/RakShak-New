import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const adviceData = {
  flood: [
    "mMove to higher ground immediately.",
    "AAvoid walking or driving through floodwaters.",
    "hHold onto sturdy objects if water current is strong.",
    "lLook for floating wood or strong objects to stay afloat.",
    "tTurn off electricity if possible.",
    "sSignal rescuers with bright cloth or flashlight.",
    "sStay calm and conserve your energy.",
    "kKeep your phone dry and charged for emergency calls."
  ],
  fire: [
    "sStay low to the ground to avoid smoke inhalation.",
    "cCover nose and mouth with a wet cloth.",
    "dDo not use elevators, always use stairs.",
    "iIf possible, move outside immediately.",
    "iIf trapped, signal from a window or balcony.",
    "cClose doors between you and the fire.",
    "sStop, drop, and roll if clothes catch fire.",
    "sStay calm and call for help loudly."
  ],
  debris: [
    "cCover your mouth and nose with cloth to avoid dust.",
    "dDo not light matches or lighters.",
    "tTap on a pipe or wall to alert rescuers.",
    "uUse your phone flashlight if battery allows.",
    "cConserve oxygen by staying calm and breathing slowly.",
    "aAvoid unnecessary movement to prevent dust collapse.",
    "pProtect your head with arms or cloth.",
    "lListen carefully for rescue team instructions."
  ]
};

// ✅ Fixed typewriter effect (no missing 2nd char)
function Typewriter({ text, delay = 40 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    setDisplayedText(""); // reset

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[i]);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, delay);
    }, 50); // small delay to avoid batching bug

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className="whitespace-normal break-words">{displayedText}</span>
  );
}

export default function SarthiAi({ onClose }) {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start 
                 bg-gradient-to-br from-blue-50 via-white to-pink-50 p-6 
                 pt-28"
    >
      {/* Logo + Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-2xl font-bold px-4 py-2 rounded-2xl shadow-lg">
            🧭 Sarthi AI
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent"
        >
          📍 Your location has been shared with volunteers — Sarthi AI will
          guide you until help arrives.
        </motion.p>
      </motion.div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelected("flood")}
          className="py-6 bg-blue-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
        >
          🌊 Stuck in Flood
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelected("fire")}
          className="py-6 bg-red-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
        >
          🔥 Stuck in Fire
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelected("debris")}
          className="py-6 bg-gray-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition"
        >
          🧱 Trapped in Debris
        </motion.button>
      </div>

      {/* Advice Section */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              📝 Survival Tips:
            </h2>
            <ul className="space-y-3 text-gray-700">
              {adviceData[selected].map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 items-start text-base leading-relaxed whitespace-normal break-words"
                >
                  <span className="font-bold text-blue-600">{idx + 1}.</span>
                  <Typewriter text={point} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="mt-8 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition"
      >
        ⬅️ Back
      </motion.button>
    </div>
  );
}
