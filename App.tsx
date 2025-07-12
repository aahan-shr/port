import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Download, 
  ExternalLink, 
  Code, 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Terminal, 
  Upload, 
  Send, 
  X, 
  ChevronUp, 
  Sun, 
  Moon, 
  Palette, 
  Sparkles,
  Bot,
  Play,
  Eye,
  Star,
  Users,
  Coffee,
  Heart,
  Zap,
  Target,
  Rocket,
  Globe,
  Camera,
  BookOpen,
  Trophy,
  Code2,
  Database,
  Server,
  Cloud,
  Settings,
  Linkedin,
  FileText,
  Briefcase,
  GraduationCap,
  User,
  Home,
  FolderOpen,
  MessageSquare,
  Menu,
  Languages
} from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showResumeAnalyzer, setShowResumeAnalyzer] = useState(false);
  const [showCodeSandbox, setShowCodeSandbox] = useState(false);
  const [showCertModal, setShowCertModal] = useState(null);
  const [showImageModal, setShowImageModal] = useState(null);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [resumeScore, setResumeScore] = useState(null);
  const [htmlCode, setHtmlCode] = useState('<h1>Hello World!</h1>\n<button onclick="alert(\'Hello!\')">Click me</button>');
  const [cssCode, setCssCode] = useState('h1 {\n  color: #3b82f6;\n  text-align: center;\n  font-family: Arial;\n}\n\nbutton {\n  background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: block;\n  margin: 20px auto;\n  transition: transform 0.2s;\n}\n\nbutton:hover {\n  transform: scale(1.05);\n}');
  const [jsCode, setJsCode] = useState('// Interactive JavaScript\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n  console.log(\'Hello from Sudhanshu\\\'s Code Sandbox!\');\n  \n  const button = document.querySelector(\'button\');\n  if (button) {\n    button.addEventListener(\'click\', function() {\n      this.style.background = \'linear-gradient(45deg, #10b981, #3b82f6)\';\n      setTimeout(() => {\n        this.style.background = \'linear-gradient(45deg, #3b82f6, #8b5cf6)\';\n      }, 500);\n    });\n  }\n});');
  const [activeCodeTab, setActiveCodeTab] = useState('html');
  const [language, setLanguage] = useState('en');
  const [visitorCount, setVisitorCount] = useState(1247);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const roles = ['Developer', 'Problem Solver', 'Innovator'];
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Translations
  const translations = {
    en: {
      hero: {
        subtitle: "Building the future, one line of code at a time. Passionate about creating innovative solutions that make a difference.",
        viewWork: "View My Work",
        downloadResume: "Download Resume",
        intro: "Hi, I'm Sudhanshu 👋\nI build smart solutions with code and creativity.\nLet's create something that matters."
      },
      about: {
        title: "About Me",
        content: "I'm Sudhanshu — a developer driven by curiosity and clarity. From HTML experiments to delivering open-source talks, I've grown through hands-on projects, volunteering, and real-world exposure. I don't just write code — I build solutions with intent."
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Let's build something extraordinary together"
      }
    },
    hi: {
      hero: {
        subtitle: "भविष्य का निर्माण, एक कोड लाइन के साथ। नवाचार समाधान बनाने के लिए जुनूनी।",
        viewWork: "मेरा काम देखें",
        downloadResume: "रिज्यूमे डाउनलोड करें",
        intro: "नमस्ते, मैं सुधांशु हूँ 👋\nमैं कोड और रचनात्मकता के साथ स्मार्ट समाधान बनाता हूँ।\nआइए कुछ महत्वपूर्ण बनाते हैं।"
      },
      about: {
        title: "मेरे बारे में",
        content: "मैं सुधांशु हूँ — एक डेवलपर जो जिज्ञासा और स्पष्टता से प्रेरित है। HTML प्रयोगों से लेकर ओपन-सोर्स वार्ताओं तक, मैं व्यावहारिक परियोजनाओं, स्वयंसेवा और वास्तविक दुनिया के अनुभव के माध्यम से बढ़ा हूँ।"
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "आइए मिलकर कुछ असाधारण बनाते हैं"
      }
    }
  };

  const t = translations[language];

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Visitor counter
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Theme classes
  const getThemeClasses = () => {
    const themes = {
      light: 'bg-gray-50 text-gray-900',
      dark: 'bg-gray-900 text-white',
      neon: 'bg-black text-green-400',
      pastel: 'bg-pink-50 text-purple-900'
    };
    return themes[theme] || themes.dark;
  };

  const getCardClasses = () => {
    const themes = {
      light: 'bg-white border-gray-200',
      dark: 'bg-gray-800 border-gray-700',
      neon: 'bg-gray-900 border-green-500',
      pastel: 'bg-white border-pink-200'
    };
    return themes[theme] || themes.dark;
  };

  // Scroll functions
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume download
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV General Sudhanshu.docx';
    link.download = 'CV General Sudhanshu.docx';
    link.click();
  };

  // Terminal commands
  const handleTerminalCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands:\n• whoami - About me\n• skills - My tech skills\n• show projects - View projects\n• sudo hire me - Download resume\n• cd future - Join my journey\n• cat secrets.md - Developer secrets\n• clear - Clear terminal';
        break;
      case 'whoami':
        response = 'Sudhanshu Sharma\nDeveloper | Problem Solver | Innovator\nBuilding the future with code and creativity.';
        break;
      case 'skills':
        response = 'Tech Stack:\n• Frontend: HTML, CSS, JavaScript\n• Backend: Python, C\n• Database: DBMS\n• DevOps: Docker, Kubernetes, Linux, AWS, Jenkins\n• Framework: Flask, MongoDB';
        break;
      case 'show projects':
        response = 'Scrolling to projects section...';
        setTimeout(() => scrollToSection(projectsRef), 1000);
        break;
      case 'sudo hire me':
        response = '🎉 Downloading resume... Welcome to the team!';
        setTimeout(() => {
          downloadResume();
          // Trigger confetti effect
          const confetti = document.createElement('div');
          confetti.innerHTML = '🎉'.repeat(20);
          confetti.style.position = 'fixed';
          confetti.style.top = '50%';
          confetti.style.left = '50%';
          confetti.style.transform = 'translate(-50%, -50%)';
          confetti.style.fontSize = '2rem';
          confetti.style.zIndex = '9999';
          confetti.style.pointerEvents = 'none';
          document.body.appendChild(confetti);
          setTimeout(() => document.body.removeChild(confetti), 3000);
        }, 1000);
        break;
      case 'cd future':
        response = '🚀 Joining your team soon...\n"The best way to predict the future is to create it."';
        break;
      case 'cat secrets.md':
        response = '# Developer Secrets 🤫\n• Coffee is my debugging tool\n• I talk to my code (it talks back)\n• Stack Overflow is my best friend\n• I dream in JavaScript\n• Ctrl+Z is my superpower';
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      default:
        response = `Command not found: ${command}\nType 'help' for available commands.`;
    }

    setTerminalHistory(prev => [...prev, { command, response }]);
  };

  // Chatbot responses
  const handleChatMessage = (message) => {
    const msg = message.toLowerCase();
    let response = '';

    if (msg.includes('project') || msg.includes('work')) {
      response = "My best project is the Public Toilet Locator app built with React Native and Firebase. It helps people find clean public facilities using Google Maps API. I've also built a traditional Rajasthani restaurant website and this smart portfolio!";
    } else if (msg.includes('tech') || msg.includes('skill')) {
      response = "I work with HTML, CSS, JavaScript, Python, C, Linux, DBMS, Docker, Kubernetes, AWS, Jenkins, Flask, and MongoDB. I'm always learning new technologies!";
    } else if (msg.includes('intern') || msg.includes('experience')) {
      response = "I volunteered at LPU's 'One India, One World 2025' cultural event and participated in leadership workshops. I've also given talks on open-source development!";
    } else if (msg.includes('contact') || msg.includes('hire')) {
      response = "I'd love to connect! You can reach me at sudhanshu.sharma.vs@gmail.com or download my resume. Let's build something amazing together!";
    } else if (msg.includes('hello') || msg.includes('hi')) {
      response = "Hi there! 👋 I'm Sudhanshu's AI assistant. I can tell you about his projects, skills, experience, or help you get in touch. What would you like to know?";
    } else {
      response = "That's interesting! Feel free to ask me about Sudhanshu's projects, skills, experience, or how to get in touch with him.";
    }

    setChatMessages(prev => [...prev, 
      { type: 'user', message },
      { type: 'bot', message: response }
    ]);
  };

  // Resume analyzer
  const analyzeResume = (file) => {
    // Simulate AI analysis
    setTimeout(() => {
      const score = Math.floor(Math.random() * 30) + 70; // 70-100
      const feedback = [
        "Add more quantifiable achievements",
        "Include relevant keywords for ATS",
        "Highlight technical projects",
        "Add soft skills section",
        "Include certifications"
      ];
      
      setResumeScore({
        score,
        feedback: feedback.slice(0, 3),
        strengths: ["Clear formatting", "Good project descriptions", "Relevant experience"]
      });
    }, 2000);
  };

  // Projects data
  const projects = [
    {
      title: "Rajasthani Di Rasoi",
      description: "A traditional Rajasthani restaurant website showcasing authentic cuisine and cultural heritage.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      demo: "#",
      featured: true
    },
    {
      title: "Public Toilet Locator",
      description: "Social impact app helping users find clean public facilities using real-time location and community reviews.",
      tech: ["React Native", "Firebase", "Google Maps API"],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      demo: "#",
      featured: true
    },
    {
      title: "Smart Portfolio Website",
      description: "This AI-powered portfolio with chatbot, resume analyzer, code sandbox, and terminal mode.",
      tech: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
      demo: "#",
      featured: true
    }
  ];

  // Memory wall images
  const memoryImages = [
    {
      src: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Hackathon with 300+ students - Leading innovation"
    },
    {
      src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "LPU Event with Om Birla - Cultural leadership"
    },
    {
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "NSS Volunteer - Community service"
    },
    {
      src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "SWOC Talk - Open source advocacy"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "First Mini Project - The beginning"
    }
  ];

  // Certificates data
  const certificates = [
    {
      title: "Voice of Leadership Anchoring",
      issuer: "Pradyut Foundation",
      description: "Certificate of appreciation for active participation in leadership and communication workshop",
      id: "cb4ead25-1f68-414e-a927-89976079ec62",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Student Volunteer – One India, One World 2025",
      issuer: "Lovely Professional University",
      description: "Recognized for organizing national cultural events at LPU",
      date: "April 22-24, 2025",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Linux Training Certificate",
      issuer: "Tech Institute",
      description: "Comprehensive training in Linux system administration and command line",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  // Skills data
  const skills = [
    { name: "HTML", level: 90, started: "Aug 2024", used: "All web projects" },
    { name: "CSS", level: 85, started: "Aug 2024", used: "Styling and animations" },
    { name: "JavaScript", level: 80, started: "Aug 2024", used: "Interactive features" },
    { name: "Python", level: 75, started: "Oct 2024", used: "Backend development" },
    { name: "Linux", level: 70, started: "July 2025", used: "System administration" },
    { name: "DBMS", level: 65, started: "Feb 2025", used: "Database design" },
    { name: "C", level: 60, started: "Feb 2025", used: "System programming" }
  ];

  // Timeline data
  const timeline = [
    {
      date: "August 2024",
      title: "Web Development Foundation",
      description: "Started with HTML, CSS, JavaScript",
      icon: <Globe className="w-4 h-4" />
    },
    {
      date: "October 2024",
      title: "Python Programming",
      description: "Learned Python for backend development",
      icon: <Code2 className="w-4 h-4" />
    },
    {
      date: "February 2025",
      title: "System Programming",
      description: "Studied C programming and DBMS",
      icon: <Database className="w-4 h-4" />
    },
    {
      date: "July 2025",
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, Linux, AWS, Jenkins, Flask, MongoDB",
      icon: <Cloud className="w-4 h-4" />
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading Sudhanshu's Portfolio...</h2>
          <div className="w-64 bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${getThemeClasses()}`}>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md ${getCardClasses()} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">Sudhanshu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection(heroRef)} className="hover:text-blue-500 transition-colors">
                <Home className="w-4 h-4 inline mr-1" />
                Home
              </button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-500 transition-colors">
                <User className="w-4 h-4 inline mr-1" />
                About
              </button>
              <button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-500 transition-colors">
                <FolderOpen className="w-4 h-4 inline mr-1" />
                Projects
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-500 transition-colors">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Contact
              </button>
            </div>

            {/* Theme Switcher & Language Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Toggle Language"
              >
                <Languages className="w-4 h-4" />
                <span className="ml-1 text-xs">{language.toUpperCase()}</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-lg transition-colors ${theme === 'light' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('neon')}
                  className={`p-2 rounded-lg transition-colors ${theme === 'neon' ? 'bg-green-500 text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Zap className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('pastel')}
                  className={`p-2 rounded-lg transition-colors ${theme === 'pastel' ? 'bg-pink-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Palette className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection(heroRef)} className="text-left hover:text-blue-500 transition-colors">
                  <Home className="w-4 h-4 inline mr-2" />
                  Home
                </button>
                <button onClick={() => scrollToSection(aboutRef)} className="text-left hover:text-blue-500 transition-colors">
                  <User className="w-4 h-4 inline mr-2" />
                  About
                </button>
                <button onClick={() => scrollToSection(projectsRef)} className="text-left hover:text-blue-500 transition-colors">
                  <FolderOpen className="w-4 h-4 inline mr-2" />
                  Projects
                </button>
                <button onClick={() => scrollToSection(contactRef)} className="text-left hover:text-blue-500 transition-colors">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 animate-float">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Sudhanshu Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">
                {roles[currentRole]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform font-semibold"
            >
              <Eye className="w-4 h-4 inline mr-2" />
              {t.hero.viewWork}
            </button>
            <button
              onClick={downloadResume}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold"
            >
              <Download className="w-4 h-4 inline mr-2" />
              {t.hero.downloadResume}
            </button>
            <a
              href="https://github.com/SuDhAnShU-shr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              <Github className="w-4 h-4 inline mr-2" />
              GitHub
            </a>
          </div>

          <div className={`${getCardClasses()} rounded-2xl p-8 border backdrop-blur-sm`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 animate-pulse">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {t.hero.intro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">{t.about.title}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-8">
                {t.about.content}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className={`${getCardClasses()} p-4 rounded-lg border text-center`}>
                  <div className="text-2xl font-bold text-blue-500">{visitorCount}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Visitors</div>
                </div>
                <div className={`${getCardClasses()} p-4 rounded-lg border text-center`}>
                  <div className="text-2xl font-bold text-green-500">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className={`${getCardClasses()} p-4 rounded-lg border text-center`}>
                  <div className="text-2xl font-bold text-purple-500">7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
                </div>
                <div className={`${getCardClasses()} p-4 rounded-lg border text-center`}>
                  <div className="text-2xl font-bold text-orange-500">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certificates</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Tech Journey Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-blue-500 font-semibold">{item.date}</div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${getCardClasses()} p-6 rounded-lg border hover:scale-105 transition-transform group cursor-pointer`}
                title={`Started: ${skill.started} | Used in: ${skill.used}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Started: {skill.started} • {skill.used}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${getCardClasses()} rounded-lg border overflow-hidden hover:scale-105 transition-transform group`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform text-center text-sm"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-1" />
                      Live Demo
                    </a>
                    <button
                      onClick={() => alert('Ask Sudhanshu directly for the code: sudhanshu.sharma.vs@gmail.com')}
                      className="flex-1 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center text-sm"
                    >
                      <Code className="w-4 h-4 inline mr-1" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Wall Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Memory Wall</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {memoryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setShowImageModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Certificates & Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className={`${getCardClasses()} rounded-lg border p-6 hover:scale-105 transition-transform`}>
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <button
                    onClick={() => setShowCertModal(cert)}
                    className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
                  >
                    View Certificate
                  </button>
                </div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-2">{cert.description}</p>
                {cert.date && <p className="text-xs text-blue-500">{cert.date}</p>}
                {cert.id && <p className="text-xs text-gray-400 font-mono">ID: {cert.id}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">AI & Developer Tools</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => setShowResumeAnalyzer(true)}
              className={`${getCardClasses()} p-6 rounded-lg border hover:scale-105 transition-transform text-left group`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">AI Resume Analyzer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Upload your resume and get AI-powered feedback</p>
            </button>

            <button
              onClick={() => setShowCodeSandbox(true)}
              className={`${getCardClasses()} p-6 rounded-lg border hover:scale-105 transition-transform text-left group`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Live Code Sandbox</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Test HTML, CSS, and JavaScript in real-time</p>
            </button>

            <button
              onClick={() => setShowTerminal(true)}
              className={`${getCardClasses()} p-6 rounded-lg border hover:scale-105 transition-transform text-left group`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Terminal Mode</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Interactive command-line interface</p>
            </button>

            <button
              onClick={() => setShowChatbot(true)}
              className={`${getCardClasses()} p-6 rounded-lg border hover:scale-105 transition-transform text-left group`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">AI Chatbot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ask me anything about Sudhanshu</p>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Location</span>
          </h2>

          <div className={`${getCardClasses()} rounded-lg border p-8 text-center`}>
            <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phagwara, Punjab</h3>
            <p className="text-gray-600 dark:text-gray-400">Volunteered at LPU Event – 2025</p>
            <div className="mt-4 text-sm text-blue-500">
              📍 Lovely Professional University Campus
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sudhanshu.sharma.vs@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>sudhanshu.sharma.vs@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/sudhanshu-sharma-1745b8324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/SuDhAnShU-shr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${getCardClasses()} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${getCardClasses()} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${getCardClasses()} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform font-semibold"
                >
                  <Send className="w-4 h-4 inline mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${getCardClasses()} border-t py-12 px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-lg font-semibold mb-2">
              "Code with passion. Deploy with purpose."
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              💬 Want to collaborate? 📫 Let's build something extraordinary.
            </div>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              📩 Contact Me
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            Built with: HTML • CSS • JavaScript • React • TypeScript • AI
          </div>

          <div className="text-center text-xs text-gray-500">
            💡 Hint: Try "cd future" in Terminal Mode 😉
          </div>

          <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
            © 2025 Sudhanshu Sharma. Built with ❤️ and lots of ☕
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        <button
          onClick={() => setShowChatbot(true)}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="AI Chatbot"
        >
          <Bot className="w-6 h-6" />
        </button>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="mailto:sudhanshu.sharma.vs@gmail.com"
          className="w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Scroll to Top"
        >
          <Rocket className="w-6 h-6" />
        </button>
      </div>

      {/* Modals */}
      
      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${getCardClasses()} rounded-lg border w-full max-w-md h-96 flex flex-col`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold">AI Assistant</h3>
              <button onClick={() => setShowChatbot(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center text-gray-500">
                  <Bot className="w-8 h-8 mx-auto mb-2" />
                  <p>Hi 👋 I'm Sudhanshu's AI assistant!</p>
                  <p className="text-sm">Ask me about his projects, skills, or experience.</p>
                </div>
              )}
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && chatInput.trim()) {
                      handleChatMessage(chatInput);
                      setChatInput('');
                    }
                  }}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-3 py-2 rounded-lg border ${getCardClasses()} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                <button
                  onClick={() => {
                    if (chatInput.trim()) {
                      handleChatMessage(chatInput);
                      setChatInput('');
                    }
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Modal */}
      {showTerminal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-black text-green-400 rounded-lg w-full max-w-2xl h-96 flex flex-col font-mono">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="font-semibold">Terminal Mode</h3>
              <button onClick={() => setShowTerminal(false)} className="text-red-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <div>Welcome to Sudhanshu's Terminal! Type 'help' to get started.</div>
              {terminalHistory.map((entry, index) => (
                <div key={index}>
                  <div className="text-blue-400">$ {entry.command}</div>
                  <div className="whitespace-pre-line">{entry.response}</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && terminalInput.trim()) {
                      handleTerminalCommand(terminalInput);
                      setTerminalInput('');
                    }
                  }}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent border-none outline-none text-green-400"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Analyzer Modal */}
      {showResumeAnalyzer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${getCardClasses()} rounded-lg border w-full max-w-md`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold">AI Resume Analyzer</h3>
              <button onClick={() => setShowResumeAnalyzer(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {!resumeScore ? (
                <div className="text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="mb-4">Upload your resume for AI analysis</p>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        analyzeResume(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors inline-block"
                  >
                    Choose File
                  </label>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">{resumeScore.score}/100</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Resume Score</div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-green-500">Strengths:</h4>
                    <ul className="text-sm space-y-1">
                      {resumeScore.strengths.map((strength, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-500">Suggestions:</h4>
                    <ul className="text-sm space-y-1">
                      {resumeScore.feedback.map((feedback, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          {feedback}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => setResumeScore(null)}
                    className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Analyze Another Resume
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Code Sandbox Modal */}
      {showCodeSandbox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${getCardClasses()} rounded-lg border w-full max-w-4xl h-96`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold">Live Code Sandbox</h3>
              <button onClick={() => setShowCodeSandbox(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex h-full">
              <div className="w-1/2 border-r border-gray-200 dark:border-gray-700">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveCodeTab('html')}
                    className={`px-4 py-2 text-sm ${activeCodeTab === 'html' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('css')}
                    className={`px-4 py-2 text-sm ${activeCodeTab === 'css' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    CSS
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('js')}
                    className={`px-4 py-2 text-sm ${activeCodeTab === 'js' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    JavaScript
                  </button>
                </div>
                <textarea
                  value={activeCodeTab === 'html' ? htmlCode : activeCodeTab === 'css' ? cssCode : jsCode}
                  onChange={(e) => {
                    if (activeCodeTab === 'html') setHtmlCode(e.target.value);
                    else if (activeCodeTab === 'css') setCssCode(e.target.value);
                    else setJsCode(e.target.value);
                  }}
                  className="w-full h-full p-4 font-mono text-sm bg-gray-900 text-green-400 resize-none border-none outline-none"
                  placeholder="Write your code here..."
                />
              </div>
              <div className="w-1/2">
                <div className="p-2 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold">
                  Live Preview
                </div>
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <style>${cssCode}</style>
                      </head>
                      <body>
                        ${htmlCode}
                        <script>${jsCode}</script>
                      </body>
                    </html>
                  `}
                  className="w-full h-full border-none"
                  title="Code Preview"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${getCardClasses()} rounded-lg border max-w-2xl w-full`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold">{showCertModal.title}</h3>
              <button onClick={() => setShowCertModal(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={showCertModal.image}
                alt={showCertModal.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p><strong>Issuer:</strong> {showCertModal.issuer}</p>
                <p><strong>Description:</strong> {showCertModal.description}</p>
                {showCertModal.date && <p><strong>Date:</strong> {showCertModal.date}</p>}
                {showCertModal.id && <p><strong>ID:</strong> <code className="text-sm">{showCertModal.id}</code></p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">{showImageModal.caption}</h3>
              <button onClick={() => setShowImageModal(null)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <img
              src={showImageModal.src}
              alt={showImageModal.caption}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;