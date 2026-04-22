import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Estrada — Product Designer",
  description:
    "Portafolio de Bryan Estrada, Product Designer especializado en UX/UI, Design Systems y experiencias digitales.",
  openGraph: {
    title: "Bryan Estrada — Product Designer",
    description:
      "Product Designer especializado en UX/UI, Design Systems y experiencias digitales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1f1f1f] py-6 px-6 text-center text-sm text-[#404040]">
          © {new Date().getFullYear()} Bryan Estrada
        </footer>
      </body>
    </html>
  );
}
