export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'core' | 'frameworks' | 'databases' | 'messaging' | 'infra' | 'other';
  description: string;
  yearsOfExperience: number;
}

export interface Achievement {
  text: string;
  metric?: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
  icon: string;
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
  systemArchitectureId?: string;
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

// Architecture visualizer types
export interface ArchNode {
  id: string;
  label: string;
  type: 'trigger' | 'queue' | 'orchestration' | 'logic' | 'storage' | 'integration' | 'actor';
  description: string;
  tech: string;
  coords: { x: number; y: number }; // Percentage coords (0-100) for grid positioning
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
  type?: 'sync' | 'async' | 'event';
}

export interface SystemArchitecture {
  id: string;
  name: string;
  description: string;
  nodes: ArchNode[];
  edges: ArchEdge[];
  kpis: { label: string; value: string; color: string }[];
}

// API simulator types
export interface ApiTestCase {
  id: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  requestBody?: string;
  expectedResponse: string;
  logs: string[];
}
