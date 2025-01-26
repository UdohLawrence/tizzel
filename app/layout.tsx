import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tizzel Stores",
  description: "Discover everything you need for your home at our online store! From kitchen essentials and cleaning supplies to stylish decor and cozy bedding, find top-quality household goods at unbeatable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
