import {
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
  FaPeopleCarry,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SecondaryButton } from "../components/ui/Button";
import { GiPineTree } from "react-icons/gi";
import Wrapper from "./Wrapper";
import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const scrollTo = (elementId: string) => {
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

  const { language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 bg-background/60 backdrop-blur-xl w-full h-16 shadow-black/10 shadow-lg z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:px-4 focus:py-2 focus:bg-lime-700 focus:text-white focus:rounded">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Wrapper>
        <div className="h-full flex justify-between items-center gap-12">
          <motion.a
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            href="/"
            className="flex gap-2 items-center font-semibold font-serif text-xl text-primary"
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
            Alek{" "}
            <span className="hidden sm:block">Suso</span>
          </motion.a>
          <nav aria-label={language === "es" ? "Navegación principal" : "Main navigation"} className="flex items-center justify-start gap-1">
            <SecondaryButton
              onClick={() => scrollTo("#bio")}
              label="Bio"
              icon={<FaHome size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#experience")}
              label={language === "es" ? "Experiencia" : "Experience"}
              icon={<FaAward size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#projects")}
              label={language === "es" ? "Proyectos" : "Projects"}
              icon={<AiOutlineFundProjectionScreen size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#attendee")}
              label={language === "es" ? "Participaciones" : "Attendee"}
              icon={<FaPeopleCarry size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#education")}
              label={language === "es" ? "Datos Académicos" : "Education"}
              icon={<FaGraduationCap size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#skills")}
              label={language === "es" ? "Habilidades" : "Skills"}
              icon={<FaBrain size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#contact")}
              label={language === "es" ? "Contacto" : "Contact"}
              icon={<FaPaperPlane size={16} />}
              header={true}
            />
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}
