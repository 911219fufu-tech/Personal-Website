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
        <div className="relative w-full min-h-screen bg-gray-100">
          {/* Right Side Navigation Dots with Curved Line */}
          <aside className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-8">
            {/* Curved line SVG - Arc curve like avatar border */}
            <svg 
              className="absolute w-20 h-full pointer-events-none" 
              style={{ left: '-40px', top: '-50%', height: '200%' }}
              viewBox="0 0 60 500"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFC107" />
                  <stop offset="100%" stopColor="#FFC107" />
                </linearGradient>
              </defs>
              <path
                d="M 95 50 Q 50 250 95 450"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Top dot */}
              <circle cx="95" cy="50" r="5" fill="#FFC107" />
              {/* Bottom dot */}
              <circle cx="95" cy="450" r="5" fill="#FFC107" />
            </svg>

            {/* Navigation dots */}
            <a href="/" className="nav-dot-icon" title="Home" aria-label="Home">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </a>
            <a href="/about" className="nav-dot-icon" title="About" aria-label="About">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </a>
            <a href="/projects" className="nav-dot-icon" title="Projects" aria-label="Projects">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </a>
            <a href="/experience" className="nav-dot-icon" title="Experience" aria-label="Experience">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.645.18-1a2.996 2.996 0 0 0-5.362-1.646l-.638.356-.638-.356C11.112 2.3 9.846 1.5 8.5 1.5c-1.657 0-3 1.343-3 3 0 .355.07.69.18 1H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM8.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </a>
            <a href="/resume" className="nav-dot-icon" title="Resume" aria-label="Resume">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V8h8v2z"/>
              </svg>
            </a>
            <a href="/contact" className="nav-dot-icon" title="Contact" aria-label="Contact">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0 .55-.45 1-1 1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </a>
          </aside>

          {/* Main Content */}
          <main className="w-full min-h-screen overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}


