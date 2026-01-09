// import React from "react";

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
// }) {
//   return (
//     <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition w-full">
      
//       {/* Top-right red dot */}

//       {/* Icon box */}
//       <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-[#3d5a80] mb-6">
//         {Icon && <Icon size={26} className="text-[#3d5a80] hover:text-white" />}
//       </div>

//       {/* Title */}
//       <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-3">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// }


import React from "react";
import Image from "next/image";

export default function ServiceCard({
  image,        // image src
  title,
  description,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm hover:shadow-md transition w-full">
      
      {/* IMAGE BOX */}
      <div className="w-full h-50 rounded-xl bg-gray-100 overflow-hidden mb-5">
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg md:text-xl text-center font-semibold text-[#0f172a] mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm pb-3 text-center text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
