"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "注册失败");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-light text-center mb-10 tracking-widest">注册</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-2">姓名</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="您的姓名"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">邮箱</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="至少6位"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? "注册中..." : "注册"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          已有账号？{" "}
          <Link href="/login" className="text-gray-900 underline underline-offset-4">
            立即登录
          </Link>
        </p>
      </div>
    </div>
  );
}
