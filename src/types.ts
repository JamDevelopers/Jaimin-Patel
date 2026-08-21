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

export interface DevelopedWebsite {
  id: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  period: string;
  developedBy: string;
  liveUrlOrLocation?: string;
  summary: string;
  techStack: string[];
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  bgGradient: string;
  websiteType: 'seo_portfolio' | 'agency_ecommerce' | 'cng_energy' | 'gas_safety' | 'eco_automotive';
  mainImage: string;
  galleryImages: string[];
  mockupDetails: {
    heroHeading: string;
    subHeading: string;
    badges: string[];
    sections: { title: string; desc: string; icon?: string }[];
    footerCredit: string;
    stats?: { label: string; val: string }[];
  };
}

export interface GalleryAsset {
  id: string;
  src: string;
  title: string;
  category: 'Flutter Application' | 'Websites & Portals' | 'Desktop Applications' | 'SEO & Digital Marketing' | 'Catalogue Manager' | 'POS & Retail' | string;
  associatedSiteId?: string;
  caption: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceType: string;
  message: string;
}
