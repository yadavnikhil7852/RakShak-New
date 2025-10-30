import React from "react";

export default function VolunteerHome() {
  return (
    <div className="p-6 pt-24 bg-gradient-to-br from-green-50   ">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
        🤝 Volunteer Dashboard
      </h2>

      {/* SOS Requests */}
      <div className="bg-white/80 p-6 rounded-2xl shadow-lg backdrop-blur-md border mb-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          🚨 Nearby SOS Requests
        </h3>
        <ul className="space-y-4">
          <li className="p-4 bg-red-50 border border-red-200 rounded-xl shadow flex justify-between items-center">
            <div>
              <p className="font-semibold text-red-700">Person A needs Food</p>
              <p className="text-sm text-gray-500">📍 1.2 km</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">
              Assist
            </button>
          </li>

          <li className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl shadow flex justify-between items-center">
            <div>
              <p className="font-semibold text-yellow-700">
                Person B needs Medical Aid
              </p>
              <p className="text-sm text-gray-500">📍 2.5 km</p>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700">
              Assist
            </button>
          </li>
        </ul>
      </div>

      {/* Volunteer Actions */}
      <div className="grid grid-cols-2 gap-4 mb-20">
        <button className="p-4 bg-blue-100 text-blue-700 rounded-xl shadow hover:bg-blue-200">
          🗺️ View Map
        </button>
        <button className="p-4 bg-purple-100 text-purple-700 rounded-xl shadow hover:bg-purple-200">
          📞 Contact Victim
        </button>
        <button className="p-4 bg-green-100 text-green-700 rounded-xl shadow hover:bg-green-200">
          ✅ Mark Completed
        </button>
        <button className="p-4 bg-gray-100 text-gray-700 rounded-xl shadow hover:bg-gray-200">
          📋 My Tasks
        </button>
      </div>

      {/* Accept & Navigate */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md">
        <button className="w-full py-4 bg-green-600 text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-green-700 animate-pulse">
          🚀 Accept & Navigate
        </button>
      </div>
    </div>
  );
}
