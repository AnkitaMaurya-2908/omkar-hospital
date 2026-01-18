
"use client";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Haeder";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("leads");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        <Header />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
