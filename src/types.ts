export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'core' | 'frameworks' | 'databases' | 'messaging' | 'infra' | 'other';
  description: string;
  yearsOfExperience: number;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  role: string;
  impactMetrics: string[];
  achievements: string[];
}

export interface Company {
  name: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  keyProjects: Project[];
  coreTech: string[];
  achievements: string[];
}
