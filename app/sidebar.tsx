'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT ME' },
    { href: '/projects', label: 'PROJECT' },
    { href: '/education', label: 'EDUCATION' },
    { href: '/technical-skills', label: 'TECHNICAL SKILLS' },
    { href: '/resume', label: 'RESUME' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const isHomePage = pathname === '/';

  if (isHomePage) return null;

  const currentIndex = menuItems.findIndex(item => item.href === pathname);
  const previousPage = menuItems[(currentIndex - 1 + menuItems.length) % menuItems.length];
  const nextPage = menuItems[(currentIndex + 1) % menuItems.length];

  const handlePreviousPage = () => {
    router.push(previousPage.href);
  };

  const handleNextPage = () => {
    router.push(nextPage.href);
  };

  return (
    <aside className="fixed left-0 top-0 w-48 h-screen flex flex-col z-30">
      {/* Top Section - Dark Brown */}
      <div className="flex-none flex flex-col items-center py-8" style={{ backgroundColor: '#615E5B' }}>
        {/* Avatar */}
        <div className="mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex items-center justify-center">
            <img src="/avatar.png" alt="Joyce Fu" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom Section - Yellow */}
      <div className="flex-1 flex flex-col items-center py-8 bg-yellow-400">
        {/* Up Arrow */}
        <button
          onClick={handlePreviousPage}
          className="flex justify-center mb-2 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Previous page"
          style={{ color: '#615E5B' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v14" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className="w-full space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 text-center font-bold text-sm transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: isActive ? '#FFFFFF' : '#615E5B',
                  fontFamily: "'Arvo', serif",
                  letterSpacing: '0.05em'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Down Arrow */}
        <button
          onClick={handleNextPage}
          className="flex justify-center mt-2 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Next page"
          style={{ color: '#615E5B' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
