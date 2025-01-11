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
    <>/</>
  );
}
