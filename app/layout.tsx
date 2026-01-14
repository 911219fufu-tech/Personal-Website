// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Arvo } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import MainContent from "./main-content";

// 字體設定
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arvo",
});

export const metadata: Metadata = {
  title: "Joyce's Portfolio",
  description: "Cybersecurity | Developer | Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arvo.variable} antialiased font-serif`}
      >
        <div className="relative w-full min-h-screen bg-gray-100">
          {/* Sidebar Component */}
          <Sidebar />

          {/* Navigation Component */}
          <Navigation />

          {/* Main Content */}
          <MainContent>{children}</MainContent>
        </div>
      </body>
    </html>
  );
}


