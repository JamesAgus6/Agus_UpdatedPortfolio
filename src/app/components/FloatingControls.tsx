import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ThemeDockProps {
  onThemeChange: (theme: 'dark' | 'light') => void;
  currentTheme: 'dark' | 'light';
}

function ThemeDock({ onThemeChange, currentTheme }: ThemeDockProps) {
  return (
    <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-40">
      <div className="glass rounded-full p-1 border border-solid border-[rgba(244,124,124,0.3)] shadow-lg flex gap-1">
        <button
          onClick={() => onThemeChange('dark')}
          className={`relative px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
            currentTheme === 'dark'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'text-foreground hover:bg-secondary'
          }`}
        >
          <Moon size={14} className="sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={() => onThemeChange('light')}
          className={`relative px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
            currentTheme === 'light'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'text-foreground hover:bg-secondary'
          }`}
        >
          <Sun size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}

export function FloatingControls() {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      text: `Hi! I'm James Agus's portfolio assistant. I can help you learn about:

• Skills & Technical Expertise
• Projects & Work Samples
• Educational Background
• Contact Information
• Future Goals & Aspirations

Ask me anything, or use the quick action buttons below!`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const quickChips = ['View Skills', 'Latest Projects', 'Contact James'];

  const handleQuickAction = (action: string) => {
    if (action === 'View Skills') {
      setChatMessages(prev => [
        ...prev,
        { role: 'user', text: action },
        {
          role: 'assistant',
          text: getAIResponse('skills') + "\n\nNavigating you to the Skills section..."
        }
      ]);
      setTimeout(() => {
        setAiChatOpen(false);
        navigate('/about');
        setTimeout(() => {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }, 1000);
    } else if (action === 'Latest Projects') {
      setChatMessages(prev => [
        ...prev,
        { role: 'user', text: action },
        {
          role: 'assistant',
          text: getAIResponse('projects') + "\n\nTaking you to my Projects page..."
        }
      ]);
      setTimeout(() => {
        setAiChatOpen(false);
        navigate('/projects');
      }, 1500);
    } else if (action === 'Contact James') {
      setChatMessages(prev => [
        ...prev,
        { role: 'user', text: action },
        {
          role: 'assistant',
          text: getAIResponse('contact')
        }
      ]);
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Skills related
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack') || msg.includes('know')) {
      return `I have expertise in several areas:

**Programming & Development**: HTML, CSS, Java, C#
**Design & Prototyping**: Figma, Canva
**Technical Skills**: System Testing, Technical Documentation, Responsive Web Design
**Productivity**: Microsoft Word, Excel

Plus soft skills like Communication, Problem-Solving, Teamwork, and Critical Thinking!`;
    }

    // Projects related
    if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio') || msg.includes('capstone')) {
      return `I've worked on diverse projects including:

**Featured Project:**
🎓 **Electron Hub** - My third-year capstone project where I served as the Front-End Lead

**Other Projects:**
- Profile designs using Adobe Photoshop
- Registration forms in C#
- 3D logo creation with Blender
- Character animation using Adobe Character Animator
- Photo editing with clipping masks
- Poster designs like "Kape Mulat"
- Product packaging and design work

Check out my Projects page to see them all!`;
    }

    // Education related
    if (msg.includes('education') || msg.includes('school') || msg.includes('study') || msg.includes('university')) {
      return `I'm currently pursuing a Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Valenzuela, focusing on frontend development and creative technical design.

I completed my Senior High School in HUMSS (Humanities and Social Sciences) at Lady of Lourdes Hospital and Colleges of Caybiga in 2021-2022.`;
    }

    // About/personal
    if (msg.includes('about') || msg.includes('who are you') || msg.includes('tell me') || msg.includes('hobby') || msg.includes('interests')) {
      return `I'm Jamie (James Agus), a 20-year-old tech enthusiast and aspiring creative professional!

When I'm not coding or designing, I love playing volleyball to stay active, and I'm a huge fan of anime and K-dramas for some downtime entertainment.

I'm passionate about blending technology and art to create visually compelling designs that tell stories and solve problems.`;
    }

    // Contact related
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone')) {
      return `You can reach me at:

📞 Phone: 09096445641
📧 Email: valmadridjamie@gmail.com
📍 Address: 53 Sebastian Compound, Bagbaguin, Valenzuela City, Philippines

Feel free to get in touch anytime!`;
    }

    // Goals/future
    if (msg.includes('goal') || msg.includes('future') || msg.includes('aspiration') || msg.includes('plan')) {
      return `My goal is to create highly immersive web architectures and interactive UI mockups that seamlessly fuse engineering excellence with beautiful aesthetics.

I aspire to build software systems where every line of code contributes to an experience that feels both powerful and elegant!`;
    }

    // Experience/background
    if (msg.includes('experience') || msg.includes('background')) {
      return `I'm currently studying IT at Pamantasan ng Lungsod ng Valenzuela with a focus on frontend development and creative design.

My expertise spans from programming (HTML, CSS, Java, C#) to design tools (Figma, Canva, Adobe Suite) and 3D work with Blender. I've worked on everything from web forms to character animations!`;
    }

    // Hire/availability
    if (msg.includes('hire') || msg.includes('available') || msg.includes('work with') || msg.includes('collaborate')) {
      return `I'm always open to exciting opportunities and collaborations!

Whether it's web development, UI/UX design, 3D modeling, or creative projects, I'd love to discuss how we can work together.

📧 Email: valmadridjamie@gmail.com
📞 Phone: 09096445641
💼 LinkedIn: linkedin.com/in/james-agus-b40707411/
📄 You can also download my resume from the home page!`;
    }

    // Resume/CV
    if (msg.includes('resume') || msg.includes('cv') || msg.includes('download')) {
      return `You can download my resume directly from the home page!

Just click the "Download Resume" button next to the "Hire Me" button at the top of the page.

My resume includes:
• Educational background
• Technical skills and expertise
• Project portfolio
• Professional experience

Feel free to review it and reach out if you'd like to discuss opportunities!`;
    }

    // LinkedIn
    if (msg.includes('linkedin') || msg.includes('social')) {
      return `You can connect with me on LinkedIn:
🔗 linkedin.com/in/james-agus-b40707411/

I regularly share updates about my projects, design work, and professional journey. Feel free to send me a connection request!`;
    }

    // Default response
    return `Thanks for your message! I'm James Agus's portfolio assistant. I can help you with:

- My skills and technical expertise
- Projects I've worked on
- Educational background
- Contact information
- Future goals and aspirations

Try asking me about any of these, or use the quick action buttons above!`;
  };

  const handleSendMessage = (message?: string) => {
    const msgToSend = message || inputMessage;
    if (msgToSend.trim()) {
      setChatMessages([
        ...chatMessages,
        { role: 'user', text: msgToSend },
        {
          role: 'assistant',
          text: getAIResponse(msgToSend)
        }
      ]);
      setInputMessage('');
    }
  };

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  return (
    <>
      <ThemeDock onThemeChange={handleThemeChange} currentTheme={theme} />

      {/* AI Assistant */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        {!aiChatOpen && (
          <button
            onClick={() => setAiChatOpen(true)}
            className="relative group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass border border-solid border-[rgba(244,124,124,0.3)] flex items-center justify-center shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Bot size={24} className="sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="absolute -top-14 right-0 px-4 py-2 glass rounded-2xl border border-solid border-[rgba(244,124,124,0.3)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm hidden sm:block">
              Chat with my AI
            </div>
          </button>
        )}

        {aiChatOpen && (
          <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[calc(100vh-8rem)] sm:h-[600px] max-h-[600px] glass-heavy rounded-3xl border border-solid border-[rgba(244,124,124,0.3)] shadow-2xl flex flex-col overflow-hidden">
            {/* Header with Status */}
            <div className="p-6 border-b border-[rgba(244,124,124,0.2)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot size={24} className="text-primary" />
                <div>
                  <h3 className="font-medium text-base" style={{ fontFamily: 'var(--font-mono)' }}>
                    Portfolio Assistant
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setAiChatOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm border border-solid whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground border-primary/30'
                        : 'glass border-[rgba(244,124,124,0.2)] text-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleQuickAction(chip)}
                  className="px-4 py-2 rounded-full glass border border-solid border-[rgba(244,124,124,0.3)] text-xs hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-[rgba(244,124,124,0.2)] flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ fontFamily: 'var(--font-mono)' }}
              />
              <button
                onClick={() => handleSendMessage()}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
