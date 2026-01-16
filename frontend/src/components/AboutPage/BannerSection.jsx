import React from "react";
import Image from "next/image";

export default function BannerSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 px-4 md:px-6 lg:px-8 my-12 pb-4 md:pb-12">
      <div className=" relative md:col-span-2 h-[300px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md  transition-transform duration-500 ease-out hover:scale-101 ">
        <Image
          src="/english-banner.png"
          alt="Nail service"
          fill
          className="object-cover"
        />
      </div>

      <div className="block relative md:col-span-1">
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
  );
}
