import React from "react";
import { specialties } from "@/data/specialtiesData";

export default function Specialities() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className="group border-2 border-[#3d5a80] rounded-2xl p-2 hover:bg-[#3d5a80] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center"
        >
          <div className="text-4xl mb-3 text-[#3d5a80] group-hover:text-white transition-colors duration-300">
            <specialty.icon />
          </div>
          <span className="text-[#3d5a80] group-hover:text-white font-semibold text-base transition-colors duration-300">
            {specialty.name}
          </span>
        </div>
      ))}
    </div>
  );
}
