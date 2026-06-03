"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "全部";
  const [selected, setSelected] = useState(initialCat);

  useEffect(() => {
    const cat = searchParams.get("category") || "全部";
    setSelected(cat);
  }, [searchParams]);

  const filtered = getProductsByCategory(selected);

  return (
    <>
      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 text-sm rounded-full border transition-colors ${
              selected === cat
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600 hover:border-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">该分类暂无商品</div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-widest mb-8">全部商品</h1>
      <Suspense fallback={<div className="text-gray-400">加载中...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
