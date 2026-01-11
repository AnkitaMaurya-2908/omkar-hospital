import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="space-y-1 flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-2">
      <h3 className="text-lg font-md mb-6 relative inline-block">
        Get in Touch
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-[#ee6c4d] rounded-full"></span>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 justify-items-center sm:justify-items-start w-full">
        {/* Phone */}
        <a className="flex items-start gap-4 p-2 rounded-xl bg-white/5 border border-white/10 w-full max-w-md">
          <div className="w-12 h-12 rounded-lg bg-[#ee6c4d]/20 flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#ee6c4d]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Call Us</p>
            <p className="text-white font-md">01358-854545</p>
          </div>
        </a>

        {/* Email */}
        <a className="flex items-start gap-4 p-2 rounded-xl bg-white/5 border border-white/10 w-full max-w-md">
          <div className="w-12 h-12 rounded-lg bg-[#ee6c4d]/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#ee6c4d]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Email Us</p>
            <p className="text-white text-sm break-all">
              support@onkarhospital.com
            </p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4 p-2 rounded-xl bg-white/5 border border-white/10 w-full max-w-md sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 rounded-lg bg-[#ee6c4d]/20 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#ee6c4d]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Visit Us</p>
            <p className="text-white">
              2115 Ash Dr. San Jose,
              <br />
              South Dakota 2584714
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
