import { Link } from 'react-router';
import { Facebook, Instagram, Send } from 'lucide-react';
import Logo2Img from '../../imports/LOGO2.jpg';

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Navigation Links */}
            <div>
              <h3
                className="text-sm tracking-[0.15em] uppercase mb-6 text-primary"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Navigation
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Me
                </Link>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className="text-sm tracking-[0.15em] uppercase mb-6 text-primary"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                <p className="text-muted-foreground">
                  Phone:{' '}
                  <a href="tel:09096445641" className="hover:text-primary transition-colors">
                    09096445641
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Email:{' '}
                  <a
                    href="mailto:valmadridjamie@gmail.com"
                    className="hover:text-primary transition-colors break-all"
                  >
                    valmadridjamie@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  53 Sebastian Compound
                  <br />
                  Bagbaguin, Valenzuela City
                  <br />
                  Philippines
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-solid border-[rgba(244,124,124,0.3)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-solid border-[rgba(244,124,124,0.3)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-solid border-[rgba(244,124,124,0.3)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-start justify-start md:justify-end">
              <div className="glass rounded-2xl border border-solid border-[rgba(244,124,124,0.3)] p-6 overflow-hidden">
                <img
                  src={Logo2Img}
                  alt="James Agus Logo"
                  className="w-32 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(244,124,124,0.2)] pt-6 text-center">
            <p
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              COPYRIGHT 2025 | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
