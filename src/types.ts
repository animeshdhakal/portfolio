export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  category: 'Web' | 'Embedded' | 'Systems' | 'AI';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}