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
  "nav.company": "Quién soy",
  "nav.pricing": "Precios",
  "nav.process": "Proceso",
  "nav.faq": "FAQ",
  "nav.clients": "Proyectos de clientes",
  "bio.available": "Disponible para trabajo",
  "bio.greeting": "¡Encantado! Soy",
  "bio.role": "Desarrollador Fullstack",
  "bio.lead":
    "Construyo aplicaciones web funcionales y cuidadas: del backend al último detalle visual.",
  "bio.cv": "Currículum Vitae",
  "bio.scroll": "Desplázate para ver más",
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
  "project.close": "Cerrar",
  "services.title": "Servicios",
  "services.hero": "Diseño y desarrollo web a medida.",
  "services.cta": "Ver servicios",
  "services.hero.sub":
    "Trabajo directo contigo, del diseño a la entrega.",
  "services.item.web": "Diseño y desarrollo web",
  "services.item.web.desc": "Webs a medida, rápidas y responsive.",
  "services.item.app": "Aplicaciones fullstack",
  "services.item.app.desc": "Del backend al último detalle visual.",
  "services.item.perf": "Rendimiento y SEO",
  "services.item.perf.desc": "Carga veloz y visibilidad en Google.",
  "services.company": "Alek Suso · Desarrollo web",
  "services.pricing": "Precios",
  "services.setup": "Puesta en marcha",
  "services.monthly": "Mantenimiento",
  "services.monthlySuffix": "/mes",
  "services.from": "Desde",
  "services.includes": "Qué incluye",
  "services.process": "Cómo trabajo",
  "services.differentials": "Qué me diferencia",
  "services.faq": "Preguntas frecuentes",
  "services.testimonials": "Clientes",
  "services.hourly": "Trabajos fuera de lo acordado",
  "services.hourlyNote": "presupuestado antes de empezar",
  "services.start": "Empezar proyecto",
  "services.startEmail": "Escríbeme",
  "services.startForm": "Usar el formulario",
  "services.featuredClient": "Ver proyecto de cliente",
  "services.clients.result": "Resultado",
  "legal.aviso": "Aviso legal",
  "legal.privacidad": "Privacidad",
  "services.soon.title": "Próximamente",
  "services.soon.text":
    "Estoy preparando una sección de servicios. Vuelve pronto.",
  "services.soon.back": "Volver al inicio",
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
  "nav.company": "About me",
  "nav.pricing": "Pricing",
  "nav.process": "Process",
  "nav.faq": "FAQ",
  "nav.clients": "Client projects",
  "bio.available": "Available for work",
  "bio.greeting": "Nice to meet you! I'm",
  "bio.role": "Fullstack Developer",
  "bio.lead":
    "I build functional, polished web applications: from backend to the last visual detail.",
  "bio.cv": "Curriculum Vitae",
  "bio.scroll": "Scroll to see more",
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
  "project.close": "Close",
  "services.title": "Services",
  "services.hero": "Custom web design and development.",
  "services.cta": "View services",
  "services.hero.sub": "I work directly with you, from design to delivery.",
  "services.item.web": "Web design & development",
  "services.item.web.desc": "Custom sites, fast and responsive.",
  "services.item.app": "Fullstack applications",
  "services.item.app.desc": "From backend to the last visual detail.",
  "services.item.perf": "Performance & SEO",
  "services.item.perf.desc": "Fast loads and visibility on Google.",
  "services.company": "Alek Suso · Web development",
  "services.pricing": "Pricing",
  "services.setup": "Setup",
  "services.monthly": "Maintenance",
  "services.monthlySuffix": "/month",
  "services.from": "From",
  "services.includes": "What's included",
  "services.process": "How I work",
  "services.differentials": "What sets me apart",
  "services.faq": "Frequently asked questions",
  "services.testimonials": "Clients",
  "services.hourly": "Work outside the agreed scope",
  "services.hourlyNote": "quoted before starting",
  "services.start": "Start a project",
  "services.startEmail": "Email me",
  "services.startForm": "Use the form",
  "services.featuredClient": "See client project",
  "services.clients.result": "Result",
  "legal.aviso": "Legal notice",
  "legal.privacidad": "Privacy",
  "services.soon.title": "Coming soon",
  "services.soon.text":
    "I'm preparing a services section. Check back soon.",
  "services.soon.back": "Back to home",
  "theme.switch": "Toggle theme",
  "lang.switch": "Cambiar a español",
} as const;

export type MessageKey = keyof typeof es;

export function t(locale: string | undefined) {
  return (locale === "en" ? en : es) as Record<MessageKey, string>;
}
