export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Web' | 'IoT' | 'RPA';
  description: string;
  fullDescription: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description?: string;
}