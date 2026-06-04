"use client";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { useSession, signOut } from "next-auth/react";
import { ShoppingBag, User, LogOut, Menu, X, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const count = useCartStore((s) => s.count)();
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-black text-white text-xs text-center py-2 tracking-wider">
        全场包邮 · 新用户注册享9折优惠
      </div>

      {/* Main nav */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-widest text-black uppercase">
            ApexLoom
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="flex w-full border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="搜索商品..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white px-4 py-2">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black">
              <ShoppingBag size={22} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
            {session ? (
              <div className="flex items-center gap-2">
                <span className="hidden md:block text-sm text-gray-600">{session.user?.name}</span>
                <button onClick={() => signOut()} className="p-2 text-gray-700 hover:text-black" title="退出登录">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link href="/login" className="p-2 text-gray-700 hover:text-black">
                <User size={22} />
              </Link>
            )}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <div className="hidden md:block border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 h-10">
            {[
              { label: "新品上架", href: "/products" },
              { label: "上衣", href: "/products?category=上衣" },
              { label: "裤装", href: "/products?category=裤装" },
              { label: "裙装", href: "/products?category=裙装" },
              { label: "外套", href: "/products?category=外套" },
              { label: "全部商品", href: "/products" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-black hover:font-semibold transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {["全部商品", "上衣", "裤装", "裙装", "外套"].map((cat) => (
            <Link
              key={cat}
              href={cat === "全部商品" ? "/products" : `/products?category=${cat}`}
              className="text-sm text-gray-700 py-1 border-b border-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
