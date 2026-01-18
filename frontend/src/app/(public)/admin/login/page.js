"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import API from "@/app/services/api";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/api/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      router.push("/admin/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 md:py-18 lg:py-28 flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-md w-full mx-auto flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#293241] mb-3">
            Welcome back!
          </h1>

          <p className="text-gray-500 mb-10">
            Simplify your workflow and boost your productivity with Onkar
            Hospital Admin Panel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <input
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee6c4d]"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee6c4d]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#ee6c4d] text-white font-semibold text-lg hover:bg-gray-900 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#f6fbf4] rounded-3xl p-12 w-full max-w-lg flex flex-col items-center text-center">
            <Image
              src="/login-vector.png"
              alt="Illustration"
              className="w-80"
              height={80}
              width={80}
            />

            <h2 className="text-2xl font-semibold text-[#293241] mt-6">
              Make your work easier and organized
            </h2>

            <p className="text-gray-500 mt-2">
              with <span className="font-semibold">Onkar Hospital</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
