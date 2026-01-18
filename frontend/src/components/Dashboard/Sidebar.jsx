"use client";
import React, { useState } from "react";
import { tabs } from "@/data/data";
import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export default function Sidebar({ activeTab, setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#293241] text-white p-2 rounded-lg"
      >
        <FiMenu size={20} />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:relative z-50 h-screen
          bg-white border-r border-gray-200
          transition-all duration-300 ease-in-out flex flex-col

          ${mobileOpen ? "left-0 w-64" : "-left-64 w-64"}
          md:left-0
          ${sidebarOpen ? "md:w-64" : "md:w-20"}
        `}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <h1
            className={`text-2xl text-[#293241] font-bold uppercase transition-all duration-300 ${
              sidebarOpen || mobileOpen
                ? "opacity-100"
                : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Dashboard
          </h1>

          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="hidden md:flex w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 items-center justify-center"
          >
            {sidebarOpen ? (
              <FiChevronLeft className="w-5 h-5 text-[#293241]" />
            ) : (
              <FiChevronRight className="w-5 h-5 text-[#293241]" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-gray-600"
          >
            <FiChevronLeft size={20} />
          </button>
        </div>

        <div className="p-3 flex items-center justify-between border-b border-gray-100">
          <h1
            className={`text-xl text-[#ee6c4d] font-bold transition-all duration-300 ${
              sidebarOpen || mobileOpen
                ? "opacity-100"
                : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Onkar Hospital
          </h1>

          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <FaUserAlt className="text-[#ee6c4d]" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-[#3d5a80] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl flex-shrink-0">{tab.icon}</span>

              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  sidebarOpen || mobileOpen
                    ? "opacity-100"
                    : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
