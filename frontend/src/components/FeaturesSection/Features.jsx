import React from "react";
import { featuresData } from "@/data/featuresData";

export default function Features() {
  return (
    <div className=" w-full bg-[#3d5a80] py-1 md:py-2">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-6 text-xs lg:text-sm font-light text-white">
          {featuresData.map(({ icon: Icon, text, onlyLg }) => (
            <div
              key={text}
              className={`flex bg- px-3 py-1 rounded-md items-center gap-2  ${
                onlyLg ? "hidden lg:flex" : ""
              } p-1 shadow-sm`}
            >
              <Icon size={24} className="text-white" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
