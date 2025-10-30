// Donation.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Donation() {
  const [amount, setAmount] = useState("");
  const [donors, setDonors] = useState([
    { name: "Sahil", amount: 5000 },
    { name: "Rahul", amount: 10000 },
    { name: "Abhi", amount: 2000 },
  ]);
  const [displayTotal, setDisplayTotal] = useState(0);

  const totalCollected = donors.reduce((sum, d) => sum + d.amount, 0);
  const goal = 50000;

  // Animate live counter
  useEffect(() => {
    let start = displayTotal;
    const end = totalCollected;
    if (start === end) return;

    let step = (end - start) / 40; // smooth step
    let counter = start;

    const interval = setInterval(() => {
      counter += step;
      if ((step > 0 && counter >= end) || (step < 0 && counter <= end)) {
        counter = end;
        clearInterval(interval);
      }
      setDisplayTotal(Math.floor(counter));
    }, 30);

    return () => clearInterval(interval);
  }, [totalCollected]);

  const handleDonate = (e) => {
    e.preventDefault();
    if (amount) {
      setDonors([{ name: "You", amount: parseInt(amount) }, ...donors]);
      setAmount("");
    }
  };

  const chartData = donors.map((d) => ({ name: d.name, value: d.amount }));
  const COLORS = ["#16a34a", "#ef4444", "#facc15", "#3b82f6", "#9333ea"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mt-10 max-w-5xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border-4 border-yellow-300"
      >
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-2">
          💝 Support Relief Efforts
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Every contribution makes a difference. Join us in helping those in need.
        </p>

        {/* Progress Bar with Live Counter */}
        <div className="mb-10">
          <div className="flex justify-between text-sm mb-2 font-semibold">
            <span className="text-gray-700">
              Collected: ₹{displayTotal.toLocaleString()}
            </span>
            <span className="text-gray-500">Goal: ₹{goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
            <motion.div
              className="bg-green-500 h-5"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((totalCollected / goal) * 100, 100)}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Form */}
          <form
            onSubmit={handleDonate}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Make a Donation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <input
              type="number"
              placeholder="Enter Amount (₹)"
              className="w-full px-4 py-3 rounded-xl border mb-4 focus:ring-2 focus:ring-red-400"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <div className="flex items-center gap-4 mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="method" defaultChecked /> UPI
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="method" /> Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="method" /> Netbanking
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition"
            >
              🚀 Donate Now
            </motion.button>
          </form>

          {/* Pie Chart + Donors */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Donation Breakdown</h2>
            <div className="h-64 mb-6">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <h2 className="text-lg font-bold mb-3 text-gray-700">🙏 Recent Donors</h2>
            <AnimatePresence>
              <ul className="space-y-3">
                {donors.map((donor, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm"
                  >
                    <span className="font-medium">{donor.name}</span>
                    <span className="text-green-600 font-semibold">
                      ₹{donor.amount}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

