import { useState } from 'react';
import { Play, X, Code, Award, Layers, Eye } from 'lucide-react';
import Project1Img from '../../imports/Project1.jpg';
import Project2Img from '../../imports/Project2.jpg';
import Project3Img from '../../imports/Project3.png';
import Project5Img from '../../imports/Project5.jpg';
import Project6Img from '../../imports/Project6.jpg';
import Project7Img from '../../imports/Project7.jpg';
import Project8Img from '../../imports/Project8.jpg';
import Project4Video from '../../imports/Project4.mp4';
import ElectronHubImg from '../../imports/image.png';
import CertificateImg from '../../imports/PSITE-MSW-Student-Congress-Cert-AGUS__JAMES_TAHUM-3.jpg';
import Project10Img from '../../imports/Project10.png';
import Project11Img from '../../imports/Project11.png';

type TabType = 'projects' | 'certificates' | 'techstack';

interface ViewModalData {
  title: string;
  description: string;
  image?: string;
  video?: string;
  type: 'image' | 'video';
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [viewModal, setViewModal] = useState<ViewModalData | null>(null);

  const projects = [
    {
      id: 1,
      image: ElectronHubImg,
      title: 'Electron Hub - Third Year Capstone Project',
      description: 'Front-End Lead developer for a comprehensive IT service platform',
      type: 'image',
      featured: true
    },
    {
      id: 2,
      image: Project1Img,
      title: 'Profile Designing using Adobe Photoshop',
      description: 'Professional portrait design with advanced photo manipulation techniques',
      type: 'image'
    },
    {
      id: 3,
      image: Project2Img,
      title: 'Registration Form using C#',
      description: 'Windows Forms application with database integration',
      type: 'image'
    },
    {
      id: 4,
      image: Project3Img,
      title: '3D Logo Making using Blender',
      description: 'Three-dimensional logo design with realistic lighting and textures',
      type: 'image'
    },
    {
      id: 5,
      video: Project4Video,
      title: 'Character Designing and Animation using Adobe Character Animator',
      description: 'Animated character with rigged movements and expressions',
      type: 'video'
    },
    {
      id: 6,
      image: Project5Img,
      title: 'Using Clipping Mask in a Photo',
      description: 'Advanced Photoshop technique for creative photo compositions',
      type: 'image'
    },
    {
      id: 7,
      image: Project6Img,
      title: 'Kape Mulat Poster',
      description: 'Eye-catching promotional poster design with typography focus',
      type: 'image'
    },
    {
      id: 8,
      image: Project7Img,
      title: 'Making a Product Package Dieline',
      description: 'Professional packaging design with die-cut template',
      type: 'image'
    },
    {
      id: 9,
      image: Project8Img,
      title: 'Product Designing',
      description: 'Conceptual product visualization and branding',
      type: 'image'
    },
    {
      id: 10,
      image: Project10Img,
      title: 'Barangay Mapulang Lupa - Official Website',
      description: 'Full-stack web development for community service organization featuring facility calendars and administrative portal',
      type: 'image'
    },
    {
      id: 11,
      image: Project11Img,
      title: 'Evita Salon - Professional Services Website',
      description: 'Modern booking system and gallery showcase for premium hair and nail salon with responsive design',
      type: 'image'
    },
  ];

  const techStack = [
    { category: 'Frontend Development', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend & Database', items: ['C#', 'Java', 'Firebase', 'SQL'] },
    { category: 'Design Tools', items: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Character Animator', 'Blender'] },
    { category: 'Development Tools', items: ['Git', 'VS Code', 'Visual Studio', 'Vite'] },
    { category: 'Core Competencies', items: ['Responsive Web Design', 'System Testing', 'Technical Documentation', 'UI/UX Design'] },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 page-transition">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Title */}
        <div className="border-b border-[rgba(244,124,124,0.2)] pb-4">
          <h2
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            02 / SELECTED WORKS
          </h2>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Portfolio Showcase
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Explore my journey through projects, certifications, and technical expertise.
            Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="inline-flex glass rounded-2xl border border-solid border-[rgba(244,124,124,0.3)] p-1.5 sm:p-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all ${
                activeTab === 'projects'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code size={16} />
              <span className="text-sm sm:text-base font-medium">Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all ${
                activeTab === 'certificates'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Award size={16} />
              <span className="text-sm sm:text-base font-medium">Certificates</span>
            </button>
            <button
              onClick={() => setActiveTab('techstack')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all ${
                activeTab === 'techstack'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers size={16} />
              <span className="text-sm sm:text-base font-medium">Tech Stack</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-drift-up stagger-container">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-secondary/30">
                    {project.type === 'video' ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-cover"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-background/30 transition-all">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                            <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      WORK_{String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <button
                      onClick={() => setViewModal({
                        title: project.title,
                        description: project.description,
                        image: project.image,
                        video: project.video,
                        type: project.type
                      })}
                      className="flex items-center gap-2 px-4 py-2 glass border border-solid border-[rgba(244,124,124,0.2)] rounded-xl hover:border-primary hover:text-primary transition-all text-sm group/btn"
                    >
                      <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-drift-up">
              <div className="group glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative bg-white/5">
                  <img
                    src={CertificateImg}
                    alt="PSITE-MSW Student Congress Certificate"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    CERTIFICATE_01
                  </p>
                  <h3 className="text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                    PSITE-MSW Student Congress
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Certificate of Participation awarded for active engagement in student technology congress and professional development activities.
                  </p>
                  <button
                    onClick={() => setViewModal({
                      title: 'PSITE-MSW Student Congress',
                      description: 'Certificate of Participation awarded to James Tahum Agus for active engagement in student technology congress and professional development activities. This certificate recognizes dedication to learning and professional growth in the field of information technology.',
                      image: CertificateImg,
                      type: 'image'
                    })}
                    className="flex items-center gap-2 px-4 py-2 glass border border-solid border-[rgba(244,124,124,0.2)] rounded-xl hover:border-primary hover:text-primary transition-all text-sm group/btn"
                  >
                    <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-drift-up">
              {techStack.map((stack, index) => (
                <div
                  key={index}
                  className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <h3
                    className="text-xl sm:text-2xl mb-6"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {stack.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-4 py-2 bg-secondary/50 rounded-full text-sm border border-solid border-[rgba(244,124,124,0.15)] hover:border-primary hover:text-primary transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 backdrop-blur-2xl bg-background/60"
            onClick={() => setViewModal(null)}
          />

          <button
            onClick={() => setViewModal(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-foreground hover:text-primary transition-colors"
          >
            <X size={28} className="sm:w-8 sm:h-8" />
          </button>

          <div className="max-w-6xl w-full relative z-10">
            <div className="glass rounded-2xl sm:rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] overflow-hidden shadow-2xl">
              {/* Image/Video Preview */}
              <div className="bg-white/5 p-8">
                {viewModal.type === 'video' ? (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <video
                      src={viewModal.video}
                      controls
                      autoPlay
                      loop
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <img
                      src={viewModal.image}
                      alt={viewModal.title}
                      className="max-h-[70vh] w-auto object-contain rounded-xl"
                    />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 border-t border-[rgba(244,124,124,0.2)]">
                <h2
                  className="text-2xl sm:text-3xl mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {viewModal.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {viewModal.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
