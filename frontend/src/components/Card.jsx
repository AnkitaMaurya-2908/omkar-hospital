import { MdOutlineArrowOutward } from "react-icons/md";

export default function Card({
  badgeText,
  title,
  description,
}) {
  return (
    <div className="relative ">

      {/* Left badge */}
      <button className="absolute -top-4 -left-3 bg-zinc-200 text-[#293241] text-xs font-light px-4 py-1 rounded-full">
        {badgeText}
      </button>

      {/* Right arrow */}
      <button
        className="absolute -top-4 -right-3 bg-zinc-200 p-1 rounded-full"
      >
        <MdOutlineArrowOutward />
      </button>

      {/* Content */}
      <h2 className="pt-8 text-sm font-medium text-[#293241]">
        {title}
      </h2>

      <p className="text-xs py-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}
