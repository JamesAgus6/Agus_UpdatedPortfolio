import { useState } from 'react';
import { MessageCircle, Send, Upload, Linkedin, Instagram, Facebook, Github } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    photo: null as File | null,
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'James',
      role: 'Admin',
      message: 'Thank you for visiting! If you have any questions, feel free to DM me on IG @jade.vlmdrd',
      timestamp: 'Pinned',
      isPinned: true,
      avatar: '👨‍💻'
    },
   
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // Add comment to local feed
    const newComment = {
      id: comments.length + 1,
      name: formData.name,
      message: formData.message,
      timestamp: 'Just now',
      isPinned: false,
      avatar: '👤'
    };
    setComments([...comments.filter(c => c.isPinned), newComment, ...comments.filter(c => !c.isPinned)]);


    // Reset form
    setFormData({ name: '', message: '', photo: null });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        photo: e.target.files[0]
      });
    }
  };

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
          {/* Left Column - Guestbook/Comments */}
          <div className="glass rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <MessageCircle className="text-primary" size={24} />
              <h2
                className="text-2xl sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Comments ({comments.length})
              </h2>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass border border-solid border-[rgba(244,124,124,0.2)] rounded-2xl px-4 py-3 text-sm outline-none focus:border-primary transition-all"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full glass border border-solid border-[rgba(244,124,124,0.2)] rounded-2xl px-4 py-3 text-sm outline-none focus:border-primary transition-all resize-none"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  placeholder="Write your message here..."
                />
              </div>

              <div>
                <label
                  className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Profile Photo (Optional)
                </label>
                <label className="flex items-center justify-center gap-3 glass border-2 border-dashed border-[rgba(244,124,124,0.3)] rounded-2xl px-4 py-6 cursor-pointer hover:border-primary transition-all group">
                  <Upload className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  <div className="text-center">
                    <p className="text-sm text-foreground mb-1">
                      {formData.photo ? formData.photo.name : 'Choose Profile Photo'}
                    </p>
                    <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span className="tracking-[0.1em] uppercase text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  Post Comment
                </span>
              </button>
            </form>

            {/* Comments Feed */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`glass border border-solid rounded-2xl p-4 ${
                    comment.isPinned
                      ? 'border-primary/50 bg-primary/5'
                      : 'border-[rgba(244,124,124,0.2)]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 border border-solid border-[rgba(244,124,124,0.2)] flex items-center justify-center text-xl flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                          {comment.name}
                        </p>
                        {comment.role && (
                          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                            {comment.role}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground ml-auto" style={{ fontFamily: 'var(--font-mono)' }}>
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {comment.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
