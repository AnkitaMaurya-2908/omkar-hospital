// "use client";

// export default function MessagesTable({ messages, loading }) {
//   const getCategoryClass = (category) => {
//     switch (category) {
//       case "Appointment":
//         return "text-blue-600";
//       case "Emergency":
//         return "text-red-600";
//       case "General Inquiry":
//         return "text-purple-600";
//       case "Follow-up":
//         return "text-green-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   if (loading) {
//     return <p className="p-6 text-gray-500">Loading messages...</p>;
//   }

//   if (messages.length === 0) {
//     return <p className="p-6 text-gray-500">No messages found</p>;
//   }

//   return (
//     <div className="bg-white text-[#293241] rounded-xl border border-gray-200 overflow-x-auto">
//       <table className="w-full">
//         <thead className="bg-[#98c1d9] text-md">
//           <tr>
//             <th className="px-6 py-3 text-left">Name</th>
//             <th className="px-6 py-3 text-left">Phone</th>
//             <th className="px-6 py-3 text-left">Category</th>
//             <th className="px-6 py-3 text-left">Message</th>
//             <th className="px-6 py-3 text-left">Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {messages.map((msg) => (
//             <tr key={msg._id} className="border-t hover:bg-gray-50 text-sm">
//               <td className="px-6 py-4 font-medium">
//                 {msg.fullName}
//               </td>

//               <td className="px-6 py-4">
//                 {msg.phone}
//               </td>

//               <td
//                 className={`px-6 py-4 font-medium ${getCategoryClass(
//                   msg.category
//                 )}`}
//               >
//                 {msg.category}
//               </td>

//               <td className="px-6 py-4 max-w-xs truncate">
//                 {msg.message}
//               </td>

//               <td className="px-6 py-4 text-gray-500">
//                 {new Date(msg.createdAt).toLocaleDateString()}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }





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
    <div className="bg-white text-[#293241] rounded-xl border border-gray-200">
      {/* Desktop Table */}
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
              <tr key={msg._id} className="border-t hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 font-medium">{msg.fullName}</td>
                <td className="px-6 py-4">{msg.phone}</td>
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

      {/* Mobile Card View */}
      {/* <div className="md:hidden divide-y">
        {messages.map((msg) => (
          <div key={msg._id} className="p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{msg.fullName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Phone:</span>
              <span>{msg.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Category:</span>
              <span className={getCategoryClass(msg.category)}>
                {msg.category}
              </span>
            </div>

            <div>
              <span className="font-semibold">Message:</span>
              <p className="text-gray-600 mt-1 line-clamp-3">
                {msg.message}
              </p>
            </div>

            <div className="flex justify-between text-gray-500">
              <span className="font-semibold">Date:</span>
              <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div> */}

      {/* Mobile Stacked Table View */}
<div className="md:hidden divide-y">
  {messages.map((msg) => (
    <div
      key={msg._id}
      className="grid grid-cols-2 gap-y-2 px-4 py-3 text-sm"
    >
      <span className="font-semibold text-gray-700">Name</span>
      <span className="text-right">{msg.fullName}</span>

      <span className="font-semibold text-gray-700">Phone</span>
      <span className="text-right">{msg.phone}</span>

      <span className="font-semibold text-gray-700">Category</span>
      <span
        className={`text-right font-medium ${getCategoryClass(
          msg.category
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

    </div>
  );
}
