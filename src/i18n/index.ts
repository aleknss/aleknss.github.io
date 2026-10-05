export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

export interface ProjectData {
  name: string;
  link?: string;
  logo: string;
  description: string;
  skills: string[];
}

export interface ExperienceData {
  from: number;
  to: number | null;
  company: string;
  role: string;
  logo: string;
  descriptions: string[];
}

export interface ParticipacionData {
  name: string;
  description: string;
  clave: string;
}

export interface EducationEntry {
  modalidad: string;
  grado: string;
  ciudad: string;
  graduacion: string;
}

export interface PortfolioData {
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
    bach?: EducationEntry;
    fp?: EducationEntry;
  };
  projects: ProjectData[];
  experience: ExperienceData[];
  participaciones: ParticipacionData[];
}

export function getLocale(locale: string | undefined): Locale {
  return locale === "en" ? "en" : "es";
}

export function otherLocale(locale: string | undefined): Locale {
  return locale === "en" ? "es" : "en";
}

export function otherLocalePath(
  locale: string | undefined,
  pathname: string,
): string {
  if (locale === "en") {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

const es = {
  "nav.aria": "Navegación principal",
  "nav.bio": "Bio",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.attendee": "Participaciones",
  "nav.education": "Datos Académicos",
  "nav.skills": "Habilidades",
  "nav.contact": "Contacto",
  "bio.available": "Disponible para trabajo",
  "bio.greeting": "¡Encantado! Soy",
  "bio.cv": "Currículum Vitae",
  "experience.present": "Presente",
  "projects.visit": "Visitar",
  "education.city": "Ciudad:",
  "education.degree": "Grado:",
  "education.graduated": "Graduado en:",
  "skills.languages": "Lenguajes",
  "skills.tools": "Herramientas",
  "form.name": "Nombre",
  "form.email": "Email",
  "form.message": "Mensaje",
  "form.send": "Enviar",
  "form.sending": "Enviando...",
  "form.successTitle": "Mensaje enviado",
  "form.successText": "Gracias por contactar. Te responderé pronto.",
  "form.errorText": "No se pudo enviar. Intenta de nuevo o usa el email.",
  "form.noKey": "Formulario no configurado. Usa los enlaces de contacto.",
  "form.namePlaceholder": "Tu nombre",
  "form.messagePlaceholder": "Tu mensaje...",
  "project.back": "Volver a proyectos",
  "project.notFound": "Proyecto no encontrado",
  "project.backHome": "Volver al inicio",
  "project.visit": "Visitar proyecto",
  "theme.switch": "Cambiar tema",
  "lang.switch": "Switch to English",
} as const;

const en = {
  "nav.aria": "Main navigation",
  "nav.bio": "Bio",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.attendee": "Attendee",
  "nav.education": "Education",
  "nav.skills": "Skills",
  "nav.contact": "Contact",
  "bio.available": "Available for work",
  "bio.greeting": "Nice to meet you! I'm",
  "bio.cv": "Curriculum Vitae",
  "experience.present": "Present",
  "projects.visit": "Visit",
  "education.city": "City:",
  "education.degree": "Degree:",
  "education.graduated": "Graduated in:",
  "skills.languages": "Languages",
  "skills.tools": "Tools",
  "form.name": "Name",
  "form.email": "Email",
  "form.message": "Message",
  "form.send": "Send",
  "form.sending": "Sending...",
  "form.successTitle": "Message sent",
  "form.successText": "Thanks for reaching out. I'll get back to you soon.",
  "form.errorText": "Could not send. Try again or use email instead.",
  "form.noKey": "Form not configured. Use the contact links instead.",
  "form.namePlaceholder": "Your name",
  "form.messagePlaceholder": "Your message...",
  "project.back": "Back to projects",
  "project.notFound": "Project not found",
  "project.backHome": "Back to home",
  "project.visit": "Visit project",
  "theme.switch": "Toggle theme",
  "lang.switch": "Cambiar a español",
} as const;

export type MessageKey = keyof typeof es;

export function t(locale: string | undefined) {
  return (locale === "en" ? en : es) as Record<MessageKey, string>;
}
