'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/about', label: 'About', icon: 'about' },
    { href: '/projects', label: 'Projects', icon: 'projects' },
    { href: '/education', label: 'Education', icon: 'education' },
    { href: '/technical-skills', label: 'Technical Skills', icon: 'skills' },
    { href: '/resume', label: 'Resume', icon: 'resume' },
    { href: '/contact', label: 'Contact', icon: 'contact' },
  ];

  const getIconColor = (href: string) => {
    return pathname === href ? '#FFFFFF' : '#FFC107';
  };

  const renderIcon = (icon: string, isActive: boolean) => {
    const color = isActive ? '#FFFFFF' : '#FFC107';
    
    switch (icon) {
      case 'home':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        );
      case 'about':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        );
      case 'projects':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        );
      case 'education':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        );
      case 'skills':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'resume':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V8h8v2z"/>
          </svg>
        );
      case 'contact':
        return (
          <svg className="w-6 h-6" fill={color} viewBox="0 0 24 24">
            <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.9702544,11.6889879 22.9702544,11.6889879 22.9702544,11.6889879 L4.13399899,1.16151246 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.97701575 L3.03521743,10.4180088 C3.03521743,10.5751061 3.34915502,10.7322035 3.50612381,10.7322035 L16.6915026,11.5176905 C16.6915026,11.5176905 17.1624089,11.5176905 17.1624089,11.0464984 L17.1624089,12.4744748 C17.1624089,12.4744748 17.1624089,12.4744748 16.6915026,12.4744748 Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-8">
      {/* Curved line SVG - following avatar arc */}
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
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <a 
            key={item.href}
            href={item.href} 
            className={`nav-dot-icon ${isActive ? 'bg-gray-800' : 'bg-gray-800 hover:bg-yellow-500'}`}
            style={{
              backgroundColor: isActive ? '#2c2c2c' : '#2c2c2c',
              boxShadow: isActive ? '0 0 12px rgba(255, 193, 7, 0.6)' : 'none'
            }}
            title={item.label} 
            aria-label={item.label}
          >
            {renderIcon(item.icon, isActive)}
          </a>
        );
      })}
    </aside>
  );
}
