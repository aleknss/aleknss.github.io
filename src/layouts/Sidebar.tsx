import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
  FaPeopleCarry,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiPineTree } from "react-icons/gi";
import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "../contexts/LanguageContext";

const SECTIONS = [
  { id: "bio", icon: FaHome },
  { id: "experience", icon: FaAward },
  { id: "projects", icon: AiOutlineFundProjectionScreen },
  { id: "attendee", icon: FaPeopleCarry },
  { id: "education", icon: FaGraduationCap },
  { id: "skills", icon: FaBrain },
  { id: "contact", icon: FaPaperPlane },
] as const;

const LABELS: Record<string, { es: string; en: string }> = {
  bio: { es: "Bio", en: "Bio" },
  experience: { es: "Experiencia", en: "Experience" },
  projects: { es: "Proyectos", en: "Projects" },
  attendee: { es: "Participaciones", en: "Attendee" },
  education: { es: "Datos Académicos", en: "Education" },
  skills: { es: "Habilidades", en: "Skills" },
  contact: { es: "Contacto", en: "Contact" },
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  sectionId: string;
  isActive: boolean;
  prefersReducedMotion: boolean | null;
}

function SidebarLink({
  icon,
  label,
  sectionId,
  isActive,
  prefersReducedMotion,
}: SidebarLinkProps) {
  const scrollTo = () => {
    const el = document.querySelector(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      onClick={scrollTo}
      className={`flex items-center gap-3 px-3 py-2 w-full cursor-pointer transition-colors duration-300 justify-center lg:justify-start relative ${
        isActive
          ? "text-accent"
          : "text-primary hover:text-accent"
      }`}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent rounded-r" />
      )}
      <span className="flex-shrink-0">{icon}</span>
      <span className="hidden lg:inline">{label}</span>
    </motion.button>
  );
}

export default function Sidebar() {
  const { language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("bio");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
    }

    let maxRatio = 0;
    let maxId = "";
    for (const { id } of SECTIONS) {
      const ratio = ratiosRef.current.get(id) ?? 0;
      if (ratio > maxRatio) {
        maxRatio = ratio;
        maxId = id;
      }
    }

    if (maxId) {
      setActiveSection(maxId);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-10% 0px -70% 0px",
    });

    const elements: Element[] = [];
    for (const { id } of SECTIONS) {
      const el = document.querySelector(`#${id}`);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) {
        observer.unobserve(el);
      }
    };
  }, [handleIntersection]);

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 lg:w-60 bg-background/60 dark:bg-background backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/40 border-r border-border z-50 flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:px-4 focus:py-2 focus:bg-lime-700 focus:text-white focus:rounded"
      >
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <div className="flex flex-col items-center gap-2 pt-4 pb-2 px-2">
        <motion.a
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
          href="/"
          className="flex items-center gap-2 font-semibold font-serif text-xl text-primary lg:self-start lg:pl-3"
        >
          {prefersReducedMotion ? (
            <GiPineTree size={24} />
          ) : (
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <GiPineTree size={24} />
            </motion.div>
          )}
          <span className="hidden lg:inline">
            Alek <span className="hidden sm:inline">Suso</span>
          </span>
        </motion.a>
      </div>

      <nav
        aria-label={
          language === "es" ? "Navegación principal" : "Main navigation"
        }
        className="flex flex-col items-center lg:items-stretch mt-4 px-2"
      >
        {SECTIONS.map(({ id, icon: Icon }) => (
          <SidebarLink
            key={id}
            icon={<Icon size={16} />}
            label={LABELS[id][language]}
            sectionId={`#${id}`}
            isActive={activeSection === id}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </nav>
    </aside>
  );
}
