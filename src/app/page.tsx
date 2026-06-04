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

      {/* Category Circles */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-light tracking-widest mb-10 uppercase">Shop by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: "裙装", label: "Dresses", img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300" },
            { name: "上衣", label: "Tops", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300" },
            { name: "裤装", label: "Bottoms", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300" },
            { name: "外套", label: "Outerwear", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300" },
            { name: "全部", label: "View All", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300" },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={cat.name === "全部" ? "/products" : `/products?category=${cat.name}`}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-100 relative border-2 border-transparent group-hover:border-gray-400 transition-all duration-300">
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="144px"
                />
              </div>
              <span className="text-sm text-gray-700 font-light tracking-wide group-hover:text-black transition-colors">
                {cat.label}
              </span>
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
      <section className="border-t border-b border-gray-100 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              title: "Free Shipping",
              sub: "满¥99免运费",
              svg: <svg className="w-8 h-8 mx-auto mb-3 stroke-gray-700" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
            },
            {
              title: "Easy Returns",
              sub: "30天无忧退换",
              svg: <svg className="w-8 h-8 mx-auto mb-3 stroke-gray-700" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
            },
            {
              title: "Secure Payment",
              sub: "PayPal安全保障",
              svg: <svg className="w-8 h-8 mx-auto mb-3 stroke-gray-700" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
            },
            {
              title: "Customer Support",
              sub: "7×24小时在线",
              svg: <svg className="w-8 h-8 mx-auto mb-3 stroke-gray-700" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
            },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              {f.svg}
              <p className="font-medium text-gray-900 text-sm tracking-wide">{f.title}</p>
              <p className="text-xs text-gray-400 mt-1">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
