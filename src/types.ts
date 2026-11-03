export type SectionId = 
  | 'home' 
  | 'about' 
  | 'education' 
  | 'skills' 
  | 'experience' 
  | 'beyond-academics' 
  | 'contact';

export interface EditorialCard {
  id: SectionId;
  route: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  rotation: number;
  zIndex: number;
  accentColor?: string;
  imageSrc?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string[];
  coursework?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}
