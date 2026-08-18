export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  yearsRange: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  score: string;
  passingYear: string;
  board: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: { name: string; level?: number; featured?: boolean }[];
}

export interface SystemArchitectureStep {
  title: string;
  description: string;
  badge?: string;
}

export interface ProductFeature {
  name: string;
  description: string;
  tag: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  impact: string;
  tech: string[];
  icon: string;
  metrics?: { label: string; value: string }[];
  architecture?: SystemArchitectureStep[];
  features?: ProductFeature[];
  demoType?: 'whatsapp' | 'taxpro' | 'flutter' | 'crm' | 'accounting' | 'ecommerce';
  imageUrl?: string;
  galleryImages?: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceType: string;
  message: string;
}
