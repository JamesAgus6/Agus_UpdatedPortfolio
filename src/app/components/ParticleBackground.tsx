export function ParticleBackground() {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: Math.random() > 0.5
              ? 'radial-gradient(circle, #F47C7C 0%, rgba(244, 124, 124, 0) 70%)'
              : 'radial-gradient(circle, #FC9F5B 0%, rgba(252, 159, 91, 0) 70%)',
            boxShadow: `0 0 ${particle.size * 3}px ${Math.random() > 0.5 ? 'rgba(244, 124, 124, 0.3)' : 'rgba(252, 159, 91, 0.3)'}`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
