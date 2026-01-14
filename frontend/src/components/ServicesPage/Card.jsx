import React from "react";
import Image from "next/image";

export default function Card({ image, title, description }) {
  return (
    <div className="relative bg-white rounded-xl p-2 sm:p-3  w-full h-full flex flex-col">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#293241] mb-1.5 px-1">
        {title}
      </h3>
      <div className="w-full aspect-[5/3] sm:aspect-[16/10] rounded-lg bg-gray-100 overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="text-xs sm:text-sm pb-2  text-gray-600 leading-relaxed  flex-grow">
        {description}
      </p>
    </div>
  );
}

