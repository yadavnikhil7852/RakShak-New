import React from "react";

export default function GuestHome() {
  return (
    <div className="p-6 pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen text-center">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">👀 Guest Mode</h2>
      <p className="text-gray-600 max-w-lg mx-auto mb-6">
        Welcome! You’re browsing as a guest. You can explore features, see how
        RakSHak works, but some emergency 
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
        🔑 Login / Sign Up
      </button>
    </div>
  );
}
