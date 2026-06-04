import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Sale badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 font-bold">
          NEW
        </div>
        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs text-center py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium tracking-wider">
          快速查看
        </div>
      </div>
      <div className="mt-2 px-1">
        <p className="text-xs text-gray-400 mb-0.5">{product.category}</p>
        <h3 className="text-sm text-gray-900 font-medium truncate group-hover:text-red-500 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-red-500">¥{product.price}</span>
          <span className="text-xs text-gray-400 line-through">¥{Math.round(product.price * 1.5)}</span>
        </div>
      </div>
    </Link>
  );
}
