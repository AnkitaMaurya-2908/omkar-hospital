export default function ChooseUsCard({ icon: Icon, title, onHover, onLeave }) {
  return (
    <div className=" flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-3 py-4 transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Icon box */}
      <div className=" w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0" >
        <Icon className="w-7 h-7 text-orange-400" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xs md:text-sm font-lg text-gray-900">{title}</h3>
    </div>
  );
}
