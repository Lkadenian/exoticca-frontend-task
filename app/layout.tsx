import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const globalFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Travels app",
  description: "Organize your travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}

