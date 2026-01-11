import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#293241] via-[#2a3442] to-[#1f2937] text-white relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ee6c4d] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ee6c4d] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">

          {/* Top Brand Section */}
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
                  Our skilled doctors provide reliable, compassionate care using advanced
                  medical technology for better patient outcomes and healthier communities.
                </p>
              </div>

              <div className="lg:text-right space-y-4">
                <h4 className="text-xl sm:text-2xl font-bold mb-4">Ready to get started?</h4>
                <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[#ee6c4d] hover:bg-[#d85a3d] text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="#emergency"
                    className="inline-flex items-center justify-center px-6 py-2 border-2 border-white/20 hover:border-[#ee6c4d] text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Emergency Care
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">

            {/* COMPANY */}
            <div className="space-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-lg font-md mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-[#ee6c4d] rounded-full"></span>
              </h3>

              <ul className="space-y-2 flex flex-col items-center sm:items-start">
                {[
                  "Home",
                  "About Us",
                  "Our Services",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms & Conditions"
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#ee6c4d] transition-all duration-300 text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#ee6c4d] transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="space-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-lg font-md mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-[#ee6c4d] rounded-full"></span>
              </h3>

              <ul className="space-y-2 flex flex-col items-center sm:items-start">
                {[
                  "24/7 Emergency",
                  "OPD",
                  "IPD",
                  "Operation Theatre",
                  "Labratory",
                  "Pharmacy"
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#ee6c4d] transition-all duration-300 text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#ee6c4d] transition-all duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
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
                      2115 Ash Dr. San Jose,<br />
                      South Dakota 2584714
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 All Rights Reserved by{" "}
              <span className="text-[#ee6c4d] font-semibold">
                Onkar Hospital
              </span>
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

    </footer>
  );
};

export default Footer;
