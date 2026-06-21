export interface SkillCategory {
  id: string;
  title: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  users: string;
  tech: string[];
  role: string;
  highlight: string;
  bannerColor: string; // e.g., 'bg-blue-100' or hex color or tailwind text colors
}

export interface DesignItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageLeft: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  publishedIn: string;
  tags: string[];
  url: string;
}
