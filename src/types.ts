export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string[];
  metrics?: string[];
  tech: string[];
  category: 'Systems' | 'Embedded' | 'Web' | 'All';
  github: string;
  live?: string;
  featured: boolean;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    highlight?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}