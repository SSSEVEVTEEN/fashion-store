"use client";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { useSession, signOut } from "next-auth/react";
import { ShoppingBag, User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const count = useCartStore((s) => s.count)();
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-widest text-gray-900">
            LUXE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">首页</Link>
            <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">全部商品</Link>
            <Link href="/products?category=上衣" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">上衣</Link>
            <Link href="/products?category=裤装" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">裤装</Link>
            <Link href="/products?category=裙装" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">裙装</Link>
            <Link href="/products?category=外套" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">外套</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900">
              <ShoppingBag size={22} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            {session ? (
              <div className="flex items-center gap-2">
                <span className="hidden md:block text-sm text-gray-600">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="p-2 text-gray-600 hover:text-gray-900"
                  title="退出登录"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link href="/login" className="p-2 text-gray-600 hover:text-gray-900">
                <User size={22} />
              </Link>
            )}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {["全部商品", "上衣", "裤装", "裙装", "外套"].map((cat) => (
            <Link
              key={cat}
              href={cat === "全部商品" ? "/products" : `/products?category=${cat}`}
              className="text-sm text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
