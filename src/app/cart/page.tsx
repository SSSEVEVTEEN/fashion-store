"use client";
import { useCartStore } from "@/lib/cart-store";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import PayPalCheckout from "@/components/PayPalCheckout";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count } = useCartStore();
  const totalCount = count();
  const totalPrice = total();

  if (totalCount === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-light mb-6">购物车</h1>
        <p className="text-gray-400 mb-8">购物车是空的</p>
        <Link href="/products" className="inline-block bg-black text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
          去购物
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light mb-10">购物车 ({totalCount})</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 pb-6 border-b border-gray-100">
              <div className="relative w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.size} · {item.color}</p>
                <p className="text-sm font-medium mt-1">¥{item.product.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                    className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-600"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                    className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-600"
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    onClick={() => removeItem(item.product.id, item.size, item.color)}
                    className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary + PayPal */}
        <div className="bg-gray-50 rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-medium mb-6">订单摘要</h2>
          <div className="space-y-3 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-gray-500">小计</span>
              <span>¥{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">运费</span>
              <span className="text-green-600">免运费</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-medium text-base">
              <span>合计</span>
              <span>¥{totalPrice}</span>
            </div>
          </div>

          <PayPalCheckout amount={(totalPrice / 7.2).toFixed(2)} />

          <p className="text-xs text-gray-400 text-center mt-4">
            金额已按汇率转换为美元 (≈ ${(totalPrice / 7.2).toFixed(2)} USD)
          </p>
        </div>
      </div>
    </div>
  );
}
