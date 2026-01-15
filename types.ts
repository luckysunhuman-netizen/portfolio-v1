
export interface Project {
  id: string;
  name: string;
  period: string;
  role: string;
  technologies: string[];
  metrics: string[];
  background: string[];
  purpose: string;
  goal: string;
  roleDescription: string;
  keywords: string[];
  problems: string[];
  solutions: string[];
  learnings: string;
  kepcoVision: string; // New field for KEPCO strategic alignment
  imagePrompt: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  role: string;
  outcome: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Book {
  title: string;
  author: string;
  description: string;
}

export interface Certification {
  name: string;
  date: string;
  issuer: string;
}

export interface Award {
  name: string;
  date: string;
  issuer: string;
}
