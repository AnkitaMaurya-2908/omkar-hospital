import React from "react";

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  colSpan = "",
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`flex items-start gap-4 p-2 rounded-xl bg-white/5 border border-white/10
      w-full max-w-md shadow-md transition-transform duration-500 ease-out hover:scale-101
      ${colSpan}`}
    >
      <div className="w-12 h-12 rounded-lg bg-[#ee6c4d]/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#ee6c4d]" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-white text-sm break-all">{value}</p>
      </div>
    </Wrapper>
  );
}
