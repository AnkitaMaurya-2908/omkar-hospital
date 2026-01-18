"use client";

export default function MessagesTable({ messages, loading }) {
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
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
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
            <tr key={msg._id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">
                {msg.fullName}
              </td>

              <td className="px-6 py-4">
                {msg.phone}
              </td>

              <td
                className={`px-6 py-4 font-medium ${getCategoryClass(
                  msg.category
                )}`}
              >
                {msg.category}
              </td>

              <td className="px-6 py-4 max-w-xs truncate">
                {msg.message}
              </td>

              <td className="px-6 py-4 text-gray-500">
                {new Date(msg.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
