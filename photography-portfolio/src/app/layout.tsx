import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "A portfolio showcasing photography work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
