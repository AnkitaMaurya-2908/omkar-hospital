import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Brand() {
  return (
    <div className="mb-6 sm:mb-8 pb-8 border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <Image
                src="/hospital-logo.png"
                alt="Onkar Hospital Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Onkar Hospital
              </h3>
              <p className="text-sm text-gray-400">Excellence in Healthcare</p>
            </div>
          </div>

          <p className="text-gray-400 text-base sm:text-md leading-relaxed max-w-xl">
            Our skilled doctors provide reliable, compassionate care using
            advanced medical technology for better patient outcomes and
            healthier communities.
          </p>
        </div>

        <div className="lg:text-right space-y-4">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to get started?
          </h4>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#ee6c4d] hover:bg-[#d85a3d] text-white font-semibold rounded-xl transition-all duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:8756223212"
              className="inline-flex items-center justify-center px-6 py-2 border-2 border-white/20 hover:border-[#ee6c4d] text-white font-semibold rounded-xl transition-all duration-300"
              aria-label="Call Emergency Care"
            >
              Emergency Care
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
