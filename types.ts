
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
  thumbnail: string;
  category: 'Featured' | 'Bootcamp' | 'Capstone';
  fullDocumentation?: string; // Markdown supported
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'Frameworks' | 'ML/AI' | 'Tools' | 'Personal';
}

export interface CareerDoc {
  id: string;
  title: string;
  // Added 'Document' to allow for generic documentation types used in constants.ts
  type: 'Resume' | 'Cover Letter' | 'Case Study' | 'Document' | 'Certificate' | 'Badge';
  content: string;
  date: string;
  url?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string; // implied from text like "Capaciti - Talent Development Coach"
  contact: string;
}

// Navigation sections
export type Section = 'home' | 'skills' | 'experience' | 'education' | 'projects' | 'capstone' | 'certificates' | 'about' | 'contact';

// Added ChatMessage interface to support AIAssistant component
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
