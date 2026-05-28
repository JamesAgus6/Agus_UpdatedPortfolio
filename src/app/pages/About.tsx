import { Link } from 'react-router';
import AboutVideo1 from '../../imports/aboutmeVideo1.mp4';
import AboutVideo2 from '../../imports/aboutmeVideo2.mp4';
import AboutVideo3 from '../../imports/aboutmeVideo03.mp4';

export function About() {
  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['HTML', 'CSS', 'Java', 'C#']
    },
    {
      title: 'Design & Prototyping',
      skills: ['Figma', 'Canva']
    },
    {
      title: 'Technical Skills',
      skills: ['System Testing', 'Technical Documentation', 'Responsive Web Design']
    },
    {
      title: 'Productivity Tools',
      skills: ['Microsoft Word', 'Microsoft Excel']
    }
  ];

  const softSkills = [
    'Communication', 'Teamwork and Collaboration', 'Problem-Solving', 'Adaptability',
    'Time Management', 'Attention to Detail', 'Critical Thinking', 'Organizational Skills',
    'Willingness to Learn', 'Responsibility'
  ];

  const education = [
    {
      year: '2023 - Present',
      title: 'Bachelor of Science in Information Technology',
      institution: 'Pamantasan ng Lungsod ng Valenzuela',
      description: 'Focused on frontend development and creative technical design'
    },
    {
      year: '2021 - 2022',
      title: 'Senior High School - HUMSS',
      subtitle: 'Humanities and Social Sciences',
      institution: 'Lady of Lourdes Hospital and Colleges of Caybiga',
      description: 'Developed foundation in critical thinking and communication'
    }
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 page-transition">
      <div className="max-w-[1200px] mx-auto space-y-12 sm:space-y-16 lg:space-y-24">
        {/* Section Title */}
        <div className="border-b border-[rgba(244,124,124,0.2)] pb-4">
          <h2
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            01 / THE CHRONICLE
          </h2>
        </div>

        {/* Zone 1: About Me */}
        <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 lg:p-12 kinetic-reveal">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Meet Jamie
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Video Card 1 */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] rounded-2xl overflow-hidden glass border border-solid border-[rgba(244,124,124,0.2)] group">
              <video
                src={AboutVideo3}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  Hello! I'm Jamie &lt;3
                </h3>
                <p className="text-sm text-muted-foreground">
                  A 20-year-old tech enthusiast studying IT at PLV
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] rounded-2xl overflow-hidden glass border border-solid border-[rgba(244,124,124,0.2)] group">
              <video
                src={AboutVideo2}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  Volleyball Enthusiast
                </h3>
                <p className="text-sm text-muted-foreground">
                  Staying active and unwinding through sports
                </p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] rounded-2xl overflow-hidden glass border border-solid border-[rgba(244,124,124,0.2)] group">
              <video
                src={AboutVideo1}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  Anime & K-Drama Fan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escaping reality through trending shows
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Zone 2: Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 kinetic-reveal">
          {/* Total Projects */}
          <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 group hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/50 border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  9
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                TOTAL PROJECTS
              </p>
              <p className="text-xs text-muted-foreground">
                Innovative web solutions crafted
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Certificates */}
          <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 group hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/50 border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  1
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                CERTIFICATES
              </p>
              <p className="text-xs text-muted-foreground">
                Professional skills validated
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 group hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/50 border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  2
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                YEARS OF EXPERIENCE
              </p>
              <p className="text-xs text-muted-foreground">
                Continuous learning journey
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>

        {/* Zone 2: Skills */}
        <div id="skills" className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 lg:p-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Skills
          </h2>

          {/* Technical Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {skillCategories.map((category) => (
              <div key={category.title} className="glass rounded-2xl border border-solid border-[rgba(244,124,124,0.2)] p-6">
                <h3
                  className="text-sm tracking-[0.15em] uppercase text-primary mb-4"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm border border-solid border-[rgba(244,124,124,0.15)] hover:border-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3
              className="text-sm tracking-[0.15em] uppercase text-primary mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass rounded-full text-sm border border-solid border-[rgba(244,124,124,0.2)] hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Zone 3: Background */}
        <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 lg:p-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Educational Background
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <p
                  className="text-xs tracking-[0.15em] uppercase text-primary mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {edu.year}
                </p>
                <h3
                  className="text-2xl mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {edu.title}
                </h3>
                {edu.subtitle && (
                  <p className="text-sm text-muted-foreground italic mb-2">{edu.subtitle}</p>
                )}
                <p className="text-foreground mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zone 4: Goals */}
        <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8 lg:p-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Future Aspirations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3
                className="text-2xl mb-4 text-primary"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Design Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create highly immersive web architectures that push the boundaries of digital experiences.
                I aspire to craft interfaces that don't just function—they captivate, inspire, and tell compelling stories.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-4 text-primary"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Technical Goals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To build software systems that seamlessly fuse engineering excellence with beautiful aesthetics.
                Every line of code should contribute to an experience that feels both powerful and elegant.
              </p>
            </div>
          </div>
        </div>

        {/* Zone 5: CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-solid border-[rgba(244,124,124,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
          <div className="glass-heavy relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Let's Shape the Digital Canvas Together
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something extraordinary.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all rounded-2xl shadow-xl shadow-primary/30 text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
