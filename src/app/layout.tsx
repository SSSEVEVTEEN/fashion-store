import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUXE 时装",
  description: "精选时尚服装，品质生活从这里开始",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <footer className="mt-20 border-t border-gray-100 py-12 text-center text-sm text-gray-400">
            <p>© 2025 LUXE 时装. 保留所有权利.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
