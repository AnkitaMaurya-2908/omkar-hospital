import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/HeroSection/Navbar";
import React from "react";
import Image from "next/image";
import AboutFeatures from "@/components/AboutPage/Features";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-4 mt-28 lg:mt-36 mb-19">
        <div className="flex flex-col mb-6">
          <span className="text-sm font-semibold text-[#ee6c4d] uppercase tracking-wide">
            About Us
          </span>
          <h1 className="text-[#293241] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Onkar Hospital
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Onkar Hospital is committed to providing reliable and
              compassionate healthcare services to the community. With a focus
              on patient safety, accurate diagnosis, and effective treatment, we
              strive to deliver quality medical care in a comfortable and
              supportive environment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our experienced medical team works with dedication to ensure every
              patient receives personalized attention and trusted care.
            </p>
          </div>
          <AboutFeatures />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 mt-12">
          <div className=" relative md:col-span-2 h-[300px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md  transition-transform duration-500 ease-out hover:scale-101 ">
            <Image
              src="/hospital-english-banner.png"
              alt="Nail service"
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden md:block relative md:col-span-1">
            <div className="relative h-[300px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md transition-transform duration-500 ease-out hover:scale-101">
              <Image
                src="/hospital-logo.png"
                alt="Perfect nails"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
