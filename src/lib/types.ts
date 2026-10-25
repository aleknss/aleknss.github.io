export interface ProjectData {
  name: string;
  link?: string | null;
  logo: string;
  skills: string[];
  locale: "es" | "en";
  order: number;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}

export interface EducationEntry {
  modalidad: string;
  grado: string;
  ciudad: string;
  graduacion: string;
}

export interface ExperienceItem {
  from: number;
  to: number | null;
  company: string;
  role: string;
  logo: string;
  descriptions: string[];
}

export interface ParticipacionItem {
  name: string;
  description: string;
  clave: string;
}

export interface SiteData {
  name: string;
  bio: string;
  contacts: {
    phone: string;
    email: string;
    github: string;
    twitter: string;
    linkedin: string;
    location: string;
  };
  education: {
    bach?: EducationEntry | null;
    fp?: EducationEntry | null;
  };
  experience: ExperienceItem[];
  participaciones: ParticipacionItem[];
}

export interface ClientData {
  name: string;
  sector?: string | null;
  summary: string;
  result?: string | null;
  href?: string | null;
  image?: string | null;
  year?: number | null;
  locale: "es" | "en";
  order: number;
}

export interface ServiceMonthly {
  from?: number | null;
  to?: number | null;
  note?: string | null;
  includes: string[];
}

export interface ServiceTier {
  name: string;
  price: string;
  description: string;
  includes: string[];
  monthly?: ServiceMonthly | null;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role?: string | null;
}

export interface ServiceStoryBlock {
  title: string;
  text: string;
  points: string[];
}

export interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: string;
  stack: string[];
  priceFrom?: number | null;
  priceTo?: number | null;
  priceNote?: string | null;
  hourlyRate?: number | null;
  tiers: ServiceTier[];
  problem?: ServiceStoryBlock | null;
  solution?: ServiceStoryBlock | null;
  steps: ServiceStep[];
  differentials: string[];
  faq: ServiceFaq[];
  testimonials: ServiceTestimonial[];
  featuredClient?: { name: string; href: string } | null;
  locale: "es" | "en";
  order: number;
}
