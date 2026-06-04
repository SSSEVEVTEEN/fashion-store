import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CraftThreadGYC | 时尚服装",
  description: "CraftThreadGYC - 时尚从这里开始，品质生活",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-black text-xl tracking-widest mb-4 uppercase">CraftThreadGYC</h3>
                <p className="text-gray-400 text-sm leading-relaxed">时尚从这里开始，品质生活的最佳选择。</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">购物指南</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/products" className="hover:text-white">全部商品</a></li>
                  <li><a href="/products?category=新品" className="hover:text-white">新品上架</a></li>
                  <li><a href="/cart" className="hover:text-white">购物车</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">客户服务</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>退换货政策</li>
                  <li>配送说明</li>
                  <li>联系我们</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">关注我们</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>微博</li>
                  <li>微信</li>
                  <li>小红书</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
              © 2025 CraftThreadGYC. 保留所有权利.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
