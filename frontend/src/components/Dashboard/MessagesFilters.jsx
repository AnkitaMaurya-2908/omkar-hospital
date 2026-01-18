
"use client";

export default function MessagesFilters({
  search,
  setSearch,
  category,
  setCategory,
  onApply,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        >
          <option value="">All Categories</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Appointment">Appointment</option>
          <option value="Emergency">Emergency</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Others">Others</option>
        </select>

        <button
          onClick={onApply}
          className="bg-[#293241] text-white rounded-lg px-4 py-2 w-full"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
