import React from "react";
import Brand from "./Brand";
import FooterList from "./FooterList";
import { companyLinks } from "@/data/footerData";
import { serviceLinks } from "@/data/footerData";
import GetInTouch from "./GetInTouch";
import Copyright from "./Copyright";

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
          <Brand />

          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            <FooterList title="Company" items={companyLinks} />
            <FooterList title="Services" items={serviceLinks} />
            <GetInTouch />
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
