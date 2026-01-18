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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Appointment">Appointment</option>
          <option value="Emergency">Emergency</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Others">Others</option>
        </select>

        {/* Apply Button */}
        <button
          onClick={onApply}
          className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
