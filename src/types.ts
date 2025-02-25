export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}