import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Play, X, Download, Mail, Facebook, Instagram, Send, MapPin, Phone, ChevronRight } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import ProfileImg from '../../imports/Profile.jpg';
import DemoReelVideo from '../../imports/DemoReels.mp4';
import ResumePDF from '../../imports/JamesAgus_Resume.pdf';
import AboutVideo3 from '../../imports/aboutmeVideo03.mp4';
import Project1Img from '../../imports/Project1.jpg';
import Project2Img from '../../imports/Project2.jpg';
import Project3Img from '../../imports/Project3.png';

export function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const roles = ['Graphic Designer', 'Aspiring Web Developer', '3D Artist', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-transition">
      <ParticleBackground />

      {/* SECTION 1: HERO VIEW */}
      <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full pl-0 lg:pl-12 xl:pl-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 md:space-y-8 max-w-xl order-2 lg:order-1 lg:pl-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-solid border-[rgba(244,124,124,0.3)]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                  READY TO INNOVATE
                </span>
              </div>

              <div>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 md:mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
                >
                  Hello, I'm James Agus
                </h1>

                <div className="h-12 md:h-14 lg:h-16 flex items-center overflow-hidden">
                  <p
                    key={currentRoleIndex}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary animate-drift-up"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    {roles[currentRoleIndex]}
                  </p>
                </div>

                <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
                  Creative Systems & Design
                </p>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                Hello, I'm James Agus, an aspiring creative professional with a passion for blending technology and art.
                I specialize in creating visually compelling designs that tell stories and solve problems.
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2">
                {['HTML', 'Javascript', 'CSS', 'Firebase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-full text-xs border border-solid border-[rgba(244,124,124,0.2)] hover:border-primary transition-all"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href="https://www.linkedin.com/in/james-agus-b40707411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all rounded-2xl shadow-lg shadow-primary/30 text-sm sm:text-base text-center"
                  >
                    Hire Now
                  </a>

                  <Link
                    to="/contact"
                    className="px-6 sm:px-8 py-3 sm:py-4 glass border border-solid border-[rgba(244,124,124,0.3)] text-foreground hover:border-primary hover:text-primary transition-all rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Mail size={16} />
                    Contact
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href={ResumePDF}
                    download="JamesAgus_Resume.pdf"
                    className="px-6 sm:px-8 py-3 sm:py-4 glass border border-solid border-[rgba(244,124,124,0.3)] text-foreground hover:border-primary hover:text-primary transition-all rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Download size={16} />
                    Download CV
                  </a>

                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 glass border border-solid border-[rgba(244,124,124,0.3)] text-foreground hover:border-primary hover:text-primary transition-all rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Play size={16} fill="currentColor" />
                    Watch my Demo Reel
                  </button>
                </div>
              </div>

              {/* Social Dock */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://www.facebook.com/jamie.agus.75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl border border-solid border-[rgba(244,124,124,0.3)] hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/jade.vlmdrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl border border-solid border-[rgba(244,124,124,0.3)] hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl border border-solid border-[rgba(244,124,124,0.3)] hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                >
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-md aspect-[3/4] glass rounded-3xl overflow-hidden shadow-2xl border border-solid border-[rgba(244,124,124,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
                <img
                  src={ProfileImg}
                  alt="James Agus Profile"
                  className="w-full h-full object-cover"
                />
                {/* Crosshair accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SUMMARY */}
      <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="border-b border-[rgba(244,124,124,0.2)] pb-4 mb-12">
            <h2
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              01 / THE CHRONICLE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Video */}
            <div className="space-y-6">
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden glass border border-solid border-[rgba(244,124,124,0.3)]">
                <video
                  src={AboutVideo3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                    Meet Jamie
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A 20-year-old tech enthusiast studying IT at PLV
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl border border-solid border-[rgba(244,124,124,0.3)] p-6">
                <h3
                  className="text-sm tracking-[0.15em] uppercase text-primary mb-4"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Education Timeline
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                      2023 - PRESENT
                    </p>
                    <p className="text-base font-medium">BS Information Technology</p>
                    <p className="text-sm text-muted-foreground">Pamantasan ng Lungsod ng Valenzuela</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                      2021 - 2022
                    </p>
                    <p className="text-base font-medium">Senior High School - HUMSS</p>
                    <p className="text-sm text-muted-foreground">Lady of Lourdes Hospital and Colleges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-8">
              <h2
                className="text-3xl sm:text-4xl mb-8"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Technical Expertise
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xs tracking-[0.15em] uppercase text-primary mb-3"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Programming & Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'Java', 'C#'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm border border-solid border-[rgba(244,124,124,0.15)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xs tracking-[0.15em] uppercase text-primary mb-3"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Design & Prototyping
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Canva'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm border border-solid border-[rgba(244,124,124,0.15)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xs tracking-[0.15em] uppercase text-primary mb-3"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['System Testing', 'Technical Documentation', 'Responsive Web Design'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm border border-solid border-[rgba(244,124,124,0.15)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xs tracking-[0.15em] uppercase text-primary mb-3"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Communication', 'Teamwork', 'Problem-Solving', 'Adaptability', 'Time Management', 'Critical Thinking'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 glass rounded-full text-xs border border-solid border-[rgba(244,124,124,0.2)] hover:border-primary transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
              >
                <span className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>View Full Profile</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS SHOWCASE */}
      <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="border-b border-[rgba(244,124,124,0.2)] pb-4 mb-12">
            <h2
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              02 / SELECTED WORKS
            </h2>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-12"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 stagger-container">
            {[
              { img: Project1Img, title: 'Profile Designing using Adobe Photoshop' },
              { img: Project2Img, title: 'Registration Form using C#' },
              { img: Project3Img, title: '3D Logo Making using Blender' }
            ].map((project, index) => (
              <div
                key={index}
                className="group glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    WORK_{String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-sm leading-relaxed group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 glass border border-solid border-[rgba(244,124,124,0.3)] hover:border-primary hover:text-primary transition-all rounded-2xl group"
          >
            <span className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>Examine All Artifacts</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: CONTACT HUB */}
      <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="border-b border-[rgba(244,124,124,0.2)] pb-4 mb-12">
            <h2
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              03 / DISPATCHES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Map & Info */}
            <div className="space-y-6">
              <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-8">
                <h2
                  className="text-3xl sm:text-4xl mb-8"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  Let's Connect
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary mt-1" size={20} />
                    <div>
                      <p
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Telephone
                      </p>
                      <a
                        href="tel:09096445641"
                        className="text-base hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        09096445641
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1" size={20} />
                    <div>
                      <p
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:valmadridjamie@gmail.com"
                        className="text-sm hover:text-primary transition-colors break-all"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        valmadridjamie@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <p
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Location
                      </p>
                      <p className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                        Bagbaguin, Valenzuela City<br />
                        Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6">
                <div className="aspect-video rounded-2xl overflow-hidden border border-solid border-[rgba(244,124,124,0.2)]">
                  <iframe
                    src="https://www.google.com/maps?q=PX7X%2B89P,+G.+Molina,+Valenzuela,+Metro+Manila&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="flex items-center">
              <div className="relative overflow-hidden rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="glass-heavy relative z-10 p-8 lg:p-12 text-center">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
                  >
                    Ready to Collaborate?
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg mx-auto">
                    Let's create something extraordinary together. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all rounded-2xl shadow-xl shadow-primary/30 text-sm sm:text-base"
                  >
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 backdrop-blur-2xl bg-background/60"
            onClick={() => setShowVideoModal(false)}
          />

          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-foreground hover:text-primary transition-colors"
          >
            <X size={28} className="sm:w-8 sm:h-8" />
          </button>

          <div className="max-w-5xl w-full relative z-10">
            <div className="aspect-video glass rounded-2xl sm:rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] overflow-hidden shadow-2xl">
              <video
                src={DemoReelVideo}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
