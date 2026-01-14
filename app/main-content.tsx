'use client';

import { usePathname } from 'next/navigation';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className={`w-full min-h-screen overflow-y-auto ${!isHomePage ? 'ml-48 pr-20' : ''}`}>
      {children}
    </main>
  );
}
