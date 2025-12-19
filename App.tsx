
import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Download, Code, Cpu, BookOpen, Mail, Terminal, ChevronRight, Github, Linkedin, Brain, Video, Award, ExternalLink, Sparkles, Heart, GraduationCap, Briefcase, Rocket, Eye, Star, User, Target } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, PROJECTS, DOCUMENTS, SKILLS, EXPERIENCE, EDUCATION, ACHIEVEMENTS, REFERENCES, SOFT_SKILLS, INTERESTS } from './constants';
import { Section, Project, SkillItem } from './types';
import ProjectCard from './components/ProjectCard';
import CVModal from './components/CVModal';
import FloatingParticles from './components/FloatingParticles';
import AreyengLoginMock from './components/AreyengLoginMock';

// Animated Skill Bar Component with Percentage Count-up
const SkillBar: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // ms
    const delay = 100 + index * 50;

    const timer = setTimeout(() => {
      setWidth(skill.level);
      
      // Simple count-up animation for the percentage number
      let start = 0;
      const end = skill.level;
      if (start === end) return;
      
      const incrementTime = Math.floor(animationDuration / end);
      const counter = setInterval(() => {
        start += 1;
        setDisplayLevel(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-bold text-slate-700 group-hover/skill:text-purple-600 transition-colors font-sans">{skill.name}</span>
        <span className="text-xs font-bold text-purple-600 bg-purple-100/80 px-2 py-0.5 rounded-md shadow-sm border border-purple-200 transition-all">
          {displayLevel}%
        </span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200/50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-[1500ms] cubic-bezier(0.34, 1.56, 0.64, 1)" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  const generateResumePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const darkSlate = '#334155'; 
    const purplePrimary = '#9333ea';
    const white = '#ffffff';
    const textGray = '#475569'; 

    // Sidebar Configuration
    const sidebarWidth = 75; 
    doc.setFillColor(darkSlate);
    doc.rect(0, 0, sidebarWidth, pageHeight, 'F');

    let leftY = 12;
    const leftMargin = 8;
    const leftContentWidth = sidebarWidth - (leftMargin * 2);

    // Sidebar: Name
    doc.setTextColor(white);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("BASETSANA", leftMargin, leftY);
    leftY += 8;
    doc.setTextColor(purplePrimary);
    doc.text("ZULU", leftMargin, leftY);
    leftY += 12;

    // Sidebar: Personal Info
    const personalItems = [
        { label: "Location:", val: PERSONAL_INFO.address },
        { label: "Email:", val: PERSONAL_INFO.email },
        { label: "Phone:", val: PERSONAL_INFO.phone }
    ];

    personalItems.forEach(item => {
        doc.setFontSize(9); 
        doc.setFont("helvetica", "bold");
        doc.setTextColor(purplePrimary); 
        doc.text(item.label, leftMargin, leftY);
        leftY += 5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(white);
        const valLines = doc.splitTextToSize(item.val, leftContentWidth);
        doc.text(valLines, leftMargin, leftY);
        leftY += (valLines.length * 5) + 3;
    });

    // Sidebar: Technical Skills
    leftY += 2;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(purplePrimary);
    doc.text("Technical Skills", leftMargin, leftY);
    doc.setDrawColor(255, 255, 255, 0.2);
    doc.line(leftMargin, leftY + 1.5, sidebarWidth - leftMargin, leftY + 1.5);
    leftY += 8;
    
    const categories = ['ML/AI', 'Languages', 'Frameworks', 'Tools'];
    categories.forEach(cat => {
      const catSkills = SKILLS.filter(s => s.category === cat);
      if (catSkills.length > 0) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(purplePrimary);
        doc.setFontSize(9);
        doc.text(cat, leftMargin, leftY);
        leftY += 5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(white);
        catSkills.forEach(skill => {
          doc.text("• " + skill.name, leftMargin + 2, leftY);
          leftY += 5;
        });
        leftY += 2;
      }
    });

    // Sidebar: Soft Skills
    leftY += 2;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(purplePrimary);
    doc.text("Soft Skills", leftMargin, leftY);
    doc.line(leftMargin, leftY + 1.5, sidebarWidth - leftMargin, leftY + 1.5);
    leftY += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(white);
    SOFT_SKILLS.forEach(skill => {
        const skillLines = doc.splitTextToSize("• " + skill, leftContentWidth);
        doc.text(skillLines, leftMargin, leftY);
        leftY += (skillLines.length * 5) + 1;
    });

    // Main Content Configuration
    let rightY = 15;
    const rightMargin = sidebarWidth + 10;
    const rightContentWidth = pageWidth - rightMargin - 10;

    // Main: Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(purplePrimary);
    doc.text(PERSONAL_INFO.title, rightMargin, rightY);
    rightY += 10;

    // Main: Summary
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray);
    const summaryLines = doc.splitTextToSize(PERSONAL_INFO.cvSummary, rightContentWidth);
    doc.text(summaryLines, rightMargin, rightY);
    rightY += (summaryLines.length * 5) + 10;

    const addRightSectionTitle = (title: string) => {
        doc.setTextColor(purplePrimary); 
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text(title.toUpperCase(), rightMargin, rightY);
        doc.setDrawColor(147, 51, 234);
        doc.line(rightMargin, rightY + 1.5, pageWidth - 10, rightY + 1.5);
        rightY += 10;
    };

    // Main: Work Experience
    addRightSectionTitle("Work Experience");
    EXPERIENCE.forEach(item => {
        doc.setTextColor(textGray);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("• " + item.role, rightMargin, rightY);
        rightY += 5;
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(item.company + " | " + item.period, rightMargin + 4, rightY);
        rightY += 6;
        item.description.forEach(desc => {
            const lines = doc.splitTextToSize("- " + desc, rightContentWidth - 4);
            doc.text(lines, rightMargin + 4, rightY);
            rightY += (lines.length * 5) + 1;
        });
        rightY += 4;
    });

    // Main: Education
    addRightSectionTitle("Education");
    EDUCATION.forEach(item => {
        doc.setTextColor(textGray);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("• " + item.degree, rightMargin, rightY);
        rightY += 5;
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(item.institution + " (" + item.year + ")", rightMargin + 4, rightY);
        rightY += 10;
    });

    // Main: References
    addRightSectionTitle("References");
    REFERENCES.forEach(item => {
        doc.setTextColor(textGray);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text("• " + item.name, rightMargin, rightY);
        rightY += 5;
        doc.setFont("helvetica", "normal");
        doc.text(item.company + " - " + item.role, rightMargin + 4, rightY);
        rightY += 5;
        doc.setTextColor(purplePrimary); 
        doc.text(item.contact, rightMargin + 4, rightY);
        doc.setTextColor(textGray);
        rightY += 8;
    });

    // Trigger PDF download
    doc.save(`${PERSONAL_INFO.name.replace(/\s+/g, '_')}_CV.pdf`);
  };

  const handleDownloadCV = () => {
    generateResumePDF();
  };

  const NavLink = ({ section, label, icon: Icon }: { section: Section, label: string, icon: any }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-sans group ${
        activeSection === section 
          ? 'bg-purple-100 text-purple-600 border border-purple-200 shadow-sm' 
          : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
      }`}
    >
      <Icon className={`w-4 h-4 ${activeSection === section ? 'animate-bounce' : 'group-hover:animate-bounce'}`} />
      {label}
    </button>
  );

  const nameParts = PERSONAL_INFO.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div className="min-h-screen flex flex-col bg-background text-slate-800 selection:bg-purple-200">
      <FloatingParticles />
      <nav className="sticky top-0 z-40 w-full border-b border-purple-100 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveSection('home')}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                 <span className="font-serif font-bold text-white text-lg">{firstName.charAt(0)}</span>
              </div>
              <span className="font-serif font-bold text-xl text-slate-800">{PERSONAL_INFO.name}</span>
            </div>
            <div className="hidden md:flex gap-2">
              <NavLink section="home" label="Overview" icon={Sparkles} />
              <NavLink section="experience" label="Experience" icon={Briefcase} />
              <NavLink section="education" label="Education" icon={GraduationCap} />
              <NavLink section="skills" label="Skills" icon={Brain} />
              <NavLink section="capstone" label="Capstone" icon={Rocket} />
              <NavLink section="projects" label="Projects" icon={Heart} />
              <NavLink section="certificates" label="Certificates" icon={Award} />
              <NavLink section="contact" label="Contact" icon={Mail} />
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-purple-600">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          <button onClick={() => setActiveSection('home')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Overview</button>
          <button onClick={() => setActiveSection('experience')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Experience</button>
          <button onClick={() => setActiveSection('education')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Education</button>
          <button onClick={() => setActiveSection('skills')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Skills</button>
          <button onClick={() => setActiveSection('capstone')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Capstone</button>
          <button onClick={() => setActiveSection('projects')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Projects</button>
          <button onClick={() => setActiveSection('certificates')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Certificates</button>
          <button onClick={() => setActiveSection('contact')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-purple-50 rounded-lg">Contact</button>
        </div>
      )}

      <main className="flex-grow relative overflow-hidden z-10">
        <div className="fixed top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm">
            <div className="bg-surface w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col">
              <div className="relative p-8 border-b border-purple-100 bg-gradient-to-r from-surface to-purple-50">
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-purple-100 text-slate-500 rounded-full transition-all border border-purple-100">
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-3xl font-bold text-slate-800 mb-4 font-serif">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map(t => (
                    <span key={t} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  {selectedProject.id === 'p9' ? <AreyengLoginMock /> : <img src={selectedProject.thumbnail} alt={selectedProject.title} className="w-full object-cover" />}
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-sans">{selectedProject.description}</p>
                {selectedProject.fullDocumentation && (
                  <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                     <h3 className="text-xl font-bold mb-4 text-purple-600 flex items-center gap-2 font-serif"><BookOpen className="w-5 h-5" /> Documentation</h3>
                     <div className="whitespace-pre-line text-slate-700 font-mono text-sm leading-relaxed">{selectedProject.fullDocumentation}</div>
                  </div>
                )}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.demoUrl && <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"><ExternalLink className="w-5 h-5" /> Launch Demo</a>}
                  {selectedProject.videoUrl && <a href={selectedProject.videoUrl} target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"><Video className="w-5 h-5" /> Watch Video</a>}
                  {selectedProject.repoUrl && <a href={selectedProject.repoUrl} target="_blank" rel="noreferrer" className="flex-1 bg-white text-slate-700 py-3 rounded-xl font-bold text-center border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"><Github className="w-5 h-5" /> View Code</a>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Home Section (Overview) */}
        {activeSection === 'home' && (
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Area */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-20 animate-fade-in-up">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-purple-200 rounded-full shadow-lg text-purple-600 text-sm font-bold mb-6"><span>👋</span> Hello world, I'm</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-900 font-serif">
                  {firstName} <span className="gradient-text">{lastName}</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-purple-500 mb-8 font-serif italic">{PERSONAL_INFO.title}</h2>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                  <button onClick={handleDownloadCV} className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95"><Download className="w-5 h-5" /> Download PDF CV</button>
                  <button onClick={() => setActiveSection('contact')} className="px-8 py-4 text-purple-600 border border-purple-200 bg-white rounded-xl font-bold hover:bg-purple-50 transition-all shadow-xl hover:scale-105 active:scale-95">Contact Me</button>
                </div>
              </div>
              <div className="relative group lg:w-1/3">
                <div className="absolute inset-0 bg-purple-500/20 rounded-[2rem] blur-2xl animate-pulse"></div>
                <img src={PERSONAL_INFO.profileImage} alt={PERSONAL_INFO.name} className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] border-4 border-white shadow-2xl transition-transform duration-500 hover:rotate-2" />
              </div>
            </div>

            {/* About Me & Career Objective Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-200">
              {/* About Me */}
              <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <User className="w-48 h-48 text-purple-900" />
                </div>
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif">About Me</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-sans relative">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Career Objective */}
              <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-indigo-100 shadow-xl shadow-indigo-900/5 hover:shadow-indigo-900/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <Target className="w-48 h-48 text-indigo-900" />
                </div>
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif">Career Objective</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-sans relative">
                  Highly motivated AI/ML Engineer and Data Scientist aiming to leverage deep technical expertise in Python, NLP, and Generative AI to drive innovation. I am committed to developing ethical, scalable, and impact-driven AI solutions that solve real-world complexities while continuously evolving with the latest technological advancements.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Capstone Section */}
        {activeSection === 'capstone' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800 font-serif">Capstone Project 👑</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-sans text-lg">My flagship engineering achievement representing comprehensive technical mastery.</p>
            </div>
            
            <div className="space-y-12">
               {PROJECTS.filter(p => p.category === 'Capstone').map((project) => (
                <div key={project.id} className="animate-fade-in-up bg-white rounded-[2.5rem] border border-purple-100 overflow-hidden shadow-2xl hover:shadow-purple-900/10 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-slate-50 border-r border-purple-50 flex items-center justify-center overflow-hidden">
                      {project.id === 'p9' ? <AreyengLoginMock /> : <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover min-h-[400px]" />}
                    </div>
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200 mb-6 font-sans">👑 FEATURED CAPSTONE</span>
                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 font-serif mb-6 leading-tight">{project.title}</h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-sans">{project.description}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 font-sans">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {project.techStack.map(tech => (
                            <span key={tech} className="px-4 py-2 bg-purple-50 text-purple-700 border border-purple-100 rounded-xl text-xs font-bold shadow-sm font-sans">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-6">
                        <button onClick={() => setSelectedProject(project)} className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20 hover:scale-105 active:scale-95 flex items-center gap-2"><Sparkles className="w-5 h-5" /> View Case Study</button>
                        {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-indigo-600/20"><Video className="w-5 h-5" /> Watch Video</a>}
                        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"><ExternalLink className="w-5 h-5" /> Live Demo</a>}
                        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"><Github className="w-5 h-5" /> View Code</a>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Highlighted Skills Section */}
        {activeSection === 'skills' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4 text-slate-800 font-serif">Skills & Expertise 🧠</h2>
              <p className="text-slate-600 font-sans text-lg">Detailed proficiency levels across core technical domains.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {['ML/AI', 'Languages', 'Frameworks', 'Tools'].map((cat, catIdx) => (
                <div 
                  key={cat} 
                  className={`bg-white p-8 rounded-[2rem] border border-purple-100 shadow-xl shadow-purple-900/5 transition-all hover:shadow-purple-900/10 animate-fade-in-up`}
                  style={{ animationDelay: `${catIdx * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-8 border-b border-purple-100 pb-4">
                    <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                       {cat === 'ML/AI' ? <Brain className="w-6 h-6"/> : 
                        cat === 'Languages' ? <Terminal className="w-6 h-6"/> :
                        cat === 'Frameworks' ? <Cpu className="w-6 h-6"/> : 
                        <Code className="w-6 h-6"/>}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 font-serif">{cat}</h3>
                  </div>
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === cat).map((skill, skillIdx) => (
                      <SkillBar key={skill.name} skill={skill} index={skillIdx + (catIdx * 3)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section - Dedicated */}
        {activeSection === 'experience' && (
          <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 font-serif text-center">Work History 🚀</h2>
            <p className="text-slate-600 mb-16 font-sans text-center text-lg">A chronological view of my career journey.</p>
            <div className="space-y-12 border-l-2 border-purple-200 pl-8 ml-4">
              {EXPERIENCE.map((item, idx) => (
                <div key={item.id} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <span className={`absolute -left-[42px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center bg-purple-600`}>
                    <Briefcase className="w-2.5 h-2.5 text-white" />
                  </span>
                  <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-slate-800">{item.role}</h3>
                    <p className="text-purple-600 font-bold">{item.company}</p>
                    <p className="text-slate-400 font-medium italic text-sm mb-3">{item.period}</p>
                    <ul className="space-y-2 text-slate-600 font-sans list-disc ml-5">
                      {item.description.map((d, i) => <li key={i} className="leading-relaxed">{d}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section - Dedicated */}
        {activeSection === 'education' && (
          <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 font-serif text-center">Academic Background 🎓</h2>
            <p className="text-slate-600 mb-16 font-sans text-center text-lg">My foundational learning and specialized education.</p>
            <div className="space-y-12 border-l-2 border-indigo-200 pl-8 ml-4">
              {EDUCATION.map((item, idx) => (
                <div key={item.id} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <span className={`absolute -left-[42px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center bg-indigo-500`}>
                    <GraduationCap className="w-2.5 h-2.5 text-white" />
                  </span>
                  <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-slate-800">{item.degree}</h3>
                    <p className="text-indigo-600 font-bold">{item.institution}</p>
                    <p className="text-slate-400 font-medium italic text-sm">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section - Including Areyeng */}
        {activeSection === 'projects' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 font-serif">Portfolio Showcase 🌸</h2>
            <p className="text-slate-600 mb-12 font-sans text-lg">A collection of research, bootcamp prototypes, and full-scale applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(p => (
                <ProjectCard key={p.id} project={p} onViewDetails={setSelectedProject} />
              ))}
            </div>
          </section>
        )}

        {activeSection === 'certificates' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-slate-800 font-serif">Certifications 🏆</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOCUMENTS.map(doc => (
                <a key={doc.id} href={doc.url} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg">
                  <div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3 inline-block">{doc.type}</span>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors leading-tight">{doc.title}</h3>
                    <p className="text-slate-500 text-sm mt-2">{doc.content}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-400 group-hover:text-purple-500 transition-colors">
                    <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> {doc.date}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="py-20 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-16 text-slate-800 font-serif">Let's Create Together 💌</h2>
            <div className="flex flex-wrap justify-center gap-12">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
                <div className="p-6 bg-white rounded-[2rem] border border-purple-100 group-hover:border-purple-400 group-hover:bg-purple-50 transition-all shadow-xl group-hover:-translate-y-2"><Linkedin className="w-10 h-10 text-slate-400 group-hover:text-purple-600" /></div>
                <span className="text-slate-500 font-bold">LinkedIn</span>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 group">
                <div className="p-6 bg-white rounded-[2rem] border border-purple-100 group-hover:border-purple-400 group-hover:bg-purple-50 transition-all shadow-xl group-hover:-translate-y-2"><Mail className="w-10 h-10 text-slate-400 group-hover:text-purple-600" /></div>
                <span className="text-slate-500 font-bold">Email</span>
              </a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
                <div className="p-6 bg-white rounded-[2rem] border border-purple-100 group-hover:border-purple-400 group-hover:bg-purple-50 transition-all shadow-xl group-hover:-translate-y-2"><Github className="w-10 h-10 text-slate-400 group-hover:text-purple-600" /></div>
                <span className="text-slate-500 font-bold">GitHub</span>
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-purple-100 py-10 bg-white/50 text-center">
        <p className="text-slate-500 text-sm font-sans">© 2025 Basetsana Zulu. All rights reserved.</p>
        <p className="text-slate-400 text-xs mt-2 flex items-center justify-center gap-1">Built with <Heart className="w-3 h-3 text-purple-500 animate-pulse" /> and React</p>
      </footer>
    </div>
  );
};

export default App;
