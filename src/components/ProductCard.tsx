import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-xl bg-gray-50 aspect-[3/4] relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="mt-3">
        <p className="text-xs text-gray-400 mb-1">{product.category}</p>
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-900">¥{product.price}</p>
      </div>
    </Link>
  );
}
