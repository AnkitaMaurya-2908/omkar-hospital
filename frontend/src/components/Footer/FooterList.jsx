import React from "react";

export default function FooterList({ title, items }) {
  return (
    <div className="space-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
      {/* Heading */}
      <h3 className="text-lg font-md mb-6 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-[#ee6c4d] rounded-full"></span>
      </h3>

      {/* Links */}
      <ul className="space-y-2 flex flex-col items-center sm:items-start">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={item.href || "#"}
              className="text-gray-400 hover:text-[#ee6c4d] transition-all duration-300 text-sm sm:text-base flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-2 h-0.5 bg-[#ee6c4d] transition-all duration-300"></span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
