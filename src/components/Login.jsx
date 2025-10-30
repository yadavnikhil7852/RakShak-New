// Login.jsx
import React, { useState } from "react";

export default function Login({ onClose, onLogin }) {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role || !name || !mobile) {
      alert("Please fill all fields!");
      return;
    }
    onLogin({ role, name, mobile });
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white w-11/12 max-w-md p-8 rounded-2xl shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🔑 Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Login As */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Login as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="victim">Victim</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all"
          >
            🚀 Login
          </button>
        </form>
      </div>
    </div>
  );
}
