import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <CheckCircle size={64} className="mx-auto mb-6 text-green-500" />
      <h1 className="text-3xl font-light mb-4">支付成功！</h1>
      <p className="text-gray-500 mb-10">感谢您的购买，我们将尽快为您发货。</p>
      <Link
        href="/products"
        className="inline-block bg-black text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
      >
        继续购物
      </Link>
    </div>
  );
}
