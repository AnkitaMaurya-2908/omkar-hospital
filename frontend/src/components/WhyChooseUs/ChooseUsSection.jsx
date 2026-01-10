"use client";

import React, { useState } from "react";
import { services } from "@/data/whyChooseUsData";
import ChooseUsCard from "./ChooseUsCard";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-38">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-[#ee6c4d] tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-4xl pb-3">
            We provide finest patient&#39;s Care
            <br className="block" />
            <span className="text-gray-900">&amp; Ammenities</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Onkar Hospital is a world of comprehensive healthcare where your
            well-being takes center stage. At Onkar Hospital, we&#39;re
            dedicated to providing you with personalized and compassionate
            medical services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ChooseUsCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
