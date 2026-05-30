import { useState } from 'react';
import { TechStackGrid } from '../components/TechStackGrid';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type PortfolioTab = 'projects' | 'certificates' | 'tech';

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('projects');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const tabs: { id: PortfolioTab; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'tech', label: 'Tech Stack' },
  ];

  return (
    <section id="portfolio" className="scroll-section min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div ref={elementRef} className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Title */}
        <div className="border-b border-[rgba(244,124,124,0.2)] pb-4">
          <h2
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            02 / PORTFOLIO
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-4 md:gap-8 relative">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-base md:text-lg tracking-wider uppercase transition-colors ${
                activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'
              } hover:text-primary`}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              [{tab.label}]
            </button>
          ))}

          {/* Active Tab Indicator Slider */}
          <div
            className="absolute bottom-0 h-[2px] bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 ease-out"
            style={{
              width: '60px',
              left: `${activeTab === 'projects' ? '0' : activeTab === 'certificates' ? 'calc(100px + 1rem)' : 'calc(260px + 2rem)'}`,
            }}
          />
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="card-enter space-y-6">
              <p className="text-muted-foreground">Projects showcase coming soon...</p>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="card-enter space-y-6">
              <p className="text-muted-foreground">Certificates showcase coming soon...</p>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <div className="card-enter">
              <TechStackGrid />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
