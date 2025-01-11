import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Roti Permata",
  description: "Temukan berbagai pilihan roti dan oleh-oleh di toko kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="light">
      <body className="bg-gray-100">
        {/* AREA HEADER */}
        <header className="bg-[#bed4d2] text-[#8d241d] py-4 px-6 shadow-md">
            <h1 className="text-2xl font-bold font-sans">Toko Roti Permata</h1>
        </header>
        {/* AREA HEADER */}
      </body>
    </html>
  );
}
