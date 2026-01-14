import React from "react";

export default function AboutFeatures() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "Seamless Care",
          "Comprehensive Care",
          "Patient-Centered Care",
          "Cutting-Edge Technology",
          "Warm and Welcoming Environment",
          "Expert Doctors",
          "Personalized Approach",
          "Positive Reviews",
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className="w-6 h-6 rounded-full bg-[#ee6c4d] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
