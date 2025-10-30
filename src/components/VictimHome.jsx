import React from "react";

export default function VictimHome({ onSOS }) {
  return (
    <div className="p-6 pt-24 bg-gradient-to-br from-red-50 via-white to-gray-50 min-h-screen">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
        🆘 Victim Dashboard 
      </h2>

      {/* Nearby Shelters */}
      <div className="bg-white/80 p-6 rounded-2xl shadow-lg backdrop-blur-md border mb-6">
        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
          🏥 Nearby Shelters & Hospitals
        </h3>
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.98102278004!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3e6d6b1f3d%3A0x8a85d1b1d8e5!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1694522222222!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          🔍 View Full Map
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-20">
        <button className="p-4 bg-green-100 text-green-700 rounded-xl shadow hover:bg-green-200">
          📞 Call Emergency
        </button>
        <button className="p-4 bg-yellow-100 text-yellow-700 rounded-xl shadow hover:bg-yellow-200">
          🤝 Find Volunteers
        </button>
        <button className="p-4 bg-blue-100 text-blue-700 rounded-xl shadow hover:bg-blue-200">
          📰 Safety Tips
        </button>
        <button className="p-4 bg-purple-100 text-purple-700 rounded-xl shadow hover:bg-purple-200">
          📍 Share Location
        </button>
      </div>

      {/* SOS Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md">
        <button
          onClick={onSOS} // ✅ use prop passed from App.jsx
          className="relative w-full py-4 bg-red-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-red-700 hover:scale-105 transition transform flex items-center justify-center gap-2"
        >
          🚨 SOS Emergency 
          {/* Glowing pulse effect */}
          <span className="absolute inset-0 rounded-2xl border-4 border-red-500 animate-ping opacity-70"></span>
        </button>
      </div>
    </div>
  );
}
