import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaBrain,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
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

const SOCIAL = [
  {
    icon: FaGithub,
    href: "https://github.com/aleknss",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alek-suso-bondoc-b91b15294/",
    label: "LinkedIn",
  },
];

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
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      onClick={scrollTo}
      className={`flex items-center gap-3 px-3 py-2 w-full cursor-pointer transition-colors duration-300 relative ${
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
    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const tryObserve = (attempt: number) => {
      if (cancelled || attempt > 60) return;

      observer = new IntersectionObserver(handleIntersection, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -70% 0px",
      });

      let found = false;
      for (const { id } of SECTIONS) {
        const el = document.querySelector(`#${id}`);
        if (el) {
          observer.observe(el);
          found = true;
        }
      }

      if (!found) {
        observer.disconnect();
        observer = null;
        requestAnimationFrame(() => tryObserve(attempt + 1));
      }
    };

    requestAnimationFrame(() => tryObserve(0));

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [handleIntersection]);

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 lg:w-60 bg-background/60 dark:bg-background backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/40 border-r border-border z-50 flex flex-col justify-around">

      <div className="flex flex-col items-center gap-4 pt-4 px-2">
        <motion.a
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
          href="/"
          className="flex flex-col items-center gap-2 font-semibold font-serif text-xl text-primary"
        >
          {prefersReducedMotion ? (
            <GiPineTree size={48} />
          ) : (
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <GiPineTree size={48} />
            </motion.div>
          )}
          <span className="hidden lg:inline text-3xl">
            Alek <span className="hidden sm:inline">Suso</span>
          </span>
        </motion.a>
      </div>

      <nav
        aria-label={
          language === "es" ? "Navegación principal" : "Main navigation"
        }
        className="flex flex-col items-center mt-4 px-6"
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
      <div className="flex gap-4 justify-center pb-4 px-2">
        {SOCIAL.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.15 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </aside>
  );
}
