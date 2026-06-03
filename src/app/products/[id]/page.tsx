"use client";
import { useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { ShoppingBag, Check } from "lucide-react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-400 mb-2">{product.category}</p>
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>
          <p className="text-2xl font-medium mb-6">¥{product.price}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {/* Size */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-3">尺码: {selectedSize}</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3">颜色: {selectedColor}</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                    selectedColor === color
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-600"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center justify-center gap-2 w-full py-4 text-sm tracking-widest uppercase transition-all ${
              added
                ? "bg-green-600 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {added ? <><Check size={16} /> 已加入购物车</> : <><ShoppingBag size={16} /> 加入购物车</>}
          </button>
        </div>
      </div>
    </div>
  );
}
