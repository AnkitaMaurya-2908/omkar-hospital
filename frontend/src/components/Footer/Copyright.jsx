import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Copyright() {
  return (
    <div className="relative border-t border-white/10 bg-black/20">
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 All Rights Reserved by{" "}
            <span className="text-[#ee6c4d] font-semibold">Onkar Hospital</span>
          </p>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#ee6c4d] transition-all"
              >
                <Icon className="w-5 h-5 text-gray-400 hover:text-[#ee6c4d]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
