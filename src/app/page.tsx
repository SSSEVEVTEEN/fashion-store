import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
          alt="Hero"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-80">2025 新品系列</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-8">LUXE</h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-90">
            精选时尚，品质生活
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-10 py-4 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
          >
            立即探索
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-center text-2xl font-light tracking-widest mb-12">分类浏览</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["上衣", "裤装", "裙装", "外套"].map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="group relative h-48 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-medium text-gray-800 group-hover:scale-110 transition-transform">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-10 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-light tracking-widest">热门单品</h2>
          <Link href="/products" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4">
            查看全部
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl font-light tracking-widest mb-4">新会员专享</h2>
        <p className="text-gray-400 mb-8">注册即可享受首单9折优惠</p>
        <Link
          href="/register"
          className="inline-block border border-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
        >
          立即注册
        </Link>
      </section>
    </div>
  );
}
