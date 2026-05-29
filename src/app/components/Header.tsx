import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-[1200px]">
      <div className="glass rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-solid border-[rgba(244,124,124,0.3)] shadow-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm sm:text-base md:text-lg tracking-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            <span className="text-foreground">JAMES AGUS</span>
            <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline"> — CHRONICLES</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-[11px] tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 md:hidden backdrop-blur-md bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 fixed left-4 right-4 rounded-3xl z-50 bg-secondary/95 backdrop-blur-xl border border-solid border-primary/50 shadow-2xl shadow-primary/30">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm tracking-[0.15em] uppercase font-semibold ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                } hover:text-primary transition-colors`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
