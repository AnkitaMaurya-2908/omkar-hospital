"use client";

export default function MessageModal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#3d5a80] rounded-xl w-[90%] max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-black text-xl"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold text-white mb-4">
          Message Details
        </h2>

        <div className="space-y-3 text-white text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{message.fullName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            <span>{message.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Category:</span>
            <span>{message.category}</span>
          </div>

          <div>
            <span className="font-semibold">Message:</span>
            <p className="mt-2 text-white whitespace-pre-wrap">
              {message.message}
            </p>
          </div>

          <div className="flex justify-between text-white">
            <span className="font-semibold">Date:</span>
            <span>
              {new Date(message.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
