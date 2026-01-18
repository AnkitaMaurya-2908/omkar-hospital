// "use client";

// import { useState } from "react";
// import Sidebar from "@/components/Dashboard/Sidebar";
// import Header from "@/components/Dashboard/Haeder";
// import Leads from "@/components/Dashboard/Leads";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("leads");

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <main className="flex-1">
//         <Header activeTab={activeTab} />
//         <div className="p-6">
//           {activeTab === "leads" && <Leads />}
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import Leads from "@/components/Dashboard/Leads";

export default function DashboardPage() {
  return <Leads />;
}
