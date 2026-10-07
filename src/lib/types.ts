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
