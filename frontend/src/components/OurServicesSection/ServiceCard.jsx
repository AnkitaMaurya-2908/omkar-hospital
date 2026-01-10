import React from "react";
import Image from "next/image";

export default function ServiceCard({
  image,        // image src
  title,
  description,
}) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col">
      
      {/* IMAGE BOX */}
      <div className="w-full aspect-[5/3] sm:aspect-[16/10] rounded-lg bg-gray-100 overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-sm sm:text-base md:text-lg text-center font-semibold text-[#0f172a] mb-1.5 px-1">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm pb-2 text-center text-gray-600 leading-relaxed px-1 flex-grow">
        {description}
      </p>
    </div>
  );
}