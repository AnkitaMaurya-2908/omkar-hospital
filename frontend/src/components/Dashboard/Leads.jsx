// "use client";

// import { useEffect, useState, useCallback } from "react";
// import API from "@/app/services/api";

// import MessagesFilters from "./MessagesFilters";
// import Table from "./Table"
// import MessagesPagination from "./MessagesPagination";

// export default function Messages() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [page, setPage] = useState(1);

//   const limit = 10;
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchMessages = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await API.get("/api/contact", {
//         params: { search, category, page, limit },
//       });

//       setMessages(res.data.contacts);
//       setTotalPages(res.data.pages || 1);
//     } catch (error) {
//       console.error("Failed to fetch messages", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [search, category, page, limit]);

//   useEffect(() => {
//     fetchMessages();
//   }, [fetchMessages]);

//   const applyFilters = () => {
//     setPage(1);
//     fetchMessages();
//   };

//   return (
//     <div className="space-y-6">
//       <MessagesFilters
//         search={search}
//         setSearch={setSearch}
//         category={category}
//         setCategory={setCategory}
//         onApply={applyFilters}
//       />

//       <Table messages={messages} loading={loading} />

//       <MessagesPagination
//         page={page}
//         totalPages={totalPages}
//         setPage={setPage}
//       />
//     </div>
//   );
// }



"use client";

import { useEffect, useState, useCallback } from "react";
import API from "@/app/services/api";

import MessagesFilters from "./MessagesFilters";
import Table from "./Table";
import MessagesPagination from "./MessagesPagination";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧠 TEMP states (only UI typing)
  const [tempSearch, setTempSearch] = useState("");
  const [tempCategory, setTempCategory] = useState("");

  // 🧠 APPLIED states (trigger API)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/contact", {
        params: { search, category, page, limit },
      });

      setMessages(res.data.contacts);
      setTotalPages(res.data.pages || 1);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  }, [search, category, page, limit]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // ✅ Only runs when Apply button is clicked
  const applyFilters = () => {
    setPage(1);
    setSearch(tempSearch);
    setCategory(tempCategory);
  };

  return (
    <div className="space-y-6">
      <MessagesFilters
        search={tempSearch}
        setSearch={setTempSearch}
        category={tempCategory}
        setCategory={setTempCategory}
        onApply={applyFilters}
      />

      <Table messages={messages} loading={loading} />

      <MessagesPagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
