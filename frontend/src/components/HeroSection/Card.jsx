import { MdOutlineArrowOutward } from "react-icons/md";

export default function Card({ badgeText, title, description }) {
  return (
    <div className="relative  ">
      <button className="absolute -top-4 -left-3 bg-zinc-200 text-[#293241] text-xs font-light px-4 py-1 rounded-full">
        {badgeText}
      </button>

      <button className="absolute -top-4 -right-3 bg-zinc-200 p-1 rounded-full hover:bg-[#3d5a80] hover:text-white">
        <MdOutlineArrowOutward />
      </button>

      <h2 className="pt-8 text-sm font-medium text-[#293241]">{title}</h2>

      <p className="text-xs py-2 text-gray-600">{description}</p>
    </div>
  );
}
