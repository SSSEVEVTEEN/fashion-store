import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 8);
  const newArrivals = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 bg-red-500 px-4 py-1 inline-block">
            2025 新品系列
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-4 uppercase">
            ApexLoom
          </h1>
          <p className="text-lg mb-8 opacity-90">时尚从这里开始 · 品质生活</p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-white text-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-red-500 hover:text-white transition-colors"
            >
              立即购物
            </Link>
            <Link
              href="/products?category=新品"
              className="border-2 border-white text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              查看新品
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "新品上架", sub: "每周更新", color: "bg-pink-50", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
            { title: "限时特惠", sub: "低至5折", color: "bg-yellow-50", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400" },
            { title: "明星同款", sub: "潮流引领", color: "bg-blue-50", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400" },
          ].map((item) => (
            <Link key={item.title} href="/products" className={`${item.color} rounded-xl overflow-hidden flex items-center gap-4 p-4 hover:shadow-md transition-shadow`}>
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.img} alt={item.title} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{item.title}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
                <p className="text-xs text-red-500 mt-1 font-medium">查看更多 →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Icons */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-around md:justify-center md:gap-16">
          {[
            { name: "上衣", emoji: "👚" },
            { name: "裤装", emoji: "👖" },
            { name: "裙装", emoji: "👗" },
            { name: "外套", emoji: "🧥" },
          ].map((cat) => (
            <Link key={cat.name} href={`/products?category=${cat.name}`} className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl group-hover:bg-black transition-colors">
                {cat.emoji}
              </div>
              <span className="text-xs text-gray-600 font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wide">新品上架</h2>
            <div className="w-12 h-1 bg-red-500 mt-1" />
          </div>
          <Link href="/products" className="text-sm text-red-500 font-medium hover:underline">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-64 overflow-hidden my-8">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600"
          alt="Sale Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-red-400 text-sm tracking-widest uppercase font-bold mb-2">限时特惠</p>
            <h3 className="text-4xl font-black mb-4">全场低至 5 折</h3>
            <Link href="/products" className="bg-red-500 text-white px-10 py-3 text-sm font-bold uppercase hover:bg-red-600 transition-colors">
              马上抢购
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wide">热门单品</h2>
            <div className="w-12 h-1 bg-red-500 mt-1" />
          </div>
          <Link href="/products" className="text-sm text-red-500 font-medium hover:underline">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🚚", title: "全场包邮", sub: "满99免运费" },
            { icon: "↩️", title: "30天退换", sub: "无忧购物" },
            { icon: "🔒", title: "安全支付", sub: "PayPal保障" },
            { icon: "💬", title: "在线客服", sub: "7×24小时" },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{f.icon}</span>
              <p className="font-bold text-gray-900 text-sm">{f.title}</p>
              <p className="text-xs text-gray-500">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
