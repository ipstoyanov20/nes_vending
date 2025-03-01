import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "НЕС ВЕНДИНГ",
  description: "Вашето удоволствие на едно копче разстояние",
  keywords: "nesvending, nes vending, vendingnes, vending burgas, nesvending bulgaria, nesvendin",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
