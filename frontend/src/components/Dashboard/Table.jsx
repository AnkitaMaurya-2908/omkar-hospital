"use client";
import { useState } from "react";
import MessageModal from "./MessageModal";

export default function MessagesTable({ messages, loading }) {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const getCategoryClass = (category) => {
    switch (category) {
      case "Appointment":
        return "text-blue-600";
      case "Emergency":
        return "text-red-600";
      case "General Inquiry":
        return "text-purple-600";
      case "Follow-up":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  if (loading) {
    return <p className="p-6 text-gray-500">Loading messages...</p>;
  }

  if (messages.length === 0) {
    return <p className="p-6 text-gray-500">No messages found</p>;
  }

  return (
    <div className="bg-white text-[#293241] rounded-xl border border-gray-200">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#98c1d9] text-md">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Message</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg._id}
                onClick={() => setSelectedMessage(msg)}
                className="border-t hover:bg-gray-50 text-sm cursor-pointer"
              >
                <td className="px-6 py-4 font-medium">{msg.fullName}</td>
                <td className="px-6 py-4">{msg.phone}</td>
                <td
                  className={`px-6 py-4 font-medium ${getCategoryClass(
                    msg.category,
                  )}`}
                >
                  {msg.category}
                </td>
                <td className="px-6 py-4 max-w-xs truncate">{msg.message}</td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y">
        {messages.map((msg) => (
          <div
            key={msg._id}
            onClick={() => setSelectedMessage(msg)}
            className="grid grid-cols-2 gap-y-2 px-4 py-3 text-sm cursor-pointer hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-700">Name</span>
            <span className="text-right">{msg.fullName}</span>

            <span className="font-semibold text-gray-700">Phone</span>
            <span className="text-right">{msg.phone}</span>

            <span className="font-semibold text-gray-700">Category</span>
            <span
              className={`text-right font-medium ${getCategoryClass(
                msg.category,
              )}`}
            >
              {msg.category}
            </span>

            <span className="font-semibold text-gray-700">Message</span>
            <span className="text-right text-gray-600 line-clamp-2">
              {msg.message}
            </span>

            <span className="font-semibold text-gray-700">Date</span>
            <span className="text-right text-gray-500">
              {new Date(msg.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      <MessageModal
        message={selectedMessage}
        onClose={() => setSelectedMessage(null)}
      />
    </div>
  );
}
