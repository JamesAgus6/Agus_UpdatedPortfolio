import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Github } from 'lucide-react';
import { Comments } from '../components/Comments';

export function Contact() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 page-transition">
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Comments with Firebase Integration */}
          <div>
            <Comments />
          </div>

          {/* Right Column - Bento Social Network Matrix */}
          <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-primary flex-1"></div>
              <h2
                className="text-2xl sm:text-3xl whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Connect With Me
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              {/* LinkedIn - Full Width Featured */}
              <a
                href="https://www.linkedin.com/in/james-agus-b40707411/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-white" size={32} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl mb-1 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                    >
                      Let's Connect
                    </h3>
                    <p className="text-muted-foreground">on LinkedIn</p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jade.vlmdrd/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center mb-4">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-1 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    Instagram
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                    @jade.vlmdrd
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/jamie.agus.75"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center mb-4">
                  <Facebook className="text-white" size={24} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-1 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    Facebook
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                    Jamie Agus
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/JamesAgus6"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#181717] border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center mb-4">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-1 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    Github
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                    @JamesAgus6
                  </p>
                </div>
              </a>

              {/* Email - Additional Card */}
              <a
                href="mailto:valmadridjamie@gmail.com"
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-solid border-primary/30 flex items-center justify-center mb-4">
                  <Send className="text-primary" size={24} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-1 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    Email
                  </h3>
                  <p className="text-xs text-muted-foreground break-all" style={{ fontFamily: 'var(--font-mono)' }}>
                    valmadridjamie@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
