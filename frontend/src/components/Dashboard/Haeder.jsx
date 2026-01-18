// "use client";

// export default function Header({ activeTab }) {
//   const getTitle = () => {
//     if (activeTab === "leads") return "Leads Management";
//     if (activeTab === "analytics") return "Analytics Overview";
//     return "Dashboard";
//   };

//   return (
//     <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//       <h2 className="text-xl font-semibold text-[#293241]">
//         {getTitle()}
//       </h2>

//       <div className="flex items-center gap-3">
//         <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
//           Logout
//         </button>

//         <button className="px-4 py-2 text-sm bg-[#ee6c4d] text-white rounded-lg hover:bg-gray-800">
//           Admin
//         </button>
//       </div>
//     </header>
//   );
// }



"use client";

export default function Header({ activeTab }) {
  const getTitle = () => {
    if (activeTab === "leads") return "Leads Management";
    if (activeTab === "analytics") return "Analytics Overview";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between">
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold ml-12 md:ml-0 text-[#293241] truncate">
        {getTitle()}
      </h2>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-2 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          Logout
        </button>

        <button className="px-3 py-2 text-xs sm:text-sm bg-[#ee6c4d] text-white rounded-lg">
          Admin
        </button>
      </div>
    </header>
  );
}

