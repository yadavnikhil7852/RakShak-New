import React from "react";

export default function Splash({ onContinue, onDonation }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <div className="relative z-30 bg-white/50 p-8 rounded-3xl shadow-2xl text-center w-11/12 max-w-lg backdrop-blur-md border border-white/30">
        <div className="flex items-center justify-center mb-6">
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800">RakSHak</h1>
        <p className="text-gray-600 mt-3 italic">"A Friend in Tough Times"</p>

        {/* Features */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-700">
          <div className="flex flex-col items-center">
            ⚡ <span className="font-semibold">Fast</span>
          </div>
          <div className="flex flex-col items-center">
            🔒 <span className="font-semibold">Secure</span>
          </div>
          <div className="flex flex-col items-center">
            🤝 <span className="font-semibold">Support</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={onContinue}
            className="px-6 py-3 bg-red-600/90 text-white rounded-xl shadow-lg hover:bg-red-700 hover:scale-105 transition-all"
          >
            🚀 Get Started
          </button>
          <button
            onClick={onDonation}
            className="px-6 py-3 bg-green-600/90 text-white rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transaction-all"
          >
            💝 Donation
          </button>
        </div>
      </div>
    </div>
  );
}
