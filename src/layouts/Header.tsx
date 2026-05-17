import { useState } from "react";
import {
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
  FaPeopleCarry,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiHamburgerMenu, GiPineTree } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { SecondaryButton } from "../components/ui/Button";
import Wrapper from "./Wrapper";
import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const scrollTo = (elementId: string) => {
    setMenuOpen(false);
    const targetElement = document.querySelector(elementId);
    if (!targetElement) return;
    const headerHeight = 64;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "#bio", label: "Bio", icon: <FaHome size={16} /> },
    { id: "#experience", label: language === "es" ? "Experiencia" : "Experience", icon: <FaAward size={16} /> },
    { id: "#projects", label: language === "es" ? "Proyectos" : "Projects", icon: <AiOutlineFundProjectionScreen size={16} /> },
    { id: "#attendee", label: language === "es" ? "Participaciones" : "Attendee", icon: <FaPeopleCarry size={16} /> },
    { id: "#education", label: language === "es" ? "Datos Académicos" : "Education", icon: <FaGraduationCap size={16} /> },
    { id: "#skills", label: language === "es" ? "Habilidades" : "Skills", icon: <FaBrain size={16} /> },
    { id: "#contact", label: language === "es" ? "Contacto" : "Contact", icon: <FaPaperPlane size={16} /> },
  ];

  return (
    <header className="sticky top-0 bg-background/60 backdrop-blur-xl w-full h-16 shadow-black/10 shadow-lg z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Wrapper>
        <div className="h-full flex justify-between items-center gap-4">
          <motion.a
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            href="/"
            className="flex gap-2 items-center font-semibold font-serif text-xl text-primary shrink-0"
          >
            {prefersReducedMotion ? (
              <GiPineTree size={24} />
            ) : (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <GiPineTree size={24} />
              </motion.div>
            )}
            Alek{" "}
            <span className="hidden sm:inline">Suso</span>
          </motion.a>

          <nav aria-label={language === "es" ? "Navegación principal" : "Main navigation"} className="hidden lg:flex items-center justify-start gap-1">
            {navItems.map((item) => (
              <SecondaryButton
                key={item.id}
                onClick={() => scrollTo(item.id)}
                label={item.label}
                icon={item.icon}
                header={true}
              />
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label={menuOpen ? (language === "es" ? "Cerrar menú" : "Close menu") : (language === "es" ? "Abrir menú" : "Open menu")}
          >
            {menuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </Wrapper>

      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-background dark:bg-neutral-900 border-b border-border shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary hover:bg-primary-muted hover:text-accent transition-colors text-left w-full"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
