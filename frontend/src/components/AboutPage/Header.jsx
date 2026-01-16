import React from "react";
import Image from "next/image";
import Specialities from "@/components/AboutPage/Specialities";

export default function AboutPageHeader() {
  return (
    <div>
      <section className="py-8 md:py-16 px-4 md:px-8 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
            {/* Right Side - Content */}
            <div>
              <span className="uppercase text-[#ee6c4d]">About us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Explore our Centres of Clinical Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Onkar Hospital&#39;s Centres of Excellence offer world-class,
                state-of-the-art facilities across multiple locations,
                delivering exceptional outcomes in key specialties and super
                specialties.
              </p>

              {/* Specialty Grid */}
              <Specialities />
            </div>
            <div className="hidden lg:block relative pt-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ot.jpeg"
                  alt="Medical professionals in surgery"
                  width={1200}
                  height={800}
                  className="w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] object-cover transition-transform duration-500 ease-out hover:scale-101 shadow-md hover:shadow:lg"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
