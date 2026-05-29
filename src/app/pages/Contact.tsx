import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Github } from 'lucide-react';
import { CommentForm, CommentsFeed } from '../components/Comments';

export function Contact() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 page-transition">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Title */}
        <div className="border-b border-[rgba(244,124,124,0.2)] pb-4">
          <h2
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            03 / DISPATCHES
          </h2>
        </div>

        {/* ===== SECTION 1: UPPER GRID ===== */}
        {/* Compact Engagement + Social Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT COLUMN: Compact Comment Portal */}
          <div className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 sm:p-8">
            <h3
              className="text-lg sm:text-xl mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              <span className="text-primary">💬</span>
              Leave a Message
            </h3>
            <CommentForm />
          </div>

          {/* RIGHT COLUMN: Connect with Me Bento Grid */}
          <div className="space-y-4 sm:space-y-6">
            {/* LinkedIn Featured - Full Width */}
            <a
              href="https://www.linkedin.com/in/james-agus-b40707411/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 group flex items-center gap-4 sm:gap-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-white" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-lg sm:text-2xl mb-1 group-hover:text-primary transition-colors truncate"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  Let's Connect
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">on LinkedIn</p>
              </div>
            </a>

            {/* Social Cards Grid - Instagram, Facebook, GitHub */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/jade.vlmdrd/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-2xl p-4 sm:p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center justify-center text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Instagram className="text-white" size={20} />
                </div>
                <h3
                  className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Instagram
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  @jade.vlmdrd
                </p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/jamie.agus.75"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-2xl p-4 sm:p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center justify-center text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Facebook className="text-white" size={20} />
                </div>
                <h3
                  className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Facebook
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  Jamie Agus
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/JamesAgus6"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-2xl p-4 sm:p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center justify-center text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#181717] border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Github className="text-white" size={20} />
                </div>
                <h3
                  className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  GitHub
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  @JamesAgus6
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* ===== SECTION 2: LOWER GRID ===== */}
        {/* Scrollable Live Comment Feed */}
        <div className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 sm:p-8">
          <h3
            className="text-lg sm:text-xl mb-6 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            <span className="text-primary">📋</span>
            Recent Comments
          </h3>
          <CommentsFeed />
        </div>
      </div>
    </div>
  );
}
