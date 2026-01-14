// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Arvo } from "next/font/google";
import "./globals.css";

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
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-100 dark:bg-zinc-900 text-center py-10 px-4 border-r border-gray-300 dark:border-zinc-700 font-serif">
            <img src="/avatar.png" alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h1 className="text-xl font-bold underline mb-6">Joyce Fu</h1>
            <nav className="space-y-5 text-left text-gray-700 dark:text-gray-300 tracking-wider text-xl font-light leading-relaxed">
        <a href="#projects" className="block hover:text-blue-500">Projects</a>
        <a href="#about" className="block hover:text-blue-500">About Me</a>
        <a href="#skills" className="block hover:text-blue-500">Skills</a>
        <a href="#life" className="block hover:text-blue-500">Life</a>
        <a href="#contact" className="block hover:text-blue-500">Contact</a>
      </nav>

            <p className="text-sm mt-8 text-gray-500 dark:text-gray-400">
              Contact:<br />jf5456@nyu.edu
            </p>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto arial-sans">{children}</main>
          </div>
      </body>
    </html>
  );
}


