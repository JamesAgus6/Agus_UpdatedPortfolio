import { useState } from 'react';
import { useStagger } from '../../hooks/useStagger';

interface TechItem {
  id: string;
  name: string;
  icon: string;
  glowColor: string;
  borderGlowColor: string;
}

const techStack: TechItem[] = [
  {
    id: 'html',
    name: 'HTML',
    icon: '📄',
    glowColor: 'rgba(230, 126, 34, 0.4)',
    borderGlowColor: 'rgba(230, 126, 34, 0.6)',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '🎨',
    glowColor: 'rgba(52, 152, 219, 0.4)',
    borderGlowColor: 'rgba(52, 152, 219, 0.6)',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    glowColor: 'rgba(241, 196, 15, 0.4)',
    borderGlowColor: 'rgba(241, 196, 15, 0.6)',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '💎',
    glowColor: 'rgba(20, 184, 166, 0.4)',
    borderGlowColor: 'rgba(20, 184, 166, 0.6)',
  },
  {
    id: 'react',
    name: 'ReactJS',
    icon: '⚛️',
    glowColor: 'rgba(0, 216, 255, 0.4)',
    borderGlowColor: 'rgba(0, 216, 255, 0.6)',
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: '⚙️',
    glowColor: 'rgba(147, 112, 219, 0.4)',
    borderGlowColor: 'rgba(147, 112, 219, 0.6)',
  },
  {
    id: 'nodejs',
    name: 'Node JS',
    icon: '🟩',
    glowColor: 'rgba(39, 174, 96, 0.4)',
    borderGlowColor: 'rgba(39, 174, 96, 0.6)',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: '📦',
    glowColor: 'rgba(108, 92, 231, 0.4)',
    borderGlowColor: 'rgba(108, 92, 231, 0.6)',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: '🔥',
    glowColor: 'rgba(255, 167, 38, 0.4)',
    borderGlowColor: 'rgba(255, 167, 38, 0.6)',
  },
  {
    id: 'materialui',
    name: 'Material UI',
    icon: '🧩',
    glowColor: 'rgba(33, 150, 243, 0.4)',
    borderGlowColor: 'rgba(33, 150, 243, 0.6)',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: '▲',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    borderGlowColor: 'rgba(255, 255, 255, 0.5)',
  },
  {
    id: 'sweetalert',
    name: 'SweetAlert2',
    icon: '🍩',
    glowColor: 'rgba(255, 105, 180, 0.4)',
    borderGlowColor: 'rgba(255, 105, 180, 0.6)',
  },
];

export function TechStackGrid() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { elementRef, getAnimationClass, isVisible } = useStagger({
    count: techStack.length,
    threshold: 0.1,
    staggerDelay: 0.04, // 40ms per card
  });

  return (
    <div
      ref={elementRef}
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
    >
      {techStack.map((tech, index) => (
        <div
          key={tech.id}
          className={`tech-card ${getAnimationClass(index)} transition-all duration-300`}
          onMouseEnter={() => setHoveredTech(tech.id)}
          onMouseLeave={() => setHoveredTech(null)}
          style={{
            opacity: hoveredTech === null ? 1 : hoveredTech === tech.id ? 1 : 0.5,
            transform:
              hoveredTech === tech.id
                ? 'scale(1.05) translateY(-5px)'
                : 'scale(1) translateY(0)',
            boxShadow:
              hoveredTech === tech.id
                ? `0 0 30px ${tech.glowColor}, inset 0 0 20px ${tech.glowColor}`
                : 'none',
            borderColor:
              hoveredTech === tech.id
                ? tech.borderGlowColor
                : 'rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Tech Icon */}
          <div className="flex items-center justify-center mb-3 md:mb-4 h-12 md:h-16">
            <span className="text-3xl md:text-4xl lg:text-5xl">{tech.icon}</span>
          </div>

          {/* Tech Name */}
          <p
            className="text-xs md:text-sm font-medium text-center text-off-white line-clamp-2"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
}
